const Header = ({ keyword, setKeyword }) => {

	return (<header>
		<h1>Recipes overview</h1>
		<input
			type="text"
			className="input-filter"
			placeholder="Filter"
			value={keyword}
			onChange={e => setKeyword(e.currentTarget.value)} />
	</header>)
}



export default Header;


