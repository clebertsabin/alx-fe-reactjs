import React from 'react'
import { useRecipeStore } from './recipeStore'


const FavoritesList = () => {
const recipes = useRecipeStore(state => state.recipes)
const favorites = useRecipeStore(state => state.favorites)
const addFavorite = useRecipeStore(state => state.addFavorite)
const removeFavorite = useRecipeStore(state => state.removeFavorite)


// safe derived data outside selector
const favoriteRecipes = recipes.filter(r => favorites.includes(r.id))


if (favoriteRecipes.length === 0) return <div style={{ background: '#fff', padding: 12, borderRadius: 8 }}>No favorites yet.</div>


return (
<div style={{ background: '#fff', padding: 12, borderRadius: 8 }}>
<h3>My Favorites</h3>
{favoriteRecipes.map(r => (
<div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
<div>
<strong>{r.title}</strong>
<div style={{ fontSize: 13 }}>{r.description}</div>
</div>
<div>
<button onClick={() => removeFavorite(r.id)}>Remove</button>
</div>
</div>
))}
</div>
)
}


export default FavoritesList