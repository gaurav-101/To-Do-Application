import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";
import DueDateInput from "./DueDateInput";
import Priority from "./Priority";


const TodoForm = () => {
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }
    const onDescChange = (e) => {
        // console.log(e.target.value);
        setDescription(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
            <input  
                placeholder="Enter description..."
                className="input"
                onChange={onDescChange}
                value={description}
            />
            <DueDateInput/>
            <Priority/>
            <button className="submit-button">Submit</button>
        </form>
    )
}

export default TodoForm;