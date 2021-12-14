import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Friend.css";

const Friend = props => {
  const { id, name, email, address } = props.friend;
  const url = `/friend/${id}`;
  const navigate = useNavigate();

  const handleFriendClick = () => {
    navigate(`/friend/${id}`);
  };

  return (
    <div className="friend">
      <h2>{name}</h2>
      <strong> {email}</strong>
      <p> {address.street}</p>
      <Link to={url}>Link</Link>
      <br />
      <Link to={url}>
        <button>Link>button</button>
      </Link>
      <br />
      <button onClick={handleFriendClick}>button onClick</button>
    </div>
  );
};

export default Friend;
