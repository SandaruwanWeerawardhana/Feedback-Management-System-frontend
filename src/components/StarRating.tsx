import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface StarRatingProps {
  initialRating?: number;
  onChange: (rating: number) => void;
  disabled?: boolean;
}

const StarRating = ({ initialRating = 0, onChange, disabled = false }: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleRatingChange = (newRating: number) => {
    if (disabled) return;
    
    setRating(newRating);
    onChange(newRating);
  };

  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleRatingChange(star)}
          onMouseEnter={() => !disabled && setHover(star)}
          onMouseLeave={() => !disabled && setHover(0)}
          disabled={disabled}
          className={`transition-transform ${!disabled && 'hover:scale-110'} focus:outline-none`}
          aria-label={`Rate ${star} stars out of 5`}
        >
          <Star
            className={`h-6 w-6 transition-colors ${
              star <= (hover || rating)
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            } ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;