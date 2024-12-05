import "./HomeStyle.css"
import Favorites from "./Favorites";
import BlogPostItems from "./BlogPostItems";

function Home() {
    return (
      <div>
        <main>
            <h1 className="home">Check out some of my favorite eats!</h1>
            <Favorites/>
            <h1 className="home">Most Recent Eats</h1>
            <BlogPostItems/>
        </main>
      </div>
    );
  }
  
  export default Home;