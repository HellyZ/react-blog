import React from "react";

import "./Post.scss";

const PostComponent = (props) => {
  const { currentPost } = props;
  return (
    <>
      <div className="post">
        <img src={currentPost.coverImage} alt={currentPost.coverImageAlt} />
        <h1>{currentPost.title}</h1>
        <em>{currentPost.datePretty}</em>
        <p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      </div>
    </>
  );
};

export default PostComponent;
