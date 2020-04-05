import React, { useState, useReducer } from "react";
import { initialState, reducer } from "../reducers/title";

const Title = () => {
  // still using state for form data since it will never be used outside this component
  const [newTitle, setNewTitle] = useState();
  // this hook will hook our state up to our reducer and take care of everything
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = e => {
    setNewTitle(e.target.value);
  };

  const handleEdit = e => {
    e.preventDefault();
    // tell the reducer to run against the current state,
    // and perform the following action.
    dispatch({ type: "TOGGLE_EDITING" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // empty the form after it submits
    setNewTitle("");
    // we can also use a "payload" in our action, to send some values to the reducer
    // we can call dispatch as many times as we want!
    // note on the payload: we use state.title if newTitle is empty
    dispatch({ type: "UPDATE_TITLE", payload: newTitle || state.title });
    dispatch({ type: "TOGGLE_EDITING" });
  };

  return (
    <div>
      {state.editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTitle"
            placeholder={state.title}
            value={newTitle}
            onChange={handleChanges}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h1>{state.title}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Title;
