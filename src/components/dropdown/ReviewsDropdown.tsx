'use client'
import {IReview} from "@/models/reviews/IReview";
import ReviewsComponent from "@/components/reviews/ReviewsComponent";
import React, {useState} from "react";

interface ReviewsDropdownProps {
    reviews: IReview[]
}

export const ReviewsDropdown = ({reviews}: ReviewsDropdownProps) => {
    const [open,setOpen] = useState(false);

    return (
        <div>
            <button onClick={()=>setOpen(!open)}>Show reviews</button>
<div>
            {open &&
                (reviews?.map((review:IReview)=> (

                        <ReviewsComponent key={review.id} review={review}/>
                    )))}
</div>


        </div>
    );
};
