import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../utils/sanity/client";
import "../styles/ArticleParent.css";

// Define types for the post data
interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  description: string;
}

export default function BlogParent() {
  const [articles, setArticles] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(_createdAt desc){
          title,
          slug,
          publishedAt,
          description
        }`
      )
      .then((data: Post[]) => setArticles(data))
      .catch(console.error);
  }, []);

  if (!articles.length) return <div>Loading...</div>;

  return (
    <div className="article-list-container bg-black min-h-screen text-white p-12">
      <h1 className="text-3xl mb-8">blog</h1>
      <ul className="space-y-4">
        {articles.map((article) => (
          <li key={article.slug.current}>
            <Link
              to={`/blog/${article.slug.current}`}
              className="text-purple-400 hover:underline"
            >
              <h2 className="text-xl">{article.title}</h2>
            </Link>
            <p className="text-gray-400">
              {new Date(article.publishedAt).toISOString().slice(0, 10)}
            </p>
            <p className="text-sm">{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
