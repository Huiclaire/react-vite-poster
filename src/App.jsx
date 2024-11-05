import { useState } from 'react';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function ShowModalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
    <MainHeader onCreatePost={ShowModalHandler} />
    <PostList
      isPosting={modalIsVisible}
      onStopPosting={hideModalHandler}
    />
    </>
  )
};

export default App;
