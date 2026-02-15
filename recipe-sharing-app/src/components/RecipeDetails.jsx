import {useParams, useNavigate} from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";


const RecipeDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === parseInt(id))
    );

    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>

            <button onClick={() => navigate(`/edit/${recipe.id}`)}>
                Edit Recipe
            </button>

            <DeleteRecipeButton id={recipe.id} />

        </div>
    );
};

export default RecipeDetails