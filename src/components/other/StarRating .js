import React, { useState } from 'react';
import "./StarRat.css"
function StarRating(){
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(0); 

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
            onClick={() => setRating(ratingValue)} 
            onMouseEnter={() => setHover(ratingValue)} 
            onMouseLeave={() => setHover(0)} 
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
