interface UserId {
    user_id: number
}

interface User {
    user_id: number
    username: string
    display_name: string
}

interface Credentials {
    username?: string
    password?: string
}

interface Registration extends Credentials {
    confirm: string
    display_name: string
} 

export type {
    UserId,
    User,
    Credentials,
    Registration
}