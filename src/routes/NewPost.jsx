import { useState } from "react";
import { Link, Form, redirect } from 'react-router-dom';

import { PiEyedropperSample } from "react-icons/pi";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css"

function NewPost(){
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="body" className="text">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
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
export async function action({request}) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: '...', author: '...' }
  // Sending request
  await fetch('http://localhost:8080/posts', {
    method: 'POST', // sending data to the server(e.g., creating or submitting a new resource)
    body: JSON.stringify(postData), //include the data you want to sent to the server
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
