import {IMovie} from "@/models/IMovie";
import {getMovies, searchMovies} from "@/services/api.services";
import {GenreList} from "@/components/GenreList";
import {MovieList} from "@/components/MovieList";
import {Pagination} from "@/components/Pagination";
type Props={
    searchParams:Promise<{
        page: number,
        genreId?: number,
        search: string,
    }>
}

export default async function MoviePage( {searchParams}:Props){
    const params=await searchParams;
    const page=Number(params.page) ||1;
    const genreId=Number(params.genreId) || undefined;

    const search=params.search ;

    let response;

    if (search) {
        response = await searchMovies(search, page);
    } else {
        response = await getMovies(page, genreId);
    }
    const movies:IMovie[] = response.results;

    return (
        <div className="min-h-screen">
            <main >

                <GenreList genreId={genreId} />
                <MovieList movies={movies} />
                <Pagination page={page}/>
            </main>
        </div>
    );
}
