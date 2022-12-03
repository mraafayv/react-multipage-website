import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import { Route } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Error from "./Error";
import './page styles/Home.css'
import SingleArticle from "./SingleArticle";

export default function Home() {
    const { data: articles, isPending, error } = useFetch(' http://localhost:3000/articles');


    

  return (
    <div className="home">
        <h2>Articles</h2>
        {isPending && <div>Loading...</div>}
        {error && <Error />}
        {articles && articles.map((article) => (
            <div key={article.id} className="card" >
                <Link to={`articles/${article.id}`} className="article-title"><h3>{article.title}</h3></Link>
                <p>{article.author}</p>
                <Link to={`articles/${article.id}`} className="read-more">Read more...</Link>
            </div>
        ))}
    </div>
  );
}
