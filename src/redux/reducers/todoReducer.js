// import React from 'react';
// import { TODO_ADD, TODO_LIST, TODO_EDIT, TODO_DELETE } from '../types';
// const initialState = {
//     todos: []
// }
// const TodoReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case TODO_ADD:
//             return {
//                 todos: [
//                     ...state,
//                     {
//                         id: initialState.todos.length,
//                         value: action.payload,
//                     }
//                 ]
//             };
//         default:
//             return state;
//     }

// }
// export default TodoReducer;