import React, { useState, useEffect } from "react";
import AddPost from "../components/AddPost/AddPost";
import PostCard from "../components/PostCard/PostCard";
import useHttp from "../hooks/useHttp";
import { useSelector } from "react-redux";
import { getBlogConfig } from "../utils/config";
function ShowPost() {
  const userEmail = window.localStorage.getItem("userEmail");
  const fetchData = useSelector((state) => state.ui.recallFetch);
  const [blogPosts, setBlogPosts] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();
  function formulateResponseData(data) {
    let arrayOfData = [];
    if (Object.keys(data).length != 0) {
      for (let item in data) {
        if (data[item].email === userEmail) {
          arrayOfData.push(data[item]);
        }
      }
    }
    setBlogPosts(arrayOfData);
  }

  useEffect(() => {
    sendRequest(getBlogConfig, formulateResponseData);
  }, [fetchData]);
  return (
    <div>
      <AddPost />
      <div className="post-content">
        {blogPosts.length != 0 &&
          blogPosts.map((post) => (
            <PostCard text={post.text} title={post.title} />
          ))}
      </div>
    </div>
  );
}

export default ShowPost;
