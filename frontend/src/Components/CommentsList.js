import React from "react";

const CommentsList = ({ comments }) => (
  <>
    <h3>Comments</h3>
    {comments.map((comment, index) => (
      <div className="comment" key={index}>
        <h4>{comment.postedBy}</h4>
        <p>{comment.comment}</p>
      </div>
    ))}
  </>
);

export default CommentsList;
