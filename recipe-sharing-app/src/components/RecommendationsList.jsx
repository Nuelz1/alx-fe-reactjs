import { useEffect } from 'react';
import useRecipeStore from './recipeStore';

const RecommendationsList = () => {
  // 1. Grab the current recommendations and the function to make new ones
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // 2. Trigger the recommendation logic when the component loads
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]); 

  return (
    <div style={{ padding: '20px', backgroundColor: '#1599d6', borderRadius: '10px', marginTop: '20px' }}>
      <h3>✨ Recommended for You</h3>
      {recommendations.length === 0 ? (
        <p>Add some favorites to get better recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;