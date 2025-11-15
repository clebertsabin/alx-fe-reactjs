import React from 'react'
import { useRecipeStore } from './recipeStore'


const DeleteRecipeButton = ({ recipeId, onDelete }) => {
const deleteRecipe = useRecipeStore(state => state.deleteRecipe)


const handle = () => {
if (!confirm('Delete this recipe?')) return
deleteRecipe(recipeId)
useRecipeStore.getState().filterRecipes()
if (onDelete) onDelete()
}


return <button onClick={handle} style={{ background: '#ff6b6b', color: '#fff' }}>Delete</button>
}


export default DeleteRecipeButton