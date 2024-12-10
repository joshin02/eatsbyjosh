import "./HomeStyle.css"
import Favorites from "./Favorites";
import BlogPostItems from "./BlogPostItems";

function Home() {
    return (
      <div>
        <main>
            <div className="home">
              <h1>Featured Eats!</h1>
            </div>
            <Favorites/>
            <div className="home">
              <h1 className="home">Most Recent Eats</h1>
            </div>
            <BlogPostItems/>
        </main>
      </div>
    );
  }
  
  export default Home;