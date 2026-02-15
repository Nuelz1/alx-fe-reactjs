import AddRecipeForm from "./components/addRecipeForm";
import RecipeList from "./components/recipeList";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipe Manager</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
