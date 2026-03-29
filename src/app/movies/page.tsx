import {IMovie} from "@/models/movi-models/IMovie";
import {getMovies, searchMovies} from "@/services/api.services";
import {GenreList} from "@/components/genre-list/GenreList";
import {MovieList} from "@/components/moviList/MovieList";
import {Pagination} from "@/components/pagination/Pagination";

type Props={
    searchParams:{
        page: number,
        genreId?: number,
        search: string,
    }
}

export default async function MoviePage( {searchParams}:Props){
    const params=await searchParams;
    const page=Number(params.page) ||1;
    const activeGenre=Number(params.genreId)


    const search=params.search ;

    let response;

    if (search) {
        response = await searchMovies(search, page);
    } else {
        response = await getMovies(page,   activeGenre);
    }
    const movies:IMovie[] = response.results;
    const totalPage=response.total_pages

    return (
        <div className="min-h-screen">
            <main className={'flex flex-col items-center gap-10'}>
                <GenreList />
                {search && movies && movies.length === 0 && (
                    <p className={'text-red-500'}>Nothing was found for your request.</p>
                )}
                <MovieList movies={movies} />
                <Pagination page={page} totalPages={totalPage} />
            </main>
        </div>
    );
}
