import {IFilmsResponseModel} from "@/models/movi-models/IFilmsResponseModel";
import {IGenreResponse} from "@/models/genres/IGenreResponse";
import {IDetailFilms} from "@/models/movi-models/IDetailFilms";
import {IVideosResponse} from "@/models/video-models/IVideoResponse";
import {IReviewsResponse} from "@/models/reviews/IReviewsResponse";
import {ICastResponse} from "@/models/actorsModels/ICastResponse";

export const getMovies = async (page: number, activeGenre:number  | undefined): Promise<IFilmsResponseModel> => {

    const params = new URLSearchParams();

    params.append('page', page.toString());

    if (activeGenre) {
        params.append('with_genres', activeGenre.toString());
    }

    const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?${params.toString()}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_TOKEN}`
            },
            next: { revalidate: 60 }
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch movies');
    }

    return res.json();
};

 export const searchMovies= async (search:string, page:number):Promise<IFilmsResponseModel> =>
 { const params = new URLSearchParams();
     params.append('query', search);
     params.append('page', page.toString());
     const res= await fetch( `https://api.themoviedb.org/3/search/movie?${params.toString()}`,{ headers: {
     Authorization: `Bearer ${process.env.TMDB_TOKEN}`
 },
     next: { revalidate: 60 }}
 );

     if (!res.ok) {
         throw new Error('Failed to fetch movies');
     }

      return  res.json();
 }
 export const getGenres= async ():Promise<IGenreResponse>=>{
     const res=await fetch(
         `https://api.themoviedb.org/3/genre/movie/list`,{
             headers:  {
         Authorization: `Bearer ${process.env.TMDB_TOKEN}`
     },
     next: { revalidate: 60 }}
 );
     if (!res.ok) {
         throw new Error('Failed to fetch genres');
     }
     return res.json();
         }
//film be id
//for video
//function for reviwes
//getCast //function for actors
export const getById = async <T,>(
    id: number,
    endpoint?: string
): Promise<T> => {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}${endpoint || ''}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
            },
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
};
export const getFilmById=async(id:number):Promise<IDetailFilms> => {
    return  getById<IDetailFilms> (id)}

export const getVideo=async (id:number):Promise<IVideosResponse> => {
     return  getById (id,'/videos');
}

export const getReviews = async (id:number):Promise<IReviewsResponse> =>{
    return  getById<IReviewsResponse> (id,'/reviews');
}

export const getCast=async (id:number):Promise<ICastResponse> => {
    return getById <ICastResponse> (id,'/casts')
}
