import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./FriendDetails.css";

const FriendDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  const navigate = useNavigate();
  const seeAllFriend = () => {
    navigate("/friends");
  };
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setFriend(data));
  }, [friendId]);
  return (
    <div>
      <h2>This is Friend Details: {friendId}</h2>
      <div className="details">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{friend.name}</td>
              <td>{friend.username}</td>
              <td>{friend.email}</td>
              <td>
                <tr>
                  <th>Street</th>
                  <th>suite</th>
                  <th>city</th>
                  <th>zipCode</th>
                  <th>geo</th>
                </tr>
                <tr>
                  <td>{friend.address?.street}</td>
                  <td>{friend.address?.suite}</td>
                  <td>{friend.address?.city}</td>
                  <td>{friend.address?.zipcode}</td>
                  <td>
                    <tr>
                      <th>lat</th>
                      <th>lan</th>
                    </tr>
                    <tr>
                      <td>{friend.address?.geo.lat}</td>
                      <td>{friend.address?.geo.lng}</td>
                    </tr>
                  </td>
                </tr>
              </td>
              <td>{friend.phone}</td>
              <td>{friend.website}</td>
              <td>
                <tr>
                  <th>name</th>
                  <th>catchPhrase</th>
                  <th>bs</th>
                </tr>
                <tr>
                  <td>{friend.company?.name}</td>
                  <td>{friend.company?.catchPhrase}</td>
                  <td>{friend.company?.bs}</td>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={seeAllFriend}>See All Friends</button>
    </div>
  );
};

export default FriendDetails;
