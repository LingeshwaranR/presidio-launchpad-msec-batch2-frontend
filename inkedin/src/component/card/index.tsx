import React, { useState } from "react";
import styles from "./index.module.css";
import { Edit, EyeSolid, Heart } from "@mynaui/icons-react";

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
  isEditable
}) => {
    const [fill, setFill] = useState<boolean>(false)
    const handleFavoriteClick = () => {
        console.log("Favorite clicked");
        setFill(!fill)
    };
    const handleEditClick = () => {
        console.log("Edit clicked");
    };
    const handleViewClick = () => {
        console.log("View clicked");
    };
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImage}>
        <img src={imgURL} alt="cardImage" />
      </div>
      <div className={styles.cardBody}>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
            <h3>{title}</h3>
        </div>
        <div className={styles.cardDescription}>
            <p>{description}</p>
        </div>
      </div>
      <div className={styles.cardAction}>
        <div className={styles.cardEditViewAction}>
            {isEditable && (
            <button className={styles.cardEditButton} onClick={handleEditClick}>
                <div className={styles.cardEditText}>Edit</div>
                <div className={styles.cardEditIcon}><Edit size={12}/></div>
            </button>
            )}
            <button className={styles.cardViewButton} onClick={handleViewClick}>
                <div className={styles.cardEditText}>View</div>
                <div className={styles.cardEditIcon}><EyeSolid size={12}/></div>
            </button>
        </div>
        <div className={styles.cardFavIcon}>
            <Heart size={32} color="red" onClick={handleFavoriteClick} fill={`${fill ? "red" : "white"}`}/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardComponent;
