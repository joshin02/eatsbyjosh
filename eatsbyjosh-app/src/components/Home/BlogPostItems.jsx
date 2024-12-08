import BlogPostItem from "./BlogPostItem";
import "./BlogPostItemsStyle.css"

function BlogPostItems() {
    return (
        <div className="blog-post-items">
            <BlogPostItem
                image="/img/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="filler dish"
                date="December 4, 2024"
                description="this is some text that will be filled with a short description of the dish"
            />
            <BlogPostItem
                image="/img/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="filler dish"
                date="December 4, 2024"
                description="this is some text that will be filled with a short description of the dish"
            />
            <BlogPostItem
                image="/img/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="filler dish"
                date="December 4, 2024"
                description="this is some text that will be filled with a short description of the dish"
            />
            <BlogPostItem
                image="/img/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="filler dish"
                date="December 4, 2024"
                description="this is some text that will be filled with a short description of the dish."
            />
            <BlogPostItem
                image="/img/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="filler dish"
                date="December 4, 2024"
                description="this is some text that will be filled with a short description of the dish"
            />
            <BlogPostItem
                image="/img/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="filler dish"
                date="December 4, 2024"
                description="this is some text that will be filled with a short description of the dish"
            />
        </div>
    );
}

export default BlogPostItems;