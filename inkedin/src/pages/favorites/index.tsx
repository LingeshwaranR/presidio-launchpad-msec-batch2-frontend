// src/pages/Home.tsx
import { useEffect, useState } from "react";
import CardComponent from "../../component/card/index";
import styles from "./index.module.css";
import { IBlog, IBlogResponse } from "../../types/app.type";
import { api } from "../../configs/axios.config";
import { API_ENDPOINTS } from "../../constants/api.constants";
import { useAuth } from "../../context/auth/auth.context";
import { Plus } from "@mynaui/icons-react";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/route.constant";

const MyFavouritesScreen = () => {
  const { authState } = useAuth()
  const navigate  = useNavigate()
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const getMyFavoriteBlogs = async () => {
    const blogs = await api.get<IBlogResponse>(API_ENDPOINTS.GET_MY_FAVORITES, {
      headers: { Authorization: `Bearer ${authState.authToken}` }
    })
    setBlogs(blogs.data.responseData)
  }

  const handleDeleteClick = (blogId: number) => {
    console.log("hello")
    api.delete(
      API_ENDPOINTS.PUBLISH_BLOG + `/${blogId}`, {
        headers: { Authorization: `Bearer ${authState.authToken}` }
      }
    ).then(() => {
      getMyFavoriteBlogs()
    })
  }

  useEffect(() => {
    getMyFavoriteBlogs()
  }, [])

  return (
    <div className={styles.homeScreenWrapper}>
      <div className={styles.createBlogButtonContainer}>
        <button className={styles.createBlogButton} onClick={() => navigate(APP_ROUTES.BLOG)}>
          <div>New Blog</div>
          <Plus size={24}/>
        </button>
      </div>
      <div className={styles.container}>
      {blogs.map((blog) => {
        return (
          <div key={blog.id} className={styles.cardsBody}>
            <CardComponent 
              title={blog.title}
              description={blog.description}
              imgURL={blog.image_url}
              isEditable={blog.user_id == authState.user.id ? true : false}
              isDeletable={blog.user_id == authState.user.id ? true : false}
              onEditClick={() => navigate(APP_ROUTES.BLOG, { state: { ...blog } })}
              onViewClick={() => navigate(APP_ROUTES.BLOG, { state: { ...blog, mode: "view" } })}
              onDeleteClick={() => handleDeleteClick(blog.id ?? 0)}
            />
          </div>
        )
      })}
    </div>
    </div>
  );
}

export default MyFavouritesScreen;
