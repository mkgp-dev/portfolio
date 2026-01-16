import { PaginationControls } from "@/features/blog/components/pagination-controls";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Separator } from "@/shared/ui/separator";
import { Skeleton } from "@/shared/ui/skeleton";
import { Textarea } from "@/shared/ui/textarea";
import { createComment, getErrorMessage, getPost, listComments, listPosts } from "@/features/blog/api";
import { formatDate } from "@/shared/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useMemo, useState } from "react";
import DOMPurify from "dompurify";
import { Spinner } from "@/shared/ui/spinner";
import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const DEFAULT_PAGE_SIZE = 6;
const DEFAULT_COMMENT_PAGE_SIZE = 5;

export default function Blog() {
    const [page, setPage] = useState(1);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [commentPage, setCommentPage] = useState(1);
    const [commentForm, setCommentForm] = useState({ username: "", content: "" });
    const [commentFormError, setCommentFormError] = useState<string | null>(null);

    const queryClient = useQueryClient();

    const postsQuery = useQuery({
        queryKey: ["blog-posts", page],
        queryFn: ({ signal }) => listPosts({ page, pageSize: DEFAULT_PAGE_SIZE, signal }),
        staleTime: 30_000,
        placeholderData: keepPreviousData,
    });

    const posts = postsQuery.data?.data ?? [];
    const postsMeta = postsQuery.data?.meta ?? null;
    const postsLoading = postsQuery.isPending;
    const postsError = postsQuery.error ? getErrorMessage(postsQuery.error) : null;

    const postQuery = useQuery({
        queryKey: ["blog-post", selectedId],
        enabled: Boolean(selectedId),
        queryFn: ({ signal }) => getPost({ id: selectedId as string, signal }),
        staleTime: 30_000,
    });

    const post = postQuery.data?.data ?? null;
    const postLoading = postQuery.isPending;
    const postError = postQuery.error ? getErrorMessage(postQuery.error) : null;

    const commentsQuery = useQuery({
        queryKey: ["blog-comments", selectedId, commentPage],
        enabled: Boolean(selectedId),
        queryFn: ({ signal }) =>
            listComments({
                id: selectedId as string,
                page: commentPage,
                pageSize: DEFAULT_COMMENT_PAGE_SIZE,
                signal,
            }),
        staleTime: 30_000,
        placeholderData: keepPreviousData,
    });

    const comments = commentsQuery.data?.data ?? [];
    const commentsMeta = commentsQuery.data?.meta ?? null;
    const commentsLoading = commentsQuery.isPending;
    const commentsError = commentsQuery.error ? getErrorMessage(commentsQuery.error) : null;

    const createCommentMutation = useMutation({
        mutationFn: (input: { username: string; content: string }) =>
            createComment(selectedId as string, input),
        onSuccess: () => {
            setCommentForm({ username: "", content: "" });
            setCommentFormError(null);
            setCommentPage(1);
            queryClient.invalidateQueries({ queryKey: ["blog-comments", selectedId] });
        },
        onError: (error) => {
            setCommentFormError(getErrorMessage(error));
        },
    });

    const commentSubmitting = createCommentMutation.isPending;

    const totalPages = useMemo(() => {
        if (!postsMeta) return 1;
        return Math.max(1, Math.ceil(postsMeta.total / postsMeta.pageSize));
    }, [postsMeta]);

    const commentTotalPages = useMemo(() => {
        if (!commentsMeta) return 1;
        return Math.max(1, Math.ceil(commentsMeta.total / commentsMeta.pageSize));
    }, [commentsMeta]);

    const sanitizedPostHtml = useMemo(() => {
        if (!post) return "";
        return DOMPurify.sanitize(post.content, { USE_PROFILES: { html: true } });
    }, [post]);

    const handleRead = (id: string) => {
        setSelectedId(id);
        setCommentPage(1);
        setCommentForm({ username: "", content: "" });
        setCommentFormError(null);
    };

    const handleBack = () => {
        setSelectedId(null);
        setCommentPage(1);
        setCommentForm({ username: "", content: "" });
        setCommentFormError(null);
    };

    const handleSubmitComment = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!selectedId) return;

        const username = commentForm.username.trim();
        const content = commentForm.content.trim();

        if (!username || !content) {
            setCommentFormError("Username and comment are required.");
            return;
        }

        setCommentFormError(null);
        createCommentMutation.mutate({ username, content });
    };

    return (
        <section className="space-y-6">
            {!selectedId ? (
                <div className="space-y-4">
                    <div className="grid gap-4 grid-cols-1">
                        {postsLoading ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Card key={index} className="rounded-none">
                                    <CardHeader>
                                        <Skeleton className="h-5 w-40" />
                                        <Skeleton className="h-4 w-24" />
                                    </CardHeader>
                                </Card>
                            ))
                        ) : postsError ? (
                            <Card className="rounded-none md:col-span-2">
                                <CardContent className="text-sm text-destructive">{postsError}</CardContent>
                            </Card>
                        ) : posts.length === 0 ? (
                            <Card className="rounded-none md:col-span-2">
                                <CardContent className="text-sm text-muted-foreground">No posts published yet.</CardContent>
                            </Card>
                        ) : (
                            posts.map((item) => (
                                <Card key={item.id} className="rounded-none transition hover:border-primary/60">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-heading">{item.title}</CardTitle>
                                        <CardDescription>Published on {formatDate(item.publishedAt)}</CardDescription>
                                    </CardHeader>
                                    <CardFooter className="justify-end">
                                        <Button size="sm" variant="outline" onClick={() => handleRead(item.id)}>
                                            Read
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))
                        )}
                    </div>

                    {postsMeta ? (
                        <PaginationControls
                            page={postsMeta.page}
                            totalPages={totalPages}
                            onPageChange={setPage}
                            className="justify-center"
                        />
                    ) : null}
                </div>
            ) : (
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" onClick={handleBack}>
                            <ArrowLeft className="size-4" />
                            Back to list
                        </Button>
                    </div>

                    {postLoading ? (
                        <Card className="rounded-none">
                            <CardContent>
                                <Skeleton className="h-40 w-full" />
                            </CardContent>
                        </Card>
                    ) : postError ? (
                        <Card className="rounded-none">
                            <CardContent className="text-sm text-destructive">{postError}</CardContent>
                        </Card>
                    ) : post ? (
                        <Card className="rounded-none">
                            <CardContent>
                                <article
                                    className="prose prose-invert max-w-none text-foreground"
                                    dangerouslySetInnerHTML={{ __html: sanitizedPostHtml }}
                                />
                            </CardContent>
                        </Card>
                    ) : (
                        <Card className="rounded-none">
                            <CardContent className="text-sm text-muted-foreground">
                                Select a post to view details.
                            </CardContent>
                        </Card>
                    )}

                    {post ? (
                        <Card className="rounded-none">
                            <CardHeader>
                                <CardTitle className="text-lg font-heading">Comments</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {commentsLoading ? (
                                    <Skeleton className="h-20 w-full" />
                                ) : commentsError ? (
                                    <p className="text-sm text-destructive">{commentsError}</p>
                                ) : comments.length === 0 ? (
                                    <p className="text-sm text-muted-foreground">No comments yet.</p>
                                ) : (
                                    <div className="space-y-4">
                                        {comments.map((comment, index) => (
                                            <div key={comment.id} className="space-y-2">
                                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                                    <span>{comment.username}</span>
                                                    <span>{formatDate(comment.createdAt)}</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    {comment.content}
                                                </p>
                                                {index < comments.length - 1 ? <Separator /> : null}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {commentsMeta ? (
                                    <PaginationControls
                                        page={commentsMeta.page}
                                        totalPages={commentTotalPages}
                                        onPageChange={setCommentPage}
                                        className="justify-center"
                                    />
                                ) : null}

                                <Separator />

                                <form onSubmit={handleSubmitComment} className="space-y-3">
                                    <div className="space-y-2">
                                        <Input
                                            value={commentForm.username}
                                            onChange={(event) =>
                                                setCommentForm((prev) => ({
                                                    ...prev,
                                                    username: event.target.value,
                                                }))
                                            }
                                            placeholder="Your name"
                                            aria-invalid={Boolean(commentFormError)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Textarea
                                            value={commentForm.content}
                                            onChange={(event) =>
                                                setCommentForm((prev) => ({
                                                    ...prev,
                                                    content: event.target.value,
                                                }))
                                            }
                                            placeholder="Write a comment..."
                                            aria-invalid={Boolean(commentFormError)}
                                            className="resize-none"
                                        />
                                        {commentFormError ? (
                                            <p className="text-xs text-destructive">{commentFormError}</p>
                                        ) : null}
                                    </div>
                                    <div className="flex justify-end">
                                        <Button type="submit" size="sm" disabled={commentSubmitting}>
                                            {commentSubmitting ? (
                                                <div className="flex flex-row items-center gap-2">
                                                    <Spinner />
                                                    <span>Submitting...</span>
                                                </div>
                                            ) : "Post comment"}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    ) : null}
                </div>
            )}
        </section>
    );
}
