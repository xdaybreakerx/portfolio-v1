import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client } from "../utils/sanity/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

import "../styles/BlogPost.css"

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

// Define serializers for handling embedded content such as images
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

  if (!postData) return <div>Loading...</div>;

  return (
    <article>
      <div className="article-page bg-black min-h-screen text-white p-12">
        <div className="container mx-auto px-6 md:px-16 lg:px-32 py-8 prose prose-dark">
          <button
            className="text-purple-500 hover:underline absolute top-4 right-4"
            onClick={() => navigate("/")}
          >
            Close
          </button>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <p className="text-sm text-gray-400 mb-8">
            {new Date(postData.publishedAt).toDateString()}
          </p>
          <BlockContent
            blocks={postData.body}
            serializers={serializers}
            projectId="yourProjectId"
            dataset="yourDataset"
          />
        </div>
      </div>
    </article>
  );
}
