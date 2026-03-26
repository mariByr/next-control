'use client'
import Link from "next/link";
import'./bange.css'

import { useSearchParams} from "next/navigation";
type GenreBadgeProps = {
    genre: {
        id: number;
        name: string;
    };
    activeGenre?: number;
};
export const GenreBadge = ({ genre, activeGenre }: GenreBadgeProps) => {

console.log('htylth');
    const searchParams = useSearchParams();

    console.log('genre', genre.id);
    const params = new URLSearchParams(searchParams.toString());
    console.log(params.toString());
    if (genre.id === 0) {
        // ALL
        params.delete('genreId');
    } else {
        params.set('genreId', String(genre.id));
        params.delete('search');
    }

    params.set('page', '1');

    params.delete('search');

    const isActive =
        genre.id === 0
            ? !searchParams.get('genreId')
            : Number(searchParams.get('genreId')) === genre.id;

    return (
        <Link href={genre.id === 0 ? '/movies' : `/movies?${params.toString()}`}>
            <span className={`badge ${isActive ? 'active' : ''}`}>
                {genre.name}
            </span>
        </Link>
    );
};
// <Link href={`/movies?genreId=${genre.id}`}>
