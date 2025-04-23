import React from "react";
import "../index.css";

interface CardProps {
  title: string;
  description: string;
  imgURL: string;
  isEditable: boolean;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  imgURL,
  isEditable,
}) => {
  return (
    <div className="card">
      <img src={imgURL} alt={title} className="card-image" />
      <h3 title={title} className="card-title">
        {title}
      </h3>
      <p title={description} className="card-description">
        {description}
      </p>
      <div className="card-buttons">
        <button className="button view">View</button>
        {isEditable && (
          <>
            <button className="button edit">Edit</button>
            <button className="button delete">Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
