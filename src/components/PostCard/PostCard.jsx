import React from "react";

function PostCard() {
  return (
    <div class="card">
      <div class="card-content">
        <h1 class="card-title" id="title">
          Content Card
        </h1>
        <p class="card-excerpt" style={{ marginTop: "25px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic.
        </p>
      </div>
    </div>
  );
}

export default PostCard;
