import { useParams } from 'react-router-dom';
import RecipePosts from './RecipePosts';
import "./RecipePostPageStyle.css"
  
  function RecipePostPage() {
    const { id } = useParams();
    const recipePost = RecipePosts[id]; 
  
    if (!recipePost) {
      return <div>Recipe post not found!</div>;
    }
  
    return (
      <div className="recipe-post-page">
        <h1>{recipePost.dish}</h1>
        <section className="recipe-intro-container">
            <img src={recipePost.image1} />
            <div className="ingredients-container">
                <h2>Ingredients:</h2>
                <ul>
                    {recipePost.ingredient1 && (
                        <li>{recipePost.ingredient1}</li>
                    )}
                    {recipePost.ingredient2 && (
                        <li>{recipePost.ingredient2}</li>
                    )}
                    {recipePost.ingredient3 && (
                        <li>{recipePost.ingredient3}</li>
                    )}
                    {recipePost.ingredient4 && (
                        <li>{recipePost.ingredient4}</li>
                    )}
                    {recipePost.ingredient5 && (
                        <li>{recipePost.ingredient5}</li>
                    )}
                    {recipePost.ingredient6 && (
                        <li>{recipePost.ingredient6}</li>
                    )}
                    {recipePost.ingredient7 && (
                        <li>{recipePost.ingredient7}</li>
                    )}
                    {recipePost.ingredient8 && (
                        <li>{recipePost.ingredient8}</li>
                    )}
                    {recipePost.ingredient9 && (
                        <li>{recipePost.ingredient9}</li>
                    )}
                    {recipePost.ingredient10 && (
                        <li>{recipePost.ingredient10}</li>
                    )}
                    {recipePost.ingredient11 && (
                        <li>{recipePost.ingredient11}</li>
                    )}
                    {recipePost.ingredient12 && (
                        <li>{recipePost.ingredient12}</li>
                    )}                    
                </ul>
            </div>
        </section>
        <section className="instructions-container">
            <ol>
                {recipePost.instruction1 && (
                    <li>{recipePost.instruction1}</li>
                )} 
                {recipePost.instruction2 && (
                    <li>{recipePost.instruction2}</li>
                )}          
                {recipePost.instruction3 && (
                    <li>{recipePost.instruction3}</li>
                )}          
                {recipePost.instruction4 && (
                    <li>{recipePost.instruction4}</li>
                )}          
                {recipePost.instruction5 && (
                    <li>{recipePost.instruction5}</li>
                )}          
                {recipePost.instruction6 && (
                    <li>{recipePost.instruction6}</li>
                )}          
                {recipePost.instruction7 && (
                    <li>{recipePost.instruction7}</li>
                )}                                    
            </ol>
        </section>
        <section className="cook-highlights">
            <img src={recipePost.pic2} />
            <img src={recipePost.pic3} />
            <img src={recipePost.pic4} />
        </section>
      </div>
    );
  }
  
  export default RecipePostPage;