import {IMovie} from "@/models/movi-models/IMovie";
import {MovieListCard} from "@/components/movie-card/MovieListCard";
import './list.css'

interface MovieListProps {
    movies: IMovie[]
}

export const MovieList = ({movies}: MovieListProps) => {console.log(movies)

    return (
        <div className="movie-list">
            {
                movies?.map((movie:IMovie) => (
                    <MovieListCard key={movie.id} movie={movie}/>))
            }
        </div>
    )
};
