
import RecipeItem from './RecipeItem';

const RecipesList = ({ recipes = [], deleteRecipe }) => {

	return (
		<div className="recipes-list">
			{recipes.map((recipe, i) =>
				<RecipeItem
					key={i}
					recipe={recipe}
					deleteRecipe={deleteRecipe}
				/>)}
		</div>
	)
}

export default RecipesList;