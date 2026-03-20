import {IFilmsResponseModel} from "@/models/IFilmsResponseModel";
import {IGenreResponse} from "@/models/genres/IGenreResponse";



export const getMovies = async (page: number,
    genreId?: number,): Promise<IFilmsResponseModel> => {

    const params = new URLSearchParams();

    params.append('page', page.toString());

    if (genreId) {
        params.append('with_genres', genreId.toString());
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
