// USER
export type UserFullName = {
    first_name: string
    last_name: string
}

export type User = {
    id?: number
    first_name: string
    last_name: string
    email: string
    amount_attempts?: number
}

// AUTHENTICATION 
export type Token = {
    access: string
    refresh: string
}

export type RegistrationResponseData = {
    first_name: string
    last_name: string
    email: string
}

export type LoginResponseData<T extends User> = {
    refresh: string
    access: string
    user: T
}

export type RefreshResponseData = {
    refresh: string
}

export type ResetPasswordResponseData = {
    uid: string
    token: string
} 

export type ConfirmResetPassword = {
    uid: string
    token: string
    new_password: string
    re_new_password: string
}

export type ChangePassword = {
    new_password: string
    re_new_password: string
    current_password: string
}

// RECORDS
export type Result = {
    id: number
    create_date: string
    image_uri: string
    image_author: string
    positive_video: string
    negative_video: string
    end_video: string
    audio: string
    owner: number
    theme: number
}

export type Records = {
    count: number
    next: string
    previous: string
    results: Result []
}

export type Record = {
    id: number
    image_uri: string
    image_author: string
    create_date: string
    positive_video: string
    negative_video: string
    end_video: string
    negative_audio: string
    positive_audio: string
    summary_audio: string
    comment: string
    positive_text: string
    negative_text: string
    summary_text: string  
    owner: number
    theme: number
}

export type Comment = {
    comment: string
}

export type AmountAttempts = {
    amount_attempts: number
}