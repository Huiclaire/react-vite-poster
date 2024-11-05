import { useState } from "react";
import Post from "./Post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({isPosting, onStopPosting}) {
  const [ posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    //Send HPPT request from frontend to backend.
    //Pass an object as an second argument to fetch
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal isClose={onStopPosting} isOpen={isPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} body={post.body} author={post.author} />
            ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;


// --- Lift the state up
// 1. import 'useState'
// 2. register enteredBody state
// 3. move changeBodyHandler function from NewPost
// 4. Add 'props' to'NewPost' function


// --- Show or not show new post
// 1. register a new state
// 2. add event listener to this backdrop
// 3. use that state to show or not show
