import articles from "../data/article-content";
import { Link } from "react-router-dom";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      {articles.map((articles) => (
        <Link to={`/articles/${articles.name}/`}>
          <h3>{articles.title}</h3>
          <p>{articles.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
};

export default ArticlesListPage;
