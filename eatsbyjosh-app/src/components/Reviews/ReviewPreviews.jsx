import ReviewPreview from "./ReviewPreview";
import "./ReviewPreviewsStyle.css"

function ReviewPreviews() {
    return (
        <div className="review-previews-container"> 
            <ReviewPreview
                image="/img/Vox-Kitchen/vox.jpg"
                link="/Reviews/vox-kitchen"
                restaurant="restaurant name"
                location="city, state"
                description="this is where the review of the restaurant will go. this is where the review of the restaurant will go.
                             this is where the review of the restaurant will go. this is where the review of the restaurant will go."
            />
            <ReviewPreview
                image="/img/Vox-Kitchen/vox.jpg"
                link="/Reviews/vox-kitchen"
                restaurant="restaurant name"
                location="city, state"
                description="this is where the review of the restaurant will go."
            />
            <ReviewPreview
                image="/img/Vox-Kitchen/vox.jpg"
                link="/Reviews/vox-kitchen"
                restaurant="restaurant name"
                location="city, state"
                description="this is where the review of the restaurant will go."
            />
        </div>
    );
}

export default ReviewPreviews;