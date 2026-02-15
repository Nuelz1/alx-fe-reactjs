import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {

  const searchTerm = useRecipeStore((state) => state.searchTerm) || "";
  // We use || [] as a safety net. If filteredRecipes is undefined, 
  // it uses an empty list instead so .length doesn't crash.
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes) || [];
  const recipes = useRecipeStore((state) => state.recipes) || [];

  // Use filtered if there's a search, otherwise use the main list
  const displayList = searchTerm.trim() === "" ? recipes : filteredRecipes;

  if (displayList.length === 0) {
    return <p>No recipes available. Please add some!</p>;
  }

  return (
    <div>
      {displayList.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;