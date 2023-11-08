import { useState } from "react";

const TodoForm = () => {
    const [text, setText] = useState("");

    const onFormSubmit = () => {
    }

    const onInputChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input  
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;