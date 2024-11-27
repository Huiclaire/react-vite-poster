import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostList.module.css";
// router: new post, starting page, post detail page

function PostList() {
  const posts = useLoaderData();
  // const [ posts, setPosts] = useState([]);
  //-- 600. handling loading state
  // 1. Add another state with usestate.
  // 2. name 'isFetching' state. It should be initially false so to be a boolean value.
  // 3. Set 'isFetching' to 'true' right when we start fetching posts.
  // 4. Set it to 'false' in the end.
  // 5. JSX code: show fallback text if we are not fetching.
  // const [ isFetching, setIsFetching] = useState([false]);
  // setIsFetching => updating the state ; isFetching => state variable determines how UI behaves.


  // --------- 599. Add user effect hook to fetch data -----------
  // How to fetch post when we first reload the page? => 'useEffect' hook.(To wrap side effect)
  // Side effects are "tasts" that don't impact the current component render cycle.
  // Two argument must be used to pass useEffect: a function & an array.
  // Preventing infinite loop
  // It exectue sometimes when the component function executes, controlled by the second argument => '[]'.
  // When does it execute?
  //   [] => specifies the dependencies of the effect function.
  //   Dependencies => any variable or funciton that might be defined outsie this effect function. i.e. useState.
  //   Whenever the outside function or its parents component has a new valuem this effect function will be executed again.
  // ---------------------------------------------------------------
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true); //the posts are being fetched
  //     const response = await fetch('http://localhost:8080/posts');
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false); //the fecthing is complete
  //   }

  //   fetchPosts();
  // }, []);

  // function addPostHandler(postData) {
  //   //Send HPPT request from frontend to backend.
  //   //Pass an object as an second argument to fetch
  //   // fetch('http://localhost:8080/posts', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify(postData),
  //   //   headers: {
  //   //     'Content-Type': 'application/json'
  //   //   }
  //   // });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  return (
    <>
      {/* if not fetching */}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} id={post.id} body={post.body} author={post.author} />
            ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {/* if fetching
      {isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading posts...</p>
        </div>
      )} */}
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
