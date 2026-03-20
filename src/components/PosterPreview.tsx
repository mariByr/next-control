import {FC} from "react";

interface IPosterPreviewProps {
    posterPath: string
}

export const PosterPreview: FC<IPosterPreviewProps> = ({ posterPath }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

    return <img src={imageUrl} alt="movie poster" />;
};
