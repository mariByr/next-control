import type {AuthorDetails} from "./IReviewsResponse.ts";

export interface IReview{
    author: string;
    author_details: AuthorDetails;
    content: string;
    created_at?: string;
    id: string;
    updated_at?: string;
    url?: string;
}
