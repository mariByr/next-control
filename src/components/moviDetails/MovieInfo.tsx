import {getCast, getFilmById, getReviews, getVideo} from "@/services/api.services";
import {IDetailFilms} from "@/models/movi-models/IDetailFilms";
import {PosterPreview} from "@/components/PosterPreview";
import {GenreBadge} from "@/components/genreBange/GenreBadge";
import {CastsComponent} from "@/components/casts/CastsComponent";
import {VideoComponent} from "@/components/video/VideoComponent";
import {IVideo} from "@/models/video-models/IVideo";
import {ReviewsDropdown} from "@/components/dropdown/ReviewsDropdown";

import'./movieInfo.css'

interface MovieInfoProps {
    id: number
}

export const MovieInfo = async ({id}: MovieInfoProps) => {
    const film:IDetailFilms = await getFilmById(id);
    const castResponse=await getCast(id)
    const cast=castResponse.cast
    const videoResponse=await getVideo(id)
    const videos:IVideo[]=videoResponse.results
    const reviewsRes = await getReviews(id);
    const reviews = reviewsRes.results

    return (
        <div className={'movie-detail'}>
            <div className="movie-info">
                <PosterPreview posterPath={film.poster_path}/>
                <h1 className={'text-3xl font-bold'}>{film.title}</h1>
                <div className={'flex gap-2 flex-wrap'}>
                    {
                      film.genres?.map(genre => (
                          <GenreBadge key={genre.id} genre={genre}/>
                      ))
                    }
                </div>
                <p>
                    <strong>Rating:</strong>{film.vote_average}
                </p>
                <p> <strong>Country:</strong>{" "}
                {film.production_countries?.map(c => c.name).join(", ")}
            </p>
            <p><strong>Release Date:</strong> {film.release_date} </p>
            <p> <strong>Adult:</strong> {film.adult ? "Yes" : "No"} </p>
            <p> <strong>Language:</strong> {film.original_language}</p>
            <p><strong>Runtime:</strong>{film.runtime}</p>
            <p><strong>Main actors</strong></p>
            <div className="flex gap-2">
                {
                    cast?.slice(0, 6).map((actor) =>( <CastsComponent key={actor.id} cast={actor}/>))}
            </div>
        </div>

    <div className={'video'}>
        <h2>Watch a trailer </h2>
        <div><VideoComponent videos={videos}/></div>
        <div><p><strong>What is this movie about?</strong></p>
            <p>{film.overview}</p></div>
      <ReviewsDropdown reviews={reviews}/>
        </div>

        </div>
    );
};
