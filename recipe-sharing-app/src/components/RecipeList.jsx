import useRecipeStore  from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes available. Please add some!</p>;
  }

  return (
    <div>
        {recipes.map(recipe => (
            <div key={recipe.id}>
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
            </div>
        ))}
    </div>

  );
};

export default RecipeList;