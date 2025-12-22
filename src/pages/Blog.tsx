import { PaginationControls } from "@/components/pagination-blog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";
import { createComment, getErrorMessage, getPost, isAbortError, listComments, listPosts } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import type { BlogComment, BlogPost, PaginationMeta } from "@/types";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import DOMPurify from "dompurify";
import { Spinner } from "@/components/ui/spinner";

const DEFAULT_PAGE_SIZE = 6;
const DEFAULT_COMMENT_PAGE_SIZE = 5;

export default function Blog() {
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [postsMeta, setPostsMeta] = useState<PaginationMeta | null>(null);
    const [postsLoading, setPostsLoading] = useState(true);
    const [postsError, setPostsError] = useState<string | null>(null);

    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [post, setPost] = useState<BlogPost | null>(null);
    const [postLoading, setPostLoading] = useState(false);
    const [postError, setPostError] = useState<string | null>(null);

    const [commentPage, setCommentPage] = useState(1);
    const [commentsMeta, setCommentsMeta] = useState<PaginationMeta | null>(null);
    const [comments, setComments] = useState<BlogComment[]>([]);
    const [commentsLoading, setCommentsLoading] = useState(false);
    const [commentsError, setCommentsError] = useState<string | null>(null);
    const [commentRefresh, setCommentRefresh] = useState(0);

    const [commentForm, setCommentForm] = useState({ username: "", content: "" });
    const [commentSubmitting, setCommentSubmitting] = useState(false);
    const [commentFormError, setCommentFormError] = useState<string | null>(null);

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

    useEffect(() => {
        let active = true;
        const controller = new AbortController();
        setPostsLoading(true);
        setPostsError(null);

        listPosts({ page, pageSize: DEFAULT_PAGE_SIZE, signal: controller.signal })
            .then((result) => {
                if (!active) return;
                setPosts(result.data);
                setPostsMeta(result.meta);
            })
            .catch((error) => {
                if (!active || isAbortError(error)) return;
                setPostsError(getErrorMessage(error));
            })
            .finally(() => {
                if (!active) return;
                setPostsLoading(false);
            });

        return () => {
            active = false;
            controller.abort();
        };
    }, [page]);

    useEffect(() => {
        if (!selectedId) return;

        let active = true;
        const controller = new AbortController();
        setPostLoading(true);
        setPostError(null);

        getPost({ id: selectedId, signal: controller.signal })
            .then((result) => {
                if (!active) return;
                setPost(result.data);
            })
            .catch((error) => {
                if (!active || isAbortError(error)) return;
                setPostError(getErrorMessage(error));
                setPost(null);
            })
            .finally(() => {
                if (!active) return;
                setPostLoading(false);
            });

        return () => {
            active = false;
            controller.abort();
        };
    }, [selectedId]);

    useEffect(() => {
        if (!selectedId) return;

        let active = true;
        const controller = new AbortController();
        setCommentsLoading(true);
        setCommentsError(null);

        listComments({
            id: selectedId,
            page: commentPage,
            pageSize: DEFAULT_COMMENT_PAGE_SIZE,
            signal: controller.signal,
        })
            .then((result) => {
                if (!active) return;
                setComments(result.data);
                setCommentsMeta(result.meta);
            })
            .catch((error) => {
                if (!active || isAbortError(error)) return;
                setCommentsError(getErrorMessage(error));
                setComments([]);
            })
            .finally(() => {
                if (!active) return;
                setCommentsLoading(false);
            });

        return () => {
            active = false;
            controller.abort();
        };
    }, [selectedId, commentPage, commentRefresh]);

    const handleRead = (id: string) => {
        setSelectedId(id);
        setPost(null);
        setComments([]);
        setCommentsMeta(null);
        setCommentPage(1);
        setPostError(null);
        setCommentsError(null);
    };

    const handleBack = () => {
        setSelectedId(null);
        setPost(null);
        setComments([]);
        setCommentsMeta(null);
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

        setCommentSubmitting(true);
        setCommentFormError(null);

        try {
            await createComment(selectedId, { username, content });
            setCommentForm({ username: "", content: "" });
            setCommentPage(1);
            setCommentRefresh((prev) => prev + 1);
        } catch (error) {
            setCommentFormError(getErrorMessage(error));
        } finally {
            setCommentSubmitting(false);
        }
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
                                                setCommentForm((prev) => ({ ...prev, username: event.target.value }))
                                            }
                                            placeholder="Your name"
                                            aria-invalid={Boolean(commentFormError)}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Textarea
                                            value={commentForm.content}
                                            onChange={(event) =>
                                                setCommentForm((prev) => ({ ...prev, content: event.target.value }))
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