import FavBlogPost from "./FavBlogPost";
import "./FavoritesStyle.css"

function Favorites() {
    return (
        <div className="fav-posts">
            <FavBlogPost 
                image="/img/Blogs/Steak-Donburi/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="Steak Donburi"
            />
            <FavBlogPost
                image="/img/Blogs/Sake-Blossom/sake.jpg"
                link="/blog/sake-blossom"
                dish="Sake Blossom"
            />
            <FavBlogPost
                image="/img/Blogs/Mala-Shrimp/malashrimp.jpg"
                link="/blog/mala-shrimp"
                dish="Shrimp Toast w/ Mala Sauce"
            />
            <FavBlogPost
                image="/img/Blogs/Steak-Taco/tacos.jpg"
                link="/blog/steak-taco"
                dish="Steak Tacos"
            />
        </div>
    );
}

export default Favorites;