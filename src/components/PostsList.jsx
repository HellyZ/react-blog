import React from "react";
import { Link } from "react-router-dom";

const PostsList = (props) => {
  const { posts } = props;
  return (
    <>
      {posts.map((blogPost) => (
        <section key={blogPost.slug} className="card">
          <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
          <div className="card-content">
            <h2>
              {blogPost.title} &mdash;{" "}
              <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `${blogPost.content.substring(0, 200)}...`
              }}
            ></p>
            <Link to={`/posts/${blogPost.slug}`}>Continue reading...</Link>
          </div>
        </section>
      ))}
    </>
  );
};

export default PostsList;
