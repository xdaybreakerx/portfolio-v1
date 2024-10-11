// module imports
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// utils + layout import
import { client } from "../utils/sanity/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Layout from "../components/Layout";

// styling
import "../styles/BlogPost.css";

// Define types for the post data
interface Post {
  title: string;
  slug: { current: string };
  body: any;
  mainImage?: { asset: { _id: string; url: string } };
  publishedAt: string;
}

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

/**
 * A property that defines different serializers for different types of data. It includes a serializer for the 'image' type which takes props as input and returns an image element with specified URL, alt text, and class name.
 * @author Xander
 *
 * @type {{ types: { image: (props: any) => any; }; }}
 */
const serializers = {
  types: {
    image: (props: any) => (
      <img
        src={urlFor(props.node.asset).width(800).url()}
        alt={props.node.alt || "Embedded Image"}
        className="my-4 rounded-md"
      />
    ),
  },
};


/**
 * Creates a functional component BlogPost that fetches a specific blog post data based on the provided slug param. Renders the blog post details including title, published date, body, and main image. Provides a button to navigate back to the blog page. Displays a loading message while fetching data. Utilizes client to fetch data, useParams to get the slug param, useNavigate for navigation, useState to manage post data state, and useEffect to fetch data on component mount.
 * @author Xander
 *
 * @export
 * @returns {*} A function component that renders a blog post based on the slug parameter. It fetches the post data using the 'slug' provided and displays the post title, body, main image, and published date. It includes a back button to navigate back to the blog page and shows a loading indicator while fetching data.
 */
export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [postData, setPostData] = useState<Post | null>(null);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          body,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          publishedAt
        }`
      )
      .then((data: Post[]) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <Layout>
      <article>
        <div id="article-page">
          <div>
            <button id="back-button" onClick={() => navigate("/blog")}>
              Close
            </button>
            {!postData ? (
              <div>Loading...</div>
            ) : (
              <>
                <h1>{postData.title}</h1>
                <p>{new Date(postData.publishedAt).toDateString()}</p>
                <BlockContent
                  blocks={postData.body}
                  serializers={serializers}
                  projectId="yourProjectId"
                  dataset="yourDataset"
                />
              </>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
}
