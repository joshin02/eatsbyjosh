import { Link, useNavigate } from 'react-router-dom';
import './NavbarStyle.css'
import RecipePosts from "./RecipePosts"

function NavBar() {
  const navigate = useNavigate();

  const getRandomRecipeLink = () => {
    const recipePosts = RecipePosts;

    // Get all the recipe IDs (keys)
    const recipeIds = Object.keys(recipePosts);

    // Get a random index from the recipeIds array
    const randomIndex = Math.floor(Math.random() * recipeIds.length);

    // Get the random recipe ID
    const randomRecipeId = recipeIds[randomIndex];

    return `/Recipes/${randomRecipeId}`;  // Return the URL path to a random recipe
  };

  return (
    <nav className="navbar">
        <Link to="/"><img className="logo" src="/img/logo.png" alt="eats by josh logo"/></Link>
        <div className="navdiv">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Recipes">Recipes</Link>
          <Link to="/Reviews">Reviews</Link>
        </div>
        <Link to={getRandomRecipeLink()} className="chefchoice">chef's choice!</Link>
    </nav>
  );
}

export default NavBar;