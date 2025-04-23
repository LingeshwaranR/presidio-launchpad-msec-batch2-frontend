export interface IBlog {
    id?: number;
    title: string;
    description: string;
    image_url: string;
    content: string;
    user_id?: number;
    created_at?: string;
    updated_at?: string;
}

export interface IBlogResponse {
    responseData: IBlog[];
}