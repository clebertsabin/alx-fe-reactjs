// Zustand store for recipes, search, favorites, recommendations
import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: '',
  favorites: [],
  recommendations: [],

  // Recipe CRUD
  addRecipe: (recipe) => {
    set((state) => ({
      recipes: [...state.recipes, recipe],
    }));
    get().filterRecipes();
  },
  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      ),
    }));
    get().filterRecipes();
  },
  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
      favorites: state.favorites.filter((fid) => fid !== id),
    }));
    get().filterRecipes();
  },

  // Search & filter
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((r) =>
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Favorites & recommendations
  addFavorite: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((fid) => fid !== id) })),
  generateRecommendations: () => {
    const state = get();
    const recommended = state.recipes.filter(
      (r) => state.favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
