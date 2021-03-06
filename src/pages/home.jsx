import React, { useState, useEffect } from "react";
import { getFirebase } from "../firebase";

import PostsList from "../components/PostsList";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    if (loading && !blogPosts.length) {
      getFirebase()
        .database()
        .ref("/posts")
        .orderByChild("date")
        .once("value")
        .then((snapshot) => {
          let posts = [];
          const snapshotVal = snapshot.val();
          for (let slug in snapshotVal) {
            posts.push(snapshotVal[slug]);
          }

          const newestFirst = posts.reverse().slice(0, 10);
          setBlogPosts(newestFirst);
          setLoading(false);
        });
    }
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Latest</h1>
      <PostsList posts={blogPosts} />
    </>
  );
};

export default Home;
