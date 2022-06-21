import React, { useEffect, useState } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

export default function Articles() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      console.log("A", data);
      setArticles(data);
    }, 2500);
  }, []);

  return (
    <div className="articles">
      <h2>Articles</h2>
      <SkeletonArticle />
      {articles &&
        articles.map((art) => (
          <div className="article" key={art.id}>
            <h3>{art.title}</h3>
            <p>{art.body}</p>
          </div>
        ))}
      {!articles && [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)}
    </div>
  );
}
