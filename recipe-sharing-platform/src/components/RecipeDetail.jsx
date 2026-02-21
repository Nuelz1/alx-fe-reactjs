import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json'; // Adjust the path as needed
import {Link} from 'react-router-dom';

const RecipeDetail = () => {

    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const foundRecipe = recipeData.find(r => r.id === parseInt(id));
        setRecipe(foundRecipe);
    }, [id]);

    if (!recipe) {
        return <div className="container mx-auto p-4">Recipe not found.</div>;
    }

    return (
  <div className="container mx-auto p-4 max-w-4xl">
    <div className="bg-blue-50 rounded-lg shadow-lg p-6 md:p-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6 shadow-md" />
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-3 border-b-2 border-blue-500 inline-block">Ingredients</h2>
        <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700">
           {/* Map through ingredients here if your JSON has them */}
           {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
             <li key={index}>{ingredient}</li>
           ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 border-b-2 border-blue-500 inline-block">Instructions</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          {recipe.instructions || "Cooking instructions go here..."}
        </p>
      </div>

     <Link to="/" className="inline-block mt-6 text-blue-500 hover:underline font-medium">
        &larr; Back to Home
     </Link>

    </div>
  </div>
);
};

export default RecipeDetail;