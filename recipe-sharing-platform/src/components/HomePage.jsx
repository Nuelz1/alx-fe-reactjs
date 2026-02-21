import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-64 object-cover rounded-lg mb-6 shadow-sm" 
            />
            <h2 className="text-3xl font-bold mb-4 text-blue-600">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {recipe.summary}
            </p>
            <a href={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline font-medium">
              View Recipe
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-start mb-8 p-5 bg-blue-50 rounded-lg shadow-lg mt-10">
        <h1 className="text-3xl font-bold">Your Own Recipe?</h1>
        <Link 
             to="/add-recipe" 
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
            + Add New Recipe
  </Link>
</div>
    </div>
  );
};

export default HomePage;
