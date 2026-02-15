import AddRecipeForm from "./Components/AddRecipeForm";
import RecipeList from "./Components/RecipeList";

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
