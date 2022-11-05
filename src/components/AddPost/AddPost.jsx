import React, { useRef, useEffect } from "react";
import { Container } from "../Wrapper";
import useHttp from "../../hooks/useHttp";
import { sendBlogConfig } from "../../utils/config";

import { uiActions } from "../../store/uiSlice";
import { useDispatch } from "react-redux";
function AddPost() {
  const titleRef = useRef();
  const descRef = useRef();
  const dispatch = useDispatch();
  const { isLoading, error, sendRequest } = useHttp();
  const email = window.localStorage.getItem("userEmail");

  async function sendContentHandler(title, text) {
    await sendRequest(
      {
        ...sendBlogConfig,
        body: { email: email, title, text },
      },
      () => {}
    );
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(uiActions.toggleRefetchData());
    }
  }, [isLoading]);
  return (
    <Container>
      <div
        className="wrap-post-container"
        style={{ marginLeft: "-6rem", marginTop: "1rem" }}
      >
        <form className="post-form">
          <span className="post-form-title">
            Express Your Thought of the Day
          </span>
          <div className="post-input-warp">
            <input
              placeholder="Enter The Title"
              className="post-input"
              ref={titleRef}
            />
          </div>
          <div className="post-input-warp">
            <textarea
              ref={descRef}
              placeholder="Write Your Thoughts Here"
              className="post-input"
            />
          </div>
          <div>
            <button
              disabled={isLoading}
              className="btn btn-primary"
              style={{ padding: "10px", backgroundColor: "#000232" }}
              onClick={(e) => {
                e.preventDefault();

                sendContentHandler(
                  titleRef.current.value,
                  descRef.current.value
                );
                titleRef.current.value = "";
                descRef.current.value = "";
              }}
            >
              Post It
            </button>
          </div>
          {error}
        </form>
      </div>
    </Container>
  );
}

export default AddPost;
