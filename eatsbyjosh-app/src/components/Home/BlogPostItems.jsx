import BlogPostItem from "./BlogPostItem";
import "./BlogPostItemsStyle.css"

function BlogPostItems() {
    return (
        <div className="blog-post-items">
            <BlogPostItem
                image="/img/Blogs/Steak-Donburi/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="Steak Donburi"
                date="December 4, 2024"
                description="Shoyu cured egg yolk, medium-rare ribeye with homemade donburi sauce, and wasabi yuzu onion garnish. Probably my favorite dish to cook right now."
            />
            <BlogPostItem
                image="/img/Blogs/Sake-Blossom/sake.jpg"
                link="/blog/sake-blossom"
                dish="Sake Blossom"
                date="December 4, 2024"
                description="Salmon sashimi and red radish slices, complemented with microgreens, tobiko, and lemon zest. Homemade ponzu drizzled on top. A nice little appetizer."
            />
            <BlogPostItem
                image="/img/Blogs/Mala-Shrimp/malashrimp.jpg"
                link="/blog/mala-shrimp"
                dish="Shrimp Toast w/ Mala Cream"
                date="December 4, 2024"
                description="A play off of Hong Kong shrimp toast, this is shrimp paste on top of a hashbrown fried til golden. A sweet and spicy mala cream and topped with a garlic scallion tuile. You're gonna want to try this one."
            />
            <BlogPostItem
                image="/img/Blogs/Steak-Taco/tacos.jpg"
                link="/blog/steak-taco"
                dish="Steak Tacos"
                date="December 4, 2024"
                description="Miso-marinated steak, cabbage, and apple pico. Served with a wasabi mayo and charred lemon. Inspired by Gordan Ramsey!"
            />
        </div>
    );
}

export default BlogPostItems;