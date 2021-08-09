import React from "react";
import "./BlogDetails.css";

const BlogDetails = (props) => {
  const { name, image, about, url } = props.blogItem;
  const date = new Date();

  return (
    <div className="col-lg-4 mb-5" data-aos="fade-up">
      <div className="blog-item">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="blog-img">
            <img src={image} alt="" />
          </div>
          <div className="px-3">
            <h4>{name}</h4>
            <p>{about}</p>
            <span>{date.toDateString()}</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogDetails;
