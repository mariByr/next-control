import {getGenres} from "@/services/api.services";
import {IGenre} from "@/models/genres/IGenre";
import {GenreBadge} from "@/components/genreBange/GenreBadge";
import'./genre.css'
interface GenreListProps {
    activeGenre: number
    page?: number,

}

export const GenreList = async ({activeGenre, page, }: GenreListProps) => {
    const data = await getGenres();
    const genres = data.genres;
    const genresWithAll = [
        { id: 0, name: 'All' },
        ...genres
    ];
    return (
        <div className={'genre-list'}>
<div >
            {
                genresWithAll.map((genre: IGenre) => (
                    <GenreBadge key={genre.id}
                                activeGenre={activeGenre}
                                genre={genre}/>



                ))
            }
        </div>
        </div>
    );
};
