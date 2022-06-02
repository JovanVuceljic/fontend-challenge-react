
import RecipeItem from './RecipeItem';

const RecipesList = ({ recipes = [], deleteRecipe }) => {

	return (
		<div className="recipes-list">
			{recipes.length !== 0 ? recipes.map((recipe, i) =>
				<RecipeItem
					key={i}
					recipe={recipe}
					deleteRecipe={deleteRecipe}
				/>) :
				<span>No data.</span>}
		</div>
	)
}

export default RecipesList;