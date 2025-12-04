import { useParams } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = data.find(r => r.id === parseInt(id));

  if (!recipe) return <div className="p-4">Recipe not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mt-4" />
      <h2 className="text-xl mt-4 font-semibold">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
      <h2 className="text-xl mt-4 font-semibold">Steps</h2>
      <ol className="list-decimal list-inside">
        {recipe.steps.map((step, idx) => <li key={idx}>{step}</li>)}
      </ol>
    </div>
  );
}
