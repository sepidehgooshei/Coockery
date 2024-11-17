import React, { useState } from 'react';
import "./StarRat.css"
function StarRating(){
  const [rating, setRating] = useState(0); // امتیاز ثبت‌شده
  const [hover, setHover] = useState(0); // امتیاز هاور‌شده

  return (
    <>
<div className='px-4'>
<p>امتیاز شما: {rating}</p>

</div>

     <div className="star-rating">

      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <span
            key={index}
            className={`star ${ratingValue <= (hover || rating) ? 'hovered' : ''}`}
            onClick={() => setRating(ratingValue)} // ثبت امتیاز با کلیک
            onMouseEnter={() => setHover(ratingValue)} // ستاره‌ای که هاور شده است
            onMouseLeave={() => setHover(0)} // زمانی که موس از روی ستاره خارج می‌شود
          >
            ★
          </span>
        );
      })}


    </div>



    
    </>
     );
};

export default StarRating;
