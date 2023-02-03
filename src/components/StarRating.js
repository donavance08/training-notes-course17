import Star from './Star';
import { useState } from 'react';

const createArray = (length) => [...Array(length)];

export default function StarRating({ rating = 10 }) {
  const [selectedStars, setSelectedStars] = useState(0);

  return createArray(rating).map((n, i) => (
    <Star
      key={i}
      selected={i < selectedStars}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ));
}
