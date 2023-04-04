import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_API_KEY;

const RecipeDetail = () => {
  let params = useParams();
  const [fullDetails, setFullDetails] = useState(null);

  useEffect(() => {
    console.log(fullDetails);
  }, [fullDetails]);

  useEffect(() => {
    const getRecipeDetail = async () => {
      const details = await fetch(
        `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=` +
          API_KEY
      );
      const detailsJson = await details.json();
      setFullDetails(detailsJson);
    };
    getRecipeDetail().catch(console.error);
  }, []);
  return (
    <div className="recipe_details">
      <div className="details card">
        {fullDetails != null ? (
          <div>
            <h2>{fullDetails.title}</h2>
            <img
              className="recipe_detail_img"
              src={fullDetails.image}
              alt={`Image of ${fullDetails.title}`}
            />
            <h3>Ingredients</h3>
            <ul className="recipe_detail_ingredients">
              {fullDetails.extendedIngredients.map((item) => (
                <li key={item.original}>{item.original}</li>
              ))}
            </ul>
            <h3>Directions</h3>
            {fullDetails.instructions != "" ? (
              <p>{fullDetails.instructions}</p>
            ) : (
              <div>
                <p>No instructions are available</p>
              </div>
            )}
            <h3>Source</h3>
            <p>{fullDetails.sourceUrl}</p>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
