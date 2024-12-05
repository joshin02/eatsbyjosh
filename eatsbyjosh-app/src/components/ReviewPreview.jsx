import "./ReviewPreviewStyle.css"

const ReviewPreview = ({ image, link, restaurant, location, description}) => {
    return (
      <div className="review-container">
        <a className="review-image" href={link}><img src ={image}/></a>
        <a href={link}><h1>{restaurant}</h1></a>
        <h2>{location}</h2>
        <p className="review-content">{description}</p>
        <a className="continue" href={link}>CONTINUE READING</a>
      </div>
    );
  };
  
  export default ReviewPreview;