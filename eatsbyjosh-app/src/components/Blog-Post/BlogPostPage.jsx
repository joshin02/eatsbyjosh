import { useParams } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import "./BlogPostPageStyle.css"
  
  function BlogPostPage() {
    const { id } = useParams();
    const blogPost = BlogPosts[id]; 
  
    if (!blogPost) {
      return <div>Blog post not found!</div>;
    }
  
    return (
      <div className="blog-post-page">
        <h1>{blogPost.dish}</h1>
        <section className="blog-intro">
            <img src={blogPost.image1} alt={blogPost.dish} />
            <p>{blogPost.intro}</p>
        </section>
        <section className="pic-highlights">
            <img src={blogPost.image2} alt={blogPost.dish} />
            <img src={blogPost.image3} alt={blogPost.dish} />
            <img src={blogPost.image4} alt={blogPost.dish} />
        </section>
        <section className="body-content">
            <p>{blogPost.body}</p>
            {blogPost.keynote1 && (
                <p>{blogPost.keynote1}</p>
            )}
            {blogPost.keynote2 && (
                <p>{blogPost.keynote2}</p>
            )}
            {blogPost.keynote3 && (
                <p>{blogPost.keynote3}</p>
            )}
            {blogPost.keynote4 && (
                <p>{blogPost.keynote4}</p>
            )}
            {blogPost.keynote5 && (
                <p>{blogPost.keynote5}</p>
            )}
            <p>{blogPost.conclusion}</p>
        </section>
      </div>
    );
  }
  
  export default BlogPostPage;