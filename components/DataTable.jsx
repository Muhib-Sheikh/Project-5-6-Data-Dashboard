const DataTable = ({ recipeList, searchInput, checked }) => {
  return (
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
        </thead>
        <tbody>
          {Object.entries(recipeList.recipes)
            .filter((val) => {
              if (searchInput == "" && checked == false) {
                return val;
              } else if (
                (checked == false &&
                  Object.values(val[1].title)
                    .join("")
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())) ||
                (checked == true && val[1].healthScore >= 10)
              ) {
                return val;
              }
            })
            .map(([index]) => (
              <tr key={index}>
                <td className="cell">{recipeList.recipes[index].title}</td>
                <td className="cell">
                  {recipeList.recipes[index].readyInMinutes + " minutes"}
                </td>
                <td className="cell">
                  {recipeList.recipes[index].healthScore}
                </td>
                <td className="cell">{recipeList.recipes[index].sourceUrl}</td>
                <td className="cell">
                  <img
                    src={recipeList.recipes[index].image}
                    alt={`Image of a ${recipeList.recipes[index].title}`}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
