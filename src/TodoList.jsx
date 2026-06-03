import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){
	let [todos, setTodos] = useState([{Task : "sample task", id : uuidv4(), isDone : false }]);
	let [newTodo, setnewTodo] = useState("")

	let addnewTodo = () => {
		setTodos((prevTodos) => {
			return [...prevTodos, {Task : newTodo, id : uuidv4(), isDone : false}];
		});

		setnewTodo("");
	};

	let updatenewTodo = (event) =>{
		setnewTodo(event.target.value);
	};

	let deleteTodo = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== id);
		});
	};

	let isDone = (id) =>{
		setTodos((prevTodos) =>{
			return prevTodos.map((todo) => {
				if(todo.id === id){
					return {...todo, isDone : !todo.isDone}
				}else{
					return todo;
				}
			});
		})
	}

	return(
		<div>
			<br /><br />
			<h1>Todo List</h1>
			<br /><br />
			<input 
				placeholder="Enter your task" 
				value={newTodo}
				onChange = {updatenewTodo}
			></input>
			<button onClick ={addnewTodo}>Add Task</button>
			<br /><br />
			<ol>	 
				{
					todos.map((todo) => 
					<li key ={todo.id}>
						<span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
							{todo.Task}
						</span>
						&nbsp;&nbsp;
						<button onClick ={() => deleteTodo(todo.id)}>Delete task</button>
						&nbsp;&nbsp;
						<button onClick ={() => isDone(todo.id)}>Done</button>
					</li>)
				}
			</ol>
		</div>
	)
}