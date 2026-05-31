import { useState } from 'react';

export default function TodoList(){
	let [todos, setTodos] = useState(["Sample task"])
	let [newTodo, setnewTodo] = useState("")

	let addnewTodo = () => {
		setTodos([...todos, newTodo]);
		updatenewTodo("");
	};

	let updatenewTodo = (Event) =>{
		setnewTodo(event.target.value);
	};

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
					todos.map((todo) => <li>{todo}</li>)
				}
			</ol>
		</div>
	)

}