import { useState } from "react";
import DueDateInput from "./DueDateInput";
import Priority from "./Priority";

const TodoForm = () => {
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");

    const onFormSubmit = () => {
    }

    const onTextChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    const onDescChange = (e) => {
        console.log(e.target.value);
        setDescription(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onTextChange}
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
        </form>
    )
}

export default TodoForm;