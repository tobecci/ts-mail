export interface sendmailBodyDto{
    email: string,
    subject: string,
    body: string
}

export interface sendmailResponseDto{
    status: string,
    message: string
}