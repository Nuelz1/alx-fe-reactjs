import { useParams, useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Convert the URL ID to a number to match our data type
  const recipeId = parseInt(id);

  // 1. Get the recipe data
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  // 2. Get the favorites list and the toggle actions from the store
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  // 3. Determine if this recipe is already favorited
  // .includes() returns true if the ID is in the favorites array
  const isFavorite = favorites.includes(recipeId);

  // 4. Create a function to handle the click
  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {/* EDIT BUTTON */}
        <button onClick={() => navigate(`/edit/${recipe.id}`)}>
          Edit Recipe
        </button>

        {/* DELETE BUTTON */}
        <DeleteRecipeButton id={recipe.id} />

        {/* NEW: FAVORITE TOGGLE BUTTON */}
        <button 
          onClick={handleToggleFavorite}
          style={{ 
            backgroundColor: isFavorite ? '#ff4757' : '#f1f2f6',
            color: isFavorite ? 'white' : 'black',
            cursor: 'pointer'
          }}
        >
          {isFavorite ? "❤️ Unfavorite" : "🤍 Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;