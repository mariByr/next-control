import {IMovie} from "@/models/movi-models/IMovie";
import {MovieListCard} from "@/components/movie-card/MovieListCard";

interface MovieListProps {
    movies: IMovie[]
}

export const MovieList = ({movies}: MovieListProps) => {console.log(movies)

    return (
        <div className="w-full  grid grid-cols-4 gap-4 p-4 ">
            {
                movies?.map((movie:IMovie) => (
                    <MovieListCard key={movie.id} movie={movie}/>))
            }
        </div>
    )
};
