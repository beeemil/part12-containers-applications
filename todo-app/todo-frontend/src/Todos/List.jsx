import React from 'react'
import Todo from './Todo'

const List = ({ todos, deleteTodo, completeTodo }) => {
  const setti = import.meta.env.VITE_BACKEND_URL
  console.log('sett',setti)
  try {
  return (
    <>
      {todos.map(todo => {
        return (
        <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
        )
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )}
  catch {
      return (
        <>jou </>
      )}
  }

export default List
