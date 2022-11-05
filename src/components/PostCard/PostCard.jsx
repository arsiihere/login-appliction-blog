import React from "react";

function PostCard({ title, text }) {
  return (
    <div class="card">
      <div class="card-content">
        <h1 class="card-title" id="title">
          {title}
        </h1>
        <p class="card-excerpt" style={{ marginTop: "25px" }}>
          {text}
        </p>
      </div>
    </div>
  );
}

export default PostCard;
