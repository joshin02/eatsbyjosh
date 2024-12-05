import "./FavBlogStyle.css"

const FavBlogPost = ({ image, link, dish, }) => {
    return (
      <div className="favblogpost">
        <a href={link}>
            <img src ={image}/>
            <h2>{dish}</h2>
        </a>
      </div>
    );
  };
  
  export default FavBlogPost;

