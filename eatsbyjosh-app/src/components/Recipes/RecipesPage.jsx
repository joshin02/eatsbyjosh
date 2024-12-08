import "./RecipesAndReviewsStyle.css"
import RecipesList from './Recipes'

function Recipes() {
    return (
        <div>
            <main>
                <div class="pageDescription">
                    <h1>Recipes</h1>
                    <p>From quick eats to “fine dining” dishes, here’s the full list of recipes! I’ll keep adding to this page as I refine foods I’ve been experimenting with so stay tuned :)</p>
                </div>
                <RecipesList/>
            </main>
        </div>
    );
  }
  
  export default Recipes;