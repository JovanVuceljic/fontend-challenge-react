import { useEffect, useState } from 'react';
import './App.css';
import RecipesList from './components/RecipesList';
import Pagination from './components/Pagination';
import Header from './components/Header';

const App = () => {

  const apiUrl = "http://localhost:8081/recipes"

  const fetchRecipes = (page = 1, search) => {
    fetch(`${apiUrl}?page=${page}${search ? '&search=' + search : ''}`)
      .then((result) => {
        return result.json()
      })
      .then(({ currentPage, recipes, totalPages }) => {
        setTotal(totalPages)
        setPage(currentPage)
        setRecipesResponse(recipes)
      })
  }

  const deleteRecipe = (id) => {
    fetch(`${apiUrl}/${id}`, { method: 'DELETE', id })
      .then(response => response.json())
      .then(() => fetchRecipes(page))
  }

  const [recipesResponse, setRecipesResponse] = useState();
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    fetchRecipes()
    console.log('fetchRecipes');
  }, []);

  useEffect(() => {
    fetchRecipes(1, keyword)
    console.log('fetchByKeyword');
  }, [keyword]);

  return (
    <div className="App">
      <div className="frontend-challenge-container">
        <Header keyword={keyword} setKeyword={setKeyword} />
        <RecipesList recipes={recipesResponse} deleteRecipe={deleteRecipe} />
        <Pagination currentPage={page} totalPages={total} fetchRecipes={fetchRecipes} />
      </div>
    </div>
  );
}

export default App;
