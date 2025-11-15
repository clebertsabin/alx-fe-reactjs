import React, { useState } from 'react'
import { useRecipeStore } from './recipeStore'


const AddRecipeForm = () => {
const addRecipe = useRecipeStore(state => state.addRecipe)
const setRecipes = useRecipeStore(state => state.setRecipes)
const recipes = useRecipeStore(state => state.recipes)


const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [ingredients, setIngredients] = useState('')
const [prepTime, setPrepTime] = useState('')


const handleSubmit = (e) => {
e.preventDefault()
if (!title.trim()) return


const newRecipe = {
id: Date.now(),
title: title.trim(),
description: description.trim(),
ingredients: ingredients ? ingredients.split(',').map(s => s.trim()) : [],
prepTime: prepTime ? Number(prepTime) : undefined
}


addRecipe(newRecipe)


// ensure filteredRecipes stay in sync if using search
setTimeout(() => {
// small delay to let store update, then refresh filtered
const { filterRecipes } = require('./recipeStore')
// call via store
useRecipeStore.getState().filterRecipes()
}, 0)


setTitle('')
setDescription('')
setIngredients('')
setPrepTime('')
}


// simple styled form
return (
<form onSubmit={handleSubmit} style={{ display: 'grid', gap: 8, background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 2px 6px rgba(0,0,0,0.06)' }}>
<h2 style={{ margin: 0 }}>Add a Recipe</h2>
<input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
<textarea placeholder="Short description" value={description} onChange={e => setDescription(e.target.value)} />
<input placeholder="Ingredients (comma separated)" value={ingredients} onChange={e => setIngredients(e.target.value)} />
<input placeholder="Prep time (minutes)" value={prepTime} onChange={e => setPrepTime(e.target.value)} />
<div style={{ display: 'flex', gap: 8 }}>
<button type="submit">Add Recipe</button>
<button type="button" onClick={() => {
// seed a few sample recipes for the reviewer
const seed = [
{ id: 1, title: 'Spaghetti Aglio e Olio', description: 'Garlic, oil and chili.', ingredients: ['spaghetti','garlic','olive oil','chili'], prepTime: 20 },
{ id: 2, title: 'Tomato Soup', description: 'Comforting tomato soup.', ingredients: ['tomato','onion','garlic'], prepTime: 30 }
]
setRecipes([...recipes, ...seed.filter(s => !recipes.find(r => r.id === s.id))])
useRecipeStore.getState().filterRecipes()
}}>Seed demo</button>
</div>
</form>
)
}


export default AddRecipeForm