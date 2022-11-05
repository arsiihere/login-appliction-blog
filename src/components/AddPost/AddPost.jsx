import React, { useRef } from "react";
import { Container } from "../Wrapper";
function AddPost() {
  const titleRef = useRef();
  const descRef = useRef();
  return (
    <Container>
      <div className="wrap-post-container" style={{ marginLeft: "-6rem" }}>
        <form className="post-form">
          <span className="post-form-title">
            Express Your Thought of the Day
          </span>
          <div className="post-input-warp">
            <input placeholder="Enter The Title" className="post-input" />
          </div>
          <div className="post-input-warp">
            <textarea
              placeholder="Write Your Thoughts Here"
              className="post-input"
            />
          </div>
          <div>
            <button
              className="btn btn-primary"
              style={{ padding: "10px", backgroundColor: "#000232" }}
            >
              Post It
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default AddPost;
