import  ReactStars from "react-rating-stars-component";
import React from "react";
import profilePng from "../../images/Profile.png";

// "63dcc91e6a9ce83959dee0a7" use this as id as it contains all the data

const ReviewCard = ({ reviews }) => {
  const options = {
    value: reviews.rating,
    edit:false,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{reviews.name}</p>
      <ReactStars {...options} />
      <span className="reviewCardComment">{reviews.comment}</span>
    </div>
  );
};

export default ReviewCard;
