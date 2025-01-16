import React from "react";

export const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about, skills } = user;
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
          <button className="btn text-lg btn-primary">Ignore!!👎</button>
          <button className="btn text-lg btn-primary">Like !! 🩷</button>
        </div>
      </div>
    </div>
  );
};
