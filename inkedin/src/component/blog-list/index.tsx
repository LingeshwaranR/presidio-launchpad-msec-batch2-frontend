import { useNavigate } from "react-router-dom";
import { Plus } from "@mynaui/icons-react";
import styles from "./index.module.css";
import { API_ENDPOINTS } from "../../constants/api.constants";
import { api } from "../../configs/axios.config";
import { IBlog } from "../../types/app.type";
import { useAuth } from "../../context/auth/auth.context";
import { useEffect, useState } from "react";
import CardList from "../card-list";

interface BlogListScreenProps {
  fetchBlogs: () => Promise<IBlog[]>;
  title?: string;
}

const BlogListScreen = ({ fetchBlogs, title = "New Blog" }: BlogListScreenProps) => {
  const { authState } = useAuth();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<IBlog[]>([]);

  const loadBlogs = async () => {
    const allBlogs = await fetchBlogs();
    setBlogs(allBlogs);
  };

  const handleFavClick = async (isFavorited: boolean, blogId: number) => {

    if (!isFavorited) {
      await api.delete(API_ENDPOINTS.FAVORITE + `/${blogId}`, {
        headers: { Authorization: `Bearer ${authState.authToken}` },
      });
      return;
    }
    await api.post(
      API_ENDPOINTS.FAVORITE + `/${blogId}`,
      {},
      {
        headers: { Authorization: `Bearer ${authState.authToken}` },
      }
    );
  };

  const handleDeleteClick = async (blogId: number) => {

    await api.delete(API_ENDPOINTS.PUBLISH_BLOG + `/${blogId}`, {
      headers: { Authorization: `Bearer ${authState.authToken}` },
    });
    loadBlogs();
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  return (
    <div className={styles.homeScreenWrapper}>
      <div className={styles.createBlogButtonContainer}>
        <button className={styles.createBlogButton} onClick={() => navigate("/blog")}>
          <div>{title}</div>
          <Plus size={24} />
        </button>
      </div>
      <CardList
        blogs={blogs}
        onDeleteClick={handleDeleteClick}
        onFavClick={handleFavClick}
        onViewClick={(blog) => navigate("/blog", { state: { ...blog, mode: "view" } })}
        onEditClick={(blog) => navigate("/blog", { state: { ...blog } })}
      />
    </div>
  );
};

export default BlogListScreen;
