// module imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Utils + Layout import
import { client } from "../utils/sanity/client";
import Layout from "../components/Layout";

// Styling
import "../styles/BlogParent.css";

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
    <Layout>
      <div id="article-list">
        <h1>blog</h1>
        <ul id="blog-list">
          {articles.map((article) => (
            <li key={article.slug.current}>
              <Link to={`/blog/${article.slug.current}`}>
                <h2>{article.title}</h2>
              </Link>
              <p>{new Date(article.publishedAt).toISOString().slice(0, 10)}</p>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
