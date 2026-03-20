import Link from "next/link";

interface GenreBangeProps {
    genreId: number,
    genreName: string
}

export const GenreBange = ({ genreId, genreName}: GenreBangeProps) => {
    return (
        <div>
            <Link href={`/movies?genreId=${genreId}`}>
                <span className={'border border-gray-500 p-1 rounded'}>{genreName}</span>
            </Link>
        </div>
    );
};
