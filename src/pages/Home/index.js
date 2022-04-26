import { useContext, useState, useEffect } from "react";
import { AuthContext } from "context";
import { useNavigate } from "react-router-dom";
import {
  AddPost,
  Post,
  ListOfPosts,
  CategoryFilter,
} from "components";
import styles from "./Home.module.css";
import axios from "axios";

export function Home() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  // Acquire the authorization context to get the user
  const { user } = useContext(AuthContext);

  // Function to acquire the posts from the backend
  const getPosts = async () => {
    // Endpoint for acquiring posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/post`;
    // Request config that is going to hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setPosts(result.data);
  };

  // Function to acquire the comments from the backend
  const getComments = async () => {
    // Endpoint for acquiring posts from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/comment`;
    // Request config that is going to hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setComments(result.data);
  };

  // useEffect is used when doing API calls
  useEffect(() => {
    getPosts();
    getComments();
  }, []);

  !user && navigate("/login");
  return (
    <div>
      {user ? (
        <div>
          <h1>Home</h1>
          <AddPost getPosts={getPosts} setPosts={setPosts} />
          <CategoryFilter />
          <ListOfPosts posts={posts} setPosts={setPosts} getPosts={getPosts} /> 
          <code>{JSON.stringify(user)}</code>
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}
