import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getFirebase } from "../firebase";

import PostComponent from "../components/Post";

const PostPage = ({ match }) => {
  const slug = match.params.slug;
  console.log(slug);
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  useEffect(() => {
    if (loading && !currentPost) {
      getFirebase()
        .database()
        .ref()
        .child(`/posts/${slug}`)
        .once("value")
        .then((snapshot) => {
          if (snapshot.val()) {
            setCurrentPost(snapshot.val());
          }
          setLoading(false);
        });
    }
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const postDoesNotExist = !currentPost;
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }

  return (
    <>
      <PostComponent currentPost={currentPost} />
    </>
  );
};

export default PostPage;
