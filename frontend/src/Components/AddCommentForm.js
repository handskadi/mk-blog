import axios from "axios";
import React from "react";
import { useState } from "react";
const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const addComment = async () => {
    const response = await axios.post(`/api/articles/${articleName}/comments`, {
      postedBy: name,
      comment: comment,
    });
    const updatedArticle = response.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setComment("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a comment</h3>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Comment</label>
      <textarea
        rows="4"
        cols="50"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
