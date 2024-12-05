import "./RecipeCardStyle.css"

function RecipeCard({ title, cuisine, time, image, link }) {
    return (
      <div className="recipe-card">
        <a href={link}>
            <img src={image} alt={title} />
            <p className="cuisine">{cuisine}</p>
            <h2>{title}</h2>
            <p className="time">{time}</p>
        </a>
      </div>
    );
  }
  
  export default RecipeCard;