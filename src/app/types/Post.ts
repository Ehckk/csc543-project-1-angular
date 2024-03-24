import type { User } from "./User"

interface PostId {
    post_id: number
}

interface PostPartial {
    post_id: number
    reply_id: number | null
    content: string
    created: string
    author: User | null
    author_id: number 
    likes: { user_id: number }[]
    reply_count: number
    has_liked: boolean
}

interface Post extends PostPartial {
    replies: PostPartial[]
}

interface CreatePost {
    content: string
}

export type {
    PostId,
    PostPartial,
    Post,
    CreatePost
}