import React from "react";

const Priority=() =>{
  const [state, setState] = React.useState({
    priority: "urgent"
  })
  const handleChange = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
}
  return (
    <form>
      <div>
        
        Priority:
        <br/>

        <label>
          Urgent
          <input
            type="radio"
            name="priority"
            value="urgent"
            checked={state.priority === "urgent"}
            onChange={handleChange}
          />
        </label>
        <label>
          Important
          <input
            type="radio"
            name="priority"
            value="important"
            checked={state.priority === "important"}
            onChange={handleChange}
          />
        </label>
        <label>
          Not Important
          <input
            type="radio"
            name="priority"
            value="notimportant"
            checked={state.priority === "notimportant"}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
}

export default Priority;