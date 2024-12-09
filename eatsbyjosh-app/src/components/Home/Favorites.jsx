import FavBlogPost from "./FavBlogPost";
import "./FavoritesStyle.css"

function Favorites() {
    return (
        <div className="fav-posts">
            <FavBlogPost 
                image="/img/steakdonburi.jpg"
                link="/blog/steak-donburi"
                dish="Steak Donburi"
            />
            <FavBlogPost
                image="/img/sake.jpg"
                link="/blog/steak-donburi"
                dish="Sake Blossom"
            />
            <FavBlogPost
                image="/img/malashrimp.jpg"
                link="/blog/steak-donburi"
                dish="Shrimp Toast w/ Mala Sauce"
            />
            <FavBlogPost
                image="/img/tacos.jpg"
                link="/blog/steak-donburi"
                dish="Steak Tacos"
            />
        </div>
    );
}

export default Favorites;