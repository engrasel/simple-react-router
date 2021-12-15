import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import Post from "../Post/Post";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then(res => res.json())
      .then(data => setPosts(data.meals));
  }, []);

  return (
    <div className="home">
      <h2>Totall Posts Found: {posts.length}</h2>
      <div className="post_container">
        {posts.map(post => (
          <Post key={post.idMeal} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Home;
