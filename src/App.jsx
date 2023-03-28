import { useState, useEffect } from "react";
import "./App.css";
import DataTable from "/Components/DataTable";
import Card from "/Components/Card";
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [recipesCount, setRecipesCount] = useState(0);
  const [setHealthyRecipesCount, setHealthyData] = useState(0);
  const [readyTime, setReadyTime] = useState(0);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [checked, setCheckedState] = useState(false);

  const [recipeList, setRecipeList] = useState(null);

  const getNumRecipes = () => {
    setRecipesCount(Object.keys(recipeList.recipes).length);
  };

  const getHealthyRecipes = () => {
    let numHealthy = 0;
    for (let i = 0; i < Object.keys(recipeList.recipes).length; i++) {
      if (recipeList.recipes[i].healthScore >= 10) {
        numHealthy++;
      }
    }
    setHealthyData(numHealthy);
  };

  const getAvgReadyTime = () => {
    let sumReadyTime = 0;
    let avgReadyTime = 0;
    for (let i = 0; i < Object.keys(recipeList.recipes).length; i++) {
      sumReadyTime += recipeList.recipes[i].readyInMinutes;
    }
    avgReadyTime = sumReadyTime / Object.keys(recipeList.recipes).length;

    setReadyTime(avgReadyTime);
  };

  useEffect(() => {
    if (recipeList) {
      getNumRecipes();
      getHealthyRecipes();
      getAvgReadyTime();
    }
  }, [recipeList]);

  useEffect(() => {
    const fetchAllRecipeData = async () => {
      const URL = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=25&tags=pescatarian`;
      const response = await fetch(URL);
      const json = await response.json();
      console.log(json.recipes);
      setRecipeList(json);
    };
    fetchAllRecipeData().catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>RandomRecipes</h1>
      <div className="statistics">
        <Card title="Recipes Count" data={recipesCount} />
        <Card title="Healthy Recipes Count" data={setHealthyRecipesCount} />
        <Card title="Average Cooking Time" data={readyTime} />
      </div>
      <div className="list card">
        <div className="search">
          <input
            type="text"
            placeholder="Search by recipe name.."
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <label className="check_container">
            Healthy Recipes
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => setCheckedState(!checked)}
            ></input>
          </label>
        </div>
        {recipeList ? (
          <DataTable
            recipeList={recipeList}
            searchInput={searchInput}
            checked={checked}
          />
        ) : (
          <div className="data_table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Cooking Time</th>
                  <th>Health Score</th>
                  <th>Source</th>
                  <th>Image</th>
                </tr>
                <tr></tr>
              </thead>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
