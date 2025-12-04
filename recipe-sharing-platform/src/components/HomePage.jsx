import { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map(recipe => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
            <img src={recipe.image} alt={recipe.title} className="rounded w-full h-40 object-cover" />
            <h2 className="font-bold text-lg mt-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        </Link>
      ))}
      <Link to="/add-recipe" className="text-center mt-4 text-blue-500 font-bold">
        + Add New Recipe
      </Link>
    </div>
  );
}
