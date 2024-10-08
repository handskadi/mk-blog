import { useParams } from "react-router-dom";
import CommentsList from "../Components/CommentsList";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";
import AddCommentForm from "../Components/AddCommentForm";
import useUser from "../hooks/useUser";
import articles from "../data/article-content";
import { useNavigate } from "react-router-dom";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({
    upvotes: 0,
    comments: [],
    canUpvote: false,
  });
  const { canUpvote } = articleInfo;
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);
  const { user, isLoading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const headers = token ? { authtoken: token } : {};
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers,
      });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };

    if (!isLoading) {
      loadArticleInfo();
    }
  }, [articleId, isLoading, user]);

  const addUpvote = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.put(
      `/api/articles/${articleId}/upvote`,
      null,
      { headers }
    );
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        {user ? (
          <button onClick={addUpvote}>
            {canUpvote ? "Upvote" : "Upvoted"}
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login to upvote
          </button>
        )}{" "}
        <p> This article has {articleInfo.upvotes} upvotes.</p>
      </div>
      {article.content.map((pargraph, i) => (
        <p key={i}>{pargraph}</p>
      ))}
      {user ? (
        <AddCommentForm
          onArticleUpdated={setArticleInfo}
          articleName={articleId}
        />
      ) : (
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login to comment
        </button>
      )}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
