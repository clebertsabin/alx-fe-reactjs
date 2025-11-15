import React from 'react'
import { useRecipeStore } from './recipeStore'


const SearchBar = () => {
const setSearchTerm = useRecipeStore(state => state.setSearchTerm)


return (
<input
placeholder="Search recipes by title, ingredient or description..."
onChange={(e) => setSearchTerm(e.target.value)}
style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd', width: '100%' }}
/>
)
}


export default SearchBar