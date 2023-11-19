export type ActivationEmail = { 
    email: string 
}

export type Activated = { 
    result: boolean 
}

export type AuthAccounts = {
    [key: string]: {
        registered: boolean
        activated: boolean
    }
}

export type ResetPassword = {
    uid: string
    token: string
}

export type RecoveredPassword = {
    recovered: boolean
}