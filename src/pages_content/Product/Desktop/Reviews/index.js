import React from 'react'
import StarRatingComponent from 'react-star-rating-component';

const Reviews = ({value, name, timestamp}) => {
  return (
    <div>
      <div className="flex items-center space-x-3">
        <StarRatingComponent
          className="text-3xl"
          starCount={5}
          value={value}
          editing={false}
        />
        <p className="text-base text-gray-500">
          {name} - {timestamp}
        </p>
      </div>
      <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati id omnis ut quod blanditiis, voluptates magnam ad perspiciatis nam nesciunt molestias, sed, iure voluptate ducimus numquam molestiae error sint eveniet!
        </p>
    </div>
  )
}

export default Reviews