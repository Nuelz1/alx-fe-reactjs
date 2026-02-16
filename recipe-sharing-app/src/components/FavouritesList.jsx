import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  // 1. Grab the IDs of favorites and the full list of recipes
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  // 2. Filter the main list to only include recipes whose IDs are in the favorites array
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div style={{ padding: '20px', backgroundColor: '#b97d1b', borderRadius: '10px', marginTop: '20px' }}>
      <h3>❤️ My Favorites</h3>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't added any favorites yet!</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #1e14a8', padding: '10px 0' }}>
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;