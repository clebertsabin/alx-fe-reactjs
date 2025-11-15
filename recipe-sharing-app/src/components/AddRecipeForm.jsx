import React, { useState } from 'react';
import { useRecipeStore } from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [prepTime, setPrepTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      id: Date.now(),
      title,
      description,
      ingredients: ingredients ? ingredients.split(',').map(i => i.trim()) : [],
      prepTime: prepTime ? parseInt(prepTime) : null,
    });
    setTitle('');
    setDescription('');
    setIngredients('');
    setPrepTime('');
  };

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex', flexDirection: 'column', gap: '10px',
      marginBottom: '20px', padding: '15px', borderRadius: '8px', backgroundColor: '#f0f0f0'
    }}>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required />
      <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={e => setIngredients(e.target.value)} />
      <input type="number" placeholder="Prep Time (minutes)" value={prepTime} onChange={e => setPrepTime(e.target.value)} min="0" />
      <button type="submit" style={{ padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}>Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
