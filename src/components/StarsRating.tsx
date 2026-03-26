import type {FC} from "react";

interface IStarsRatingProps {
    rating: number;
}

export const StarsRating: FC<IStarsRatingProps> = ({ rating }) => {
    return <div className={'mb-4'}>⭐ {rating}</div>;
};
