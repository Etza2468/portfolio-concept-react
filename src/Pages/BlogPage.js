import React from "react";
import Title from "../Components/Title";
import allBlogs from "../Data/allBlogs";

function BlogPage() {
  return (
    <div className="BlogPage">
      <Title title={"Blogs"} span={"Blogs"} />
      <div className="blog-container">
        {allBlogs.map((blog) => {
          return (
            <div className="blog" key={blog.id}>
              <div className="blog-content">
                <img src={blog.image} alt={blog.title} />
                <a href={blog.link} className="blog-link">
                  {blog.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BlogPage;
