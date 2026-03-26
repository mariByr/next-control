import type {IReview} from "./IReview.ts";

export  interface IReviewsResponse {
    id: number;
    page: number;
    results: IReview[];
    total_pages: number;
    total_results: number;
}

export interface AuthorDetails {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
}
