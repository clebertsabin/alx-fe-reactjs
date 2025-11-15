import { create } from 'zustand'


export const useRecipeStore = create((set, get) => ({
recipes: [],
filteredRecipes: [],
searchTerm: '',
favorites: [],
recommendations: [],


// basic CRUD
setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),


addRecipe: (newRecipe) =>
set((state) => ({ recipes: [...state.recipes, newRecipe] }), false, 'addRecipe'),


updateRecipe: (updated) =>
set((state) => ({ recipes: state.recipes.map(r => r.id === updated.id ? updated : r) }), false, 'updateRecipe'),


deleteRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter(r => r.id !== id) }), false, 'deleteRecipe'),


// search & filtering
setSearchTerm: (term) => {
set({ searchTerm: term })
get().filterRecipes()
},


filterRecipes: () => {
const { recipes, searchTerm } = get()
if (!searchTerm) {
set({ filteredRecipes: recipes })
return
}
const s = searchTerm.toLowerCase()
const filtered = recipes.filter(r => {
const titleMatch = r.title?.toLowerCase().includes(s)
const descMatch = r.description?.toLowerCase().includes(s)
const ingrMatch = (r.ingredients || []).join(' ').toLowerCase().includes(s)
return titleMatch || descMatch || ingrMatch
})
set({ filteredRecipes: filtered })
},


// favorites & recommendations
addFavorite: (id) => set((state) => ({ favorites: Array.from(new Set([...state.favorites, id])) })),
removeFavorite: (id) => set((state) => ({ favorites: state.favorites.filter(f => f !== id) })),
generateRecommendations: () => {
const state = get()
// naive recommendation: return recipes not already favorited, and some of favorites
const recommended = state.recipes
.filter(r => !state.favorites.includes(r.id))
.slice(0, 4)
set({ recommendations: recommended })
}
}))


export default useRecipeStore