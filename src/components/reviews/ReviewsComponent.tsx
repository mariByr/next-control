import React from 'react';
import {IReview} from "@/models/reviews/IReview";

interface ReviewsComponentProps {
    review: IReview
}

const ReviewsComponent = ({review}: ReviewsComponentProps) => {
    return (
        <div>
            <h3>*****</h3>
            <p>{review.content.length > 500
                ? review.content.slice(0, 500) + "..."
                : review.content}</p>
            <p>{review.author}</p>
        </div>
    );
};

export default ReviewsComponent;
