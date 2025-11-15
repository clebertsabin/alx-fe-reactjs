import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = parseInt(id);
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));
  const navigate = useNavigate();

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {recipe.ingredients.length > 0 && <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>}
      {recipe.prepTime && <p><strong>Prep Time:</strong> {recipe.prepTime} min</p>}

      <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <button
        onClick={() => navigate('/')}
        style={{ marginTop: '20px', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}
      >
        Back to Recipes
      </button>
    </div>
  );
};

export default RecipeDetails;
