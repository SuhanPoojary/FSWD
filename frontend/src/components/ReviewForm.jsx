import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Star } from "lucide-react";
import { useToast } from "../hooks/use-toast";

const ReviewForm = ({ onClose, entityName, entityType }) => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please provide a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    console.log("Review submitted:", { rating, review, entityName, entityType });
    
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    
    if (onClose) onClose();
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-2">Write a Review</h2>
      <p className="text-gray-500 mb-6">
        Share your experience working with {entityName}
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Overall Rating</h3>
          <div className="flex items-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 focus:outline-none focus:ring-0"
              >
                <Star
                  className="h-8 w-8 text-[#FF4B55]"
                  fill={(hoverRating || rating) >= star ? "#FF4B55" : "none"}
                />
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-500 ml-1">
            {rating === 1 && "Poor"}
            {rating === 2 && "Fair"}
            {rating === 3 && "Good"}
            {rating === 4 && "Very Good"}
            {rating === 5 && "Excellent"}
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-3">Your Review</h3>
          <Textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={5}
            placeholder={`Tell others about your experience with ${entityName}. What went well? What could have been better?`}
            className="w-full"
          />
          <p className="text-xs text-gray-500 mt-2">
            Your review will be public and may help others make informed decisions.
          </p>
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
          >
            Submit Review
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
