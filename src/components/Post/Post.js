import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = props.post;
  const url = `/${idMeal}`;
  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <p>{strInstructions.slice(0, 100)}</p>
      <Link to={url}>
        <button>View Full Post</button>
      </Link>
    </div>
  );
};

export default Post;
