import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'


const RecipeDetails = () => {
const { id } = useParams()
const recipeId = Number(id)
const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId))
const navigate = useNavigate()


if (!recipe) return <div style={{ padding: 12, background: '#fff', borderRadius: 8 }}>Recipe not found.</div>


return (
<div style={{ background: '#fff', padding: 16, borderRadius: 8 }}>
<h2>{recipe.title}</h2>
<p>{recipe.description}</p>
{recipe.ingredients && recipe.ingredients.length > 0 && <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>}
{recipe.prepTime && <p><strong>Prep Time:</strong> {recipe.prepTime} min</p>}


<div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
<EditRecipeForm recipe={recipe} />
<DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
</div>


<button onClick={() => navigate(-1)} style={{ marginTop: 12 }}>Back</button>
</div>
)
}


export default RecipeDetails