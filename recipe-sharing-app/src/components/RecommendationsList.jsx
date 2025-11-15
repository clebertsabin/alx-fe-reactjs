import React from 'react';
import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  if (!recommendations.length) return null;

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Recommended Recipes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {recommendations.map(recipe => (
          <div key={recipe.id} style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h4>{recipe.title}</h4>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;
