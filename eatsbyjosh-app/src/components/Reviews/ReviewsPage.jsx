import "./RecipesAndReviewsStyle.css"
import ReviewPreviews from "./ReviewPreviews";

function Reviews() {
    return (
      <div>
        <main>
            <div class="pageDescription">
                <h1>Reviews</h1>
                <p>Fast food, dine-in, fine-dining, and more! Here’s my honest reviews of restaurants I’ve tried so far. Check some of these places out if you’re in the area :)</p>
            </div>
            <ReviewPreviews/>
        </main>
      </div>
    );
  }
  
  export default Reviews;