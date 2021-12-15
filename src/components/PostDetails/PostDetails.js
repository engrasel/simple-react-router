import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import "./PostDetails.css";

const PostDetails = () => {
  const { postId } = useParams();
  const [details, setDetails] = useState([]);

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${postId}`;
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data.meals));
  }, []);

  return (
    <div className="post_details_container">
      <h2>Post Details ID: {postId}</h2>
      {details.map(detail => {
        const { idMeal, strMealThumb, strMeal, strInstructions } = detail;
        return (
          <div key={idMeal} className="post_details">
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strInstructions}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostDetails;
