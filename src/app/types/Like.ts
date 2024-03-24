import type { PostPartial } from "./Post"
import type { User } from "./User"

interface LikePartial {
    user_id: number,
    post_id: number
}

interface Like {
    user: User
    post: PostPartial
}

export type {
    Like,
    LikePartial
}