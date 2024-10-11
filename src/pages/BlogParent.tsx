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


/**
 * A React functional component that represents a parent component for displaying a list of blog articles. It fetches the blog articles using a client-side query, updates the state with the fetched data, and renders a layout with the list of articles including their title, publication date, and description. If no articles are loaded yet, it displays a loading message.
 * @author Xander
 *
 * @export
 * @returns {*} A functional component that displays a list of blog articles fetched from a client. It uses useState to manage the articles state and useEffect to fetch the articles from the client when the component mounts. The articles are then displayed in a list structure with article title, published date, and description. If no articles are loaded yet, it displays a loading message. The component is wrapped in a Layout component for styling purposes.
 */
export default function BlogParent() {
  const [articles, setArticles] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc){
          title,
          slug,
          publishedAt,
          description
        }`
      )
      .then((data: Post[]) => setArticles(data))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <div id="article-list">
        <h1>blog</h1>
        {articles.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <ul id="blog-list">
            {articles.map((article) => (
              <li key={article.slug.current}>
                <Link to={`/blog/${article.slug.current}`}>
                  <h2>{article.title}</h2>
                </Link>
                <p>
                  {new Date(article.publishedAt).toISOString().slice(0, 10)}
                </p>
                <p>{article.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
