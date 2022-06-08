import React, { useEffect } from "react";

//types
import type { AppDispatch, RootState } from "./store/store";

//redux
import { useSelector } from "react-redux";
import { useAppDispatch } from "./store/hooks";
import { fetchPosts } from "./store/slices/thunks";

//components
import Post from "./components/Post";
import Modal from "./components/Modal";

function App() {
  const { posts, loading, error, errorMessage } = useSelector(
    (state: RootState) => state.posts
  );
  const { show } = useSelector((state: RootState) => state.modal);
  const dispatch: AppDispatch = useAppDispatch();

  // get posts
  useEffect(() => {
    dispatch(
      fetchPosts({
        url: "https://jsonplaceholder.typicode.com/posts?_limit=10",
      })
    );
  }, [dispatch]);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl">LOADING...</h1>
      </div>
    );
  } else if (error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-3xl">ERROR!</h1>
        <h2>{errorMessage}</h2>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col max-w-6xl mx-auto px-10 py-3">
        {show && <Modal />}
        {posts.map((post) => {
          return <Post {...post} key={post.id} />;
        })}
      </div>
    );
  }
}

export default App;
