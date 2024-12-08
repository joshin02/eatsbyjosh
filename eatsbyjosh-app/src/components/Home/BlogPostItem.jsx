import "./BlogPostItemStyle.css"

const BlogPostItem = ({ image, link, dish, date, description}) => {
    return (
      <div className="post-container">
        <a className="thumbnail-image" href={link}><img src ={image}/></a>
        <div className="blog-text-container">
            <p className="date">{date}</p>
            <a href={link}><h1>{dish}</h1></a>
            <p className="description">{description}</p>
            <a className="cont" href={link}>CONTINUE READING</a>
        </div>
      </div>
    );
  };
  
  export default BlogPostItem;