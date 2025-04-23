import React, { useEffect, useState } from "react";
import CardComponent from "../../component/CardComponent";
import styles from "./index.module.css";
import { api } from "../../configs/axios.config";
import { API_ENDPOINTS } from "../../constants/api.constants";
import { ExploreBlogsResponse } from "../../types/api.type";

interface CardData {
  id: number;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
  updated_at: string;
}

const Favourites = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      const authData = localStorage.getItem("auth");

      if (!authData) {
        console.warn("No auth data found in localStorage");
        return;
      }

      const parsedAuth = JSON.parse(authData);
      const token = parsedAuth?.authToken;

      if (!token) {
        console.warn("No authToken in stored auth data");
        return;
      }

      try {
        const response = await api.get<ExploreBlogsResponse>(
          API_ENDPOINTS.EXPLORE_BLOGS, // Reuse the same endpoint
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              favourites: true, // This time fetch user's blogs
            },
          }
        );

        if (response.data?.responseData) {
          setCards(response.data.responseData);
        } else {
          console.error(response.data?.responseMessage || "Unknown error");
        }
      } catch (error) {
        console.error("Error fetching my blogs:", error);
      }
    };

    fetchMyBlogs();
  }, []);

  return (
    <div className={styles.explorePageContainer}>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <CardComponent
            key={card.id}
            title={card.title}
            description={card.description}
            imgURL={card.image_url}
            isEditable={true} // user-created blogs are editable
          />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
