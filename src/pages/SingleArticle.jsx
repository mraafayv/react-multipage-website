import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Error from "./Error";
import "./page styles/SingleArticle.css";

export default function SingleArticle() {
  const { id } = useParams();
  const {
    data: article,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/articles/${id}`);

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(()=> navigate("/"), 2000)
      
    }
  }, [error, navigate]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <Error />}
      {article && (
        <div className="article-body">
          <h2>{article.title}</h2>
          <h3>
            Written By: <span> {article.author} </span>
          </h3>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
