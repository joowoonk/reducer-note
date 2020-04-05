// set up some initial values for our state
export const initialState = {
  title: "The Reducer Pattern",
  editing: false
};

export function reducer(state, action) {
  // basically a long if-statement over the action types
  switch (action.type) {
    case "TOGGLE_EDITING":
      // return a CLONED object with the changes described in the action.
      // this forces us into an immutable pattern
      return {
        ...state,
        editing: !state.editing
      };
    case "UPDATE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
