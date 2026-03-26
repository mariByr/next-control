import type {ICast} from "./ICast.ts";


export  interface ICastResponse {
    id: number;
    cast: ICast[];
    crew: Crew[];
}
export interface Crew {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: string;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: string;
    credit_id?: string;
    department?: string;
    job?: string;
}
