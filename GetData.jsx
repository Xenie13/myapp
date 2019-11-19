import React, { useEffect, useState } from "react";
import Axios from "axios";

const GetData = () => {
  const [posts, setPosts] = useState(null);

  const fetchDataAsync = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/posts");
      console.log(response);
      const data = response.data;
      console.log(data);

      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = () => {
    Axios.get("http://localhost:3001/posts")
      .then(({ data }) => setPosts(data))
      .catch(e => console.log(e));
  };

  useEffect(() => {
    const data = fetchData();

    setPosts(data);
  }, []);

  console.log("posts:", posts);

  return (
    <div>
      {posts && posts.map((post, index) => <p key={index}> {post.title} </p>)}
    </div>
  );
};

export default GetData;
