import { TODO_ADD, TODO_LIST, TODO_EDIT, TODO_DELETE } from "../types"

export const handleTodoAddAction = (data) => {
    return function (dispatch) { dispatch({ type: TODO_ADD, data }) }
}

export const handleTodoGetAction = () => {
    return function (dispatch) { dispatch({ type: TODO_LIST }) }
}

export const handleTodoEditAction = (data) => {
    return function (dispatch) { dispatch({ type: TODO_EDIT, data }) }
}

export const handleTodoDeleteAction = (key) => {
    return function (dispatch) { dispatch({ type: TODO_DELETE, key }) }
}