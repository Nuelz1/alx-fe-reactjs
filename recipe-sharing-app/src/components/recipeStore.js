import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

  addRecipe: (newRecipe) => {
    if (!newRecipe || !newRecipe.title.trim()) {
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
        recipe.id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe }
          : recipe
      )
    })); 
  },

  setRecipes: (recipes) => {
    if (!Array.isArray(recipes)) {
      console.error("Recipes must be an array");
      return;
    }

    set({ recipes });
  },

  searchTerm: "",
  setSearchTerm: (term) => {set({ searchTerm: term });
  filtere
  },

}));

export default useRecipeStore;
