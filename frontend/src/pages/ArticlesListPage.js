import ArticlesList from "../Components/ArticlesList";
import articles from "../data/article-content";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticlesListPage;
