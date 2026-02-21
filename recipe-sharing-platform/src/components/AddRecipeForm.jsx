import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState(null);

  const validateForm = () => {
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      return "All fields are required.";
    }

    const ingredientsArray = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (ingredientsArray.length < 2) {
      return "Please include at least two ingredients (separated by commas).";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = validateForm();

    if (validationError) {
      setErrors(validationError);
      return;
    }

    // Clear errors
    setErrors(null);

    console.log({title, ingredients, steps});

    const newRecipe = {
      title: title.trim(),
      ingredients: ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      steps: steps.trim(),
    };

    console.log(newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto p-4 max-w-lg my-10 sm:p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Add New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;