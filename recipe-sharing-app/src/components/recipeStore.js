import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  filteredRecipes: [],
  searchTerm: "", // Added this missing property

  addRecipe: (newRecipe) => {
    if (!newRecipe || !newRecipe.title?.trim()) {
      console.error("Invalid recipe");
      return;
    }
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
  },

  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
  },

  updateRecipe: (updatedRecipe) => {
    if (!updatedRecipe || !updatedRecipe.id) {
      console.error("Invalid recipe");
      return;
    }
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    }));
  },

  setRecipes: (recipes) => {
    if (!Array.isArray(recipes)) {
      console.error("Recipes must be an array");
      return;
    }
    set({ recipes, filteredRecipes: recipes }); // Usually good to sync these initially
  },

  setSearchTerm: (term) => {
    const { recipes } = get();
    const search = term.toLowerCase();

    const filtered = recipes.filter((recipe) => {
      const matchesTitle = recipe.title?.toLowerCase().includes(search);
      const matchesDescription = recipe.description?.toLowerCase().includes(search);
      const matchesIngredients = recipe.ingredients?.toString().toLowerCase().includes(search);

      return matchesTitle || matchesDescription || matchesIngredients;
    });

    // Update both searchTerm and filteredRecipes in one go
    set({ 
      searchTerm: term, 
      filteredRecipes: filtered 
    });
  },
}));

export default useRecipeStore;