import { useState, useEffect } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Recipe Sharing Platform</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded w-full h-48 object-cover mb-2"
              />
              <h2 className="font-bold text-lg">{recipe.title}</h2>
              <p className="text-gray-600 mt-1">{recipe.summary}</p>
            </div>
          </Link>
        ))}

        {/* Add New Recipe Card */}
        <Link to="/add-recipe">
          <div className="flex items-center justify-center bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition h-48">
            <span className="text-xl font-bold">+ Add New Recipe</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
