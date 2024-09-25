import { useParams } from "react-router-dom";
import articles from "../data/article-content";
import CommentsList from "../Components/CommentsList";
import NotFoundPage from "./NotFoundPage";
import { useState, useEffect } from "react";
import axios from "axios";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();
  const article = articles.find((article) => article.name == articleId);

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    loadArticleInfo();
  }, [articleId]);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvotes.</p>
      {article.content.map((pargraph, i) => (
        <p key={i}>{pargraph}</p>
      ))}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
