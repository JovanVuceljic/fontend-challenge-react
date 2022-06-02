
const Header = ({ fetchRecipes }) => {

	const handleSearch = e => {
		fetchRecipes(1, e.currentTarget.value)
	}

	return (<header>
		<h1>Recipes overview</h1>
		<input type="text" className="input-filter" placeholder="Filter.." onChange={handleSearch} />
	</header>)
}



export default Header;


