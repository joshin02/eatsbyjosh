import { useParams } from 'react-router-dom';
import ReviewPosts from './ReviewPosts';
import "./ReviewPostPageStyle.css"
  
  function ReviewPostPage() {
    const { id } = useParams();
    const reviewPost = ReviewPosts[id]; 
  
    if (!reviewPost) {
      return <div>Review post not found!</div>;
    }
  
    return (
      <div className="review-post-page">
        <section className="headline">
            <h1>{reviewPost.restaurant}, {reviewPost.cuisine} in {reviewPost.location}</h1>
            <p>{reviewPost.date}</p>
        </section>
        <section className="reivew-content">
            <img src={reviewPost.restaurantimage} alt={reviewPost.restaurant} />
            <p>{reviewPost.reviewtext}</p>
        </section>
        <section className="pic-highlights-container">
            <div className="food-pic-highlight-container">
                <img src={reviewPost.pic1} />
                <p>{reviewPost.caption1}</p>
            </div>
            <div className="food-pic-highlight-container">
                <img src={reviewPost.pic2} />
                <p>{reviewPost.caption2}</p>
            </div>
            {reviewPost.pic3 && (
                <div className="food-pic-highlight-container">
                    <img src={reviewPost.pic3} />
                    <p>{reviewPost.caption3}</p>
                </div>
            )}
            {reviewPost.pic4 && (
                <div className="food-pic-highlight-container">
                    <img src={reviewPost.pic4} />
                    <p>{reviewPost.caption4}</p>
                </div>
            )}
            {reviewPost.pic5 && (
                <div className="food-pic-highlight-container">
                    <img src={reviewPost.pic5} />
                    <p>{reviewPost.caption5}</p>
                </div>
            )}
            {reviewPost.pic6 && (
                <div className="food-pic-highlight-container">
                    <img src={reviewPost.pic6} />
                    <p>{reviewPost.caption6}</p>
                </div>
            )}
        </section>
      </div>
    );
  }
  
  export default ReviewPostPage;