import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],      // New: Stores IDs of favorite recipes
  recommendations: [], // New: Stores recommended recipes

  // --- ACTIONS ---

  addRecipe: (newRecipe) => {
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    }));
    get().filterRecipes(); // Update search results
  },

  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      // Also remove from favorites if it's deleted!
      favorites: state.favorites.filter(favId => favId !== id), 
    }));
    get().filterRecipes();
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    }));
    get().filterRecipes();
  },

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // --- SEARCH & FILTERING ---

  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // --- FAVORITES ACTIONS ---

  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId)
  })),

  // --- RECOMMENDATION LOGIC ---
  
  generateRecommendations: () => set((state) => {
    // Mock Logic: Find recipes that are NOT in favorites and pick 3 random ones
    const recommended = state.recipes.filter(
      (recipe) => !state.favorites.includes(recipe.id) && Math.random() > 0.5
    ).slice(0, 3);

    return { recommendations: recommended };
  }),

}));

export default useRecipeStore;