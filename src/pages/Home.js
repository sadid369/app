import React, { useState, useEffect } from "react";
import { H2 } from "@leafygreen-ui/typography";
import PostSummary from "../components/PostSummary";
import { baseUrl } from "../config";

export default function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${baseUrl}/posts/latest`).then((resp) =>
        resp.json()
      );
      console.log(result);
      setPosts(result);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <H2>Latest Articles</H2>
      <div>
        {posts.map((post) => {
          return <PostSummary {...post} key={post._id} />;
        })}
      </div>
    </React.Fragment>
  );
}
