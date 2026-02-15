import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],

  addRecipe: (newRecipe) => {
    if (!newRecipe || !newRecipe.title) {
      console.error("Invalid recipe");
      return;
    }

    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
  },

  setRecipes: (recipes) => {
    if (!Array.isArray(recipes)) {
      console.error("Recipes must be an array");
      return;
    }

    set({ recipes });
  },
}));

export default useRecipeStore;
