
const RecipeItem = ({ recipe, deleteRecipe }) => {

	const handleDelete = e => deleteRecipe(e.currentTarget.value)

	const { id, title, description } = recipe

	return (
		<div className="recipe-item">
			<h2>{title}</h2>
			<p>{description}</p>
			<button
				className="btn btn-delete"
				onClick={handleDelete}
				value={id}>
				Delete
			</button>
		</div>
	)
}



export default RecipeItem;