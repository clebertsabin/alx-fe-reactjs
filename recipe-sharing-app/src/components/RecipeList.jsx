import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'


const RecipeList = () => {
const recipes = useRecipeStore(state => state.filteredRecipes)


if (!recipes || recipes.length === 0) return <div style={{ padding: 12, background: '#fff', borderRadius: 8 }}><p>No recipes found.</p></div>


return (
<div style={{ display: 'grid', gap: 12 }}>
{recipes.map(recipe => (
<div key={recipe.id} style={{ background: '#fff', padding: 12, borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
<Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#111' }}>
<h3 style={{ margin: '0 0 8px' }}>{recipe.title}</h3>
</Link>
<p style={{ margin: '0 0 8px' }}>{recipe.description}</p>
{recipe.ingredients && recipe.ingredients.length > 0 && <p style={{ margin: 0 }}><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>}
</div>
))}
</div>
)
}


export default RecipeList