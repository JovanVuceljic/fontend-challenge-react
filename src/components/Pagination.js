
const Pagination = ({ fetchRecipes, currentPage, totalPages }) => {

	const handlePageChange = (e) => {
		fetchRecipes(e.currentTarget.value)
	}

	const pages = Array.from(Array(totalPages), (e, i) => i + 1)

	return (
		<div className="pagination-wrap">
			<div className="pagination">
				{pages.map((num) => {
					return (<button
						key={num}
						value={num}
						className={`btn ${currentPage === num ? 'active' : ''}`}
						onClick={handlePageChange}>
						{num}
					</button>)
				}
				)}
			</div>
		</div>
	)
}

export default Pagination;
