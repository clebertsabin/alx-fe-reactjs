import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import FavoritesList from './FavoritesList'
import RecommendationsList from './RecommendationsList'
import { useRecipeStore } from './recipeStore'


const Home = () => {
const recipes = useRecipeStore(state => state.recipes)
const filterRecipes = useRecipeStore(state => state.filterRecipes)
const generateRecommendations = useRecipeStore(state => state.generateRecommendations)


// keep filteredRecipes in sync
useEffect(() => {
filterRecipes()
}, [recipes])


useEffect(() => {
generateRecommendations()
}, [recipes])


return (
<div style={{ display: 'grid', gap: 16 }}>
<SearchBar />
<div style={{ display: 'grid', gap: 12 }}>
<FavoritesList />
<RecommendationsList />
</div>
</div>
)
}


export default Home

