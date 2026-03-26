import {IMovie} from "@/models/movi-models/IMovie";
import Link from "next/link";
import {PosterPreview} from "@/components/PosterPreview";
import {StarsRating} from "@/components/StarsRating";
import './card.css'

interface MovieListCardProps {
    movie: IMovie
}

export const MovieListCard = ({movie}: MovieListCardProps) => {
    return (
        <div >
      <Link key={movie.id} href={`/movies/${movie.id}`}>
          <div className={'card'}>
              <PosterPreview posterPath={movie.poster_path} />
              <h2>{movie.title.slice(0, 45)}</h2>
              <StarsRating rating={movie.vote_average} />
          </div></Link>
        </div>
    );
};
