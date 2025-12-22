import type { BlogComment, BlogPost, Paginated, PaginationMeta } from "@/types";

function normalizeBaseUrl(value?: string) {
    const trimmed = value?.trim();
    if (!trimmed || trimmed === "undefined" || trimmed === "null") {
        return "http://localhost:3000/api";
    }
    return trimmed.replace(/\/+$/, "");
}

const API_BASE_URL = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL);

type ApiErrorPayload = {
    error?: {
        code?: string;
        message?: string;
        requestId?: string;
    };
};

export class ApiError extends Error {
    status: number;
    code: string;
    requestId?: string;

    constructor(status: number, code: string, message: string, requestId?: string) {
        super(message);
        this.status = status;
        this.code = code;
        this.requestId = requestId;
    }
}

function buildQuery(params: Record<string, string | number | boolean | undefined | null>) {
    const search = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
        if (value === undefined || value === null || value === "") continue;
        search.set(key, String(value));
    }
    return search.toString();
}

function buildUrl(path: string) {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `${API_BASE_URL}${normalized}`;
}

function safeJson(text: string) {
    try {
        return JSON.parse(text);
    } catch {
        return { message: text };
    }
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
    const url = buildUrl(path);
    const headers = new Headers(options.headers);

    headers.set("Accept", "application/json");
    if (options.body && !headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
    }

    const response = await fetch(url, { ...options, headers });
    const text = await response.text();
    const data = text ? safeJson(text) : null;

    if (!response.ok) {
        const payload = (data ?? {}) as ApiErrorPayload;
        const message = payload.error?.message || response.statusText || "Request failed";
        const code = payload.error?.code || "request_failed";
        throw new ApiError(response.status, code, message, payload.error?.requestId);
    }

    return data as T;
}

export function getErrorMessage(error: unknown) {
    if (error instanceof ApiError) return error.message;
    if (error instanceof Error) return error.message;
    return "Something went wrong";
}

export function isAbortError(error: unknown) {
    return error instanceof Error && error.name === "AbortError";
}

export async function listPosts(params: { page: number; pageSize: number; signal?: AbortSignal }) {
    const query = buildQuery({ page: params.page, pageSize: params.pageSize });
    return apiFetch<Paginated<BlogPost>>(`/public/posts?${query}`, { signal: params.signal });
}

export async function getPost(params: { id: string; signal?: AbortSignal }) {
    return apiFetch<{ data: BlogPost }>(`/public/posts/${params.id}`, { signal: params.signal });
}

export async function listComments(params: { id: string, page: number, pageSize: number, signal?: AbortSignal }) {
    const query = buildQuery({ page: params.page, pageSize: params.pageSize });
    return apiFetch<{ data: BlogComment[]; meta: PaginationMeta }>(
        `/public/posts/${params.id}/comments?${query}`,
        { signal: params.signal }
    );
}

export async function createComment(id: string, input: { username: string, content: string }) {
    return apiFetch<{ data: BlogComment }>(`/public/posts/${id}/comments`, {
        method: "POST",
        body: JSON.stringify(input),
    });
}