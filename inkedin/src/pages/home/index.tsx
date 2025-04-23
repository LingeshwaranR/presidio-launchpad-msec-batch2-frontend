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

const HomeScreen = () => {
  const { authState } = useAuth()
  const navigate  = useNavigate()
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const getAllBlogs = async () => {
    const blogs = await api.get<IBlogResponse>(API_ENDPOINTS.GET_ALL_BLOGS, {
      headers: { Authorization: `Bearer ${authState.authToken}` }
    })
    setBlogs(blogs.data.responseData)
  }

  useEffect(() => {
    getAllBlogs()
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
              onCardClick={() => navigate(APP_ROUTES.BLOG, { state: { ...blog } })}
            />
          </div>
        )
      })}
    </div>
    </div>
  );
}

export default HomeScreen;
