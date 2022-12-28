import React from "react";
import axios, * as others from 'axios';
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    //Function to update the input
    const inputTextHandler = (e) => {

        setInputText(e.target.value);
        console.log(e.target.value)

    }

    const submitTodoHandler = async (e) => {

        e.preventDefault();
        setTodos([
            ...todos,

            {text: inputText, completed: false, id: Math.random() * 1000}
        ]);

        // axios.post("localhost:8080/todo/add", {content: "Connect application", userName: "tobi"}).then((response => {
        //     console.log(response.data);
        // })).catch((err => {
        //     console.log(err);
        // }));
        setInputText("");
        try {
            const res = await axios.post('http://localhost:8080/todo/add', {content: "Connect application", userName: "tobi"});
            console.log(res.data);
        }catch (e) {
            console.log("axios error");
            console.log(e);
        }

    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(
    <form>
        <input 
            value={inputText}  
            onChange={inputTextHandler} 
            type="text" 
            className="todo-input" 
        />

        <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
    </form>
    );
};

export default Form;