import React from "react";
import styles from "./index.module.css";
import { Edit, EyeSolid, Trash } from "@mynaui/icons-react";

interface CardProps {
  title: string;
  description: string;
  imgURL: string;
  isEditable: boolean;
  isDeletable: boolean;
  onEditClick?: () => void;
  onViewClick?: () => void;
  onDeleteClick?: () => void;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  imgURL,
  isEditable,
  isDeletable,
  onEditClick,
  onViewClick,
  onDeleteClick
}) => {
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
      <div className={styles.cardAction} onClick={() => {}}>
        <div className={styles.cardEditViewAction}>
            {isEditable && (
            <button className={styles.cardEditButton} onClick={onEditClick}>
                <div className={styles.cardEditText}>Edit</div>
                <div className={styles.cardEditIcon}><Edit size={14}/></div>
            </button>
            )}
            <button className={styles.cardViewButton} onClick={onViewClick}>
                <div className={styles.cardEditText}>View</div>
                <div className={styles.cardEditIcon}><EyeSolid size={14}/></div>
            </button>
        </div>
        <div className={styles.cardDeleteAction}>
            {isDeletable && (
            <button className={styles.cardDeleteButton} onClick={onDeleteClick}>
              <div className={styles.cardDeleteText}>Delete</div>
              <div className={styles.cardDeleteIcon}><Trash size={14}/></div>
            </button>
            )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardComponent;
