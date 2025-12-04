import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) return alert("Fill all fields");
    console.log({ title, ingredients, steps });
    setTitle(""); setIngredients(""); setSteps("");
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded shadow" onSubmit={handleSubmit}>
      <input type="text" placeholder="Recipe Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full mb-4 p-2 border rounded" />
      <textarea placeholder="Ingredients (comma separated)" value={ingredients} onChange={e => setIngredients(e.target.value)} className="w-full mb-4 p-2 border rounded" />
      <textarea placeholder="Preparation Steps (comma separated)" value={steps} onChange={e => setSteps(e.target.value)} className="w-full mb-4 p-2 border rounded" />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Recipe</button>
    </form>
  );
}
