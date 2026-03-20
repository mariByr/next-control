import {getGenres} from "@/services/api.services";
import {IGenre} from "@/models/genres/IGenre";
import {GenreBange} from "@/components/GenreBange";

interface GenreListProps {
    genreId: number | undefined
}

export const GenreList =async ({genreId}: GenreListProps) => {const data = await getGenres();
    const genres=data.genres;

    return (
        <div className={'flex gap-4 p-2'}>
            <GenreBange genreId={0} genreName={'all'}/>
            {
                genres.map((genre: IGenre) => (
                    <GenreBange key={genre.id} genreId={genre.id} genreName={genre.name}/>
                ))
            }
        </div>
    );
};
