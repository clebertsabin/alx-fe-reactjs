import React, { useState } from 'react'
import { useRecipeStore } from './recipeStore'


const EditRecipeForm = ({ recipe }) => {
const updateRecipe = useRecipeStore(state => state.updateRecipe)
const [open, setOpen] = useState(false)
const [title, setTitle] = useState(recipe.title)
const [description, setDescription] = useState(recipe.description || '')
const [ingredients, setIngredients] = useState((recipe.ingredients || []).join(', '))


const handleSave = () => {
const updated = {
...recipe,
title: title.trim(),
description: description.trim(),
ingredients: ingredients ? ingredients.split(',').map(s => s.trim()) : []
}
updateRecipe(updated)
setOpen(false)
useRecipeStore.getState().filterRecipes()
}


return (
<div>
{!open ? (
<button onClick={() => setOpen(true)}>Edit</button>
) : (
<div style={{ display: 'grid', gap: 8, background: '#fff', padding: 8, borderRadius: 8 }}>
<input value={title} onChange={e => setTitle(e.target.value)} />
<textarea value={description} onChange={e => setDescription(e.target.value)} />
<input value={ingredients} onChange={e => setIngredients(e.target.value)} placeholder="Comma separated" />
<div style={{ display: 'flex', gap: 8 }}>
<button onClick={handleSave}>Save</button>
<button onClick={() => setOpen(false)}>Cancel</button>
</div>
</div>
)}
</div>
)
}


export default EditRecipeForm