import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (!recipes.length) return <p style={{ textAlign: 'center' }}>No recipes found.</p>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{
          border: '1px solid #ddd', borderRadius: '8px', padding: '15px',
          backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
        }}>
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#333' }}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          {recipe.ingredients.length > 0 && <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>}
          {recipe.prepTime && <p><strong>Prep Time:</strong> {recipe.prepTime} min</p>}
          <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            <EditRecipeForm recipe={recipe} />
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
