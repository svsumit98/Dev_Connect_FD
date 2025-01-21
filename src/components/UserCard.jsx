import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

export const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName} </h2>
        {age && gender && <p>{age + ", " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center m-4">
          <button
            className="btn text-lg btn-primary"
            onClick={() => {
              handleSendRequest("ignored", _id);
            }}
          >
            Ignore!!👎
          </button>
          <button
            className="btn text-lg btn-primary"
            onClick={() => {
              handleSendRequest("interested", _id);
            }}
          >
            Like !! 🩷
          </button>
        </div>
      </div>
    </div>
  );
};
