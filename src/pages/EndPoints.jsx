import React from "react";


function EndPoints() {
  const tableData = [
    // Existing methods
    {
      method: "GET",
      url: "/recipes",
      requestBody: "N/A",
      response: "List of recipes",
      error: "404 if no recipes found",
    },
    {
      method: "GET",
      url: "/recipes/:id",
      requestBody: "N/A",
      response: "Single recipe object",
      error: "404 if recipe not found",
    },
    {
      method: "GET",
      url: "/recipes/name/{name}",
      requestBody: "N/A",
      response: "Recipe details with the given name",
      error: "404 if recipe not found",
    },
    {
      method: "GET",
      url: "/recipes/servings/{servings}",
      requestBody: "N/A",
      response: "List of recipes with the specified servings",
      error: "404 if no recipes are found",
    },
    {
      method: "POST",
      url: "/recipes",
      requestBody: "recipeName string, servings, instructions, recipeIngredients{Recipe, Ingredient, amount}",
      response: "Created recipe",
      error: "400 if validation fails",
    },
    {
      method: "PUT",
      url: "/recipes/:id",
      requestBody: "recipeName string, servings, instructions, recipeIngredients{Recipe, Ingredient, amount}",
      response: "Updated recipe",
      error: "404 if recipe not found",
    },
    {
      method: "DELETE",
      url: "/recipes/:id",
      requestBody: "N/A",
      response: "Success message",
      error: "404 if recipe not found",
    },
    
    {
      method: "GET",
      url: "/ingredients/",
      requestBody: "N/A",
      response: "List of ingredients",
      error: "404 if no ingredients are found",
    },
    {
      method: "GET",
      url: "/ingredients/{id}",
      requestBody: "N/A",
      response: "ingredient with the given ID",
      error: "404 if ingredient not found",
    },
    {
      method: "GET",
      url: "/ingredients/findrecipefromingredient/{ingredientName}",
      requestBody: "N/A",
      response: "List of recipes containing the ingredient",
      error: "404 if no matching recipes are found",
    },
   
    {
      method: "POST",
      url: "/ingredients",
      requestBody: "ingredientName",
      response: "Created ingredient",
      error: "400 if validation fails",
    },
  
    {
      method: "PUT",
      url: "/ingredients/{id}",
      requestBody: "ingredientName",
      response: "Updated ingredient",
      error: "404 if ingredient not found",
    },
    {
      method: "DELETE",
      url: "/ingredients/{id}",
      requestBody: "N/A",
      response: "Success message",
      error: "404 if ingredient not found",
    },
  ];
  
  
  return (
    <>
      <h1>Endpoints Table</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Method</th>
            <th>URL</th>
            <th>Request Body</th>
            <th>Response</th>
            <th>Error</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.method}</td>
              <td>{row.url}</td>
              <td>{row.requestBody}</td>
              <td>{row.response}</td>
              <td>{row.error}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EndPoints;
