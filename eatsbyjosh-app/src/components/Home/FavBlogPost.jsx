import "./FavBlogStyle.css"

const FavBlogPost = ({ image, link, dish, }) => {
    return (
      <div className="favblogpost">
        <a href={link}>
            <img src ={image}/>
            <div className="text-contain-fav">
              <h2>{dish}</h2>
            </div>
        </a>
      </div>
    );
  };
  
  export default FavBlogPost;

