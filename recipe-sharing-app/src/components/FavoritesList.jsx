import { useRecipeStore } from "../recipeStore";

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  // THIS IS SAFE (computed outside the selector)
  const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

  return (
    <div>
      <h2>My Favorites</h2>

      {favoriteRecipes.length === 0 && <p>No favorites yet.</p>}

      {favoriteRecipes.map(r => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
