// this is a reducer function
// (state, action) => newState

const state = { count: 0 }

function reducer(state, action) {
  switch(action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload
      }
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload
      }
    default:
      return state
  }
}

console.log(state)
const newState = reducer(state, { type: "increment", payload: 5 })
console.log(newState)
console.log(state)
console.log(reducer(state, { type: "decrement", payload: 10 }))








// const person = { name: "Jason" }

// function enter(personObject) {
//   // this is now copying the original object
//   const friend = { ...personObject }
  
//   // same thing as the spread operator
//   // const friend = Object.assign({}, personObject)
  
//   // this is the MUTABLE way to do things
//   // const friend = personObject
//   friend.name = "Jane"
  
//   console.log("Hello", personObject.name)
//   console.log("Also, hello", friend.name)
// }

// function leave(personObject) {
//   console.log("Goodbye", personObject.name)
// }

// enter(person)
// leave(person)