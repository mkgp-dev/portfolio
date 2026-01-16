export type BlogPost = {
    id: string;
    title: string;
    content: string;
    publishedAt: string | null;
    createdAt: string;
    updatedAt: string;
};

export type BlogComment = {
    id: string;
    username: string;
    content: string;
    createdAt: string;
    updatedAt: string;
};