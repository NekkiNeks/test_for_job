import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import React, { useEffect } from "react";

//types
import type { AppDispatch, RootState } from "./store/store";

//redux
import { useSelector } from "react-redux";
import { useAppDispatch } from "./store/hooks";
import { fetchPosts } from "./store/slices/thunks";
import { updateShow, defaultState } from "./store/slices/modalSlice";

//components
import Post from "./components/Post";
import NewModal from "./components/NewModal";

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
      <div className="w-3/4 m-auto p-5">
        <NewModal
          visible={show}
          onHiding={() => dispatch(updateShow({ show: false }))}
          onHidden={() => dispatch(defaultState())}
          dragEnabled={false}
          closeOnOutsideClick={true}
          showCloseButton={true}
          showTitle={false}
          container=".dx-viewport"
          width={300}
          height="auto"
          maxHeight={"100vh"}
        />

        <div className="flex flex-col">
          {posts.map((post) => {
            return <Post {...post} key={post.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
