import { useState } from "react";
import { PiEyedropperSample } from "react-icons/pi";
import classes from "./NewPost.module.css"

function NewPost({ onCancel, onAddPost }){
  const [ enteredBody, setEnteredBody ] = useState('');
  const [ enteredAuthor, setEnteredAuthor ] = useState('');

  function changeBodyHandler(event) {
    setEnteredBody(event.target.value);
  }

  function changeAuthorHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData =  {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body" className="text">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeAuthorHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  )
};

export default NewPost;
// --- Add Event Listeners
// 1. NewPost: listen to change to text area
// 2. add props 'onChange' to textarea
// 3. add new function inside function 'ChangeBodyHandler(){}
// 4. onChange={function} => onChange={changBodyHandler}
// 5. add event target value property to function and console.log, value is
//    hold by the user.


// --- Working with State
// 1. import 'useState' react hooks(JS functions).
// 2. register state
// 3. update the state by calling setEnteredBody in the funciton

// -- Handling Form Submission
