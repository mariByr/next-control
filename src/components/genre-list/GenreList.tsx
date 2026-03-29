import {getGenres} from "@/services/api.services";
import {IGenre} from "@/models/genres/IGenre";
import {GenreBadge} from "@/components/genreBange/GenreBadge";
import'./genre.css'



export const GenreList = async () => {
    const data = await getGenres();
    const genres = data.genres;
    const genresWithAll = [
        { id: 0, name: 'All' },
        ...genres
    ];

    return (
        <div className={'genre-list'}>
<div className={'container'} >
            {
                genresWithAll.map((genre: IGenre) => (
                    <GenreBadge key={genre.id}
                                genre={genre}/>



                ))
            }
        </div>
        </div>
    );
};
