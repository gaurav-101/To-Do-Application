import React, { useState } from "react";


const DueDateInput = () => {
  const [date, setDate] = useState(new Date());

  const onInputChange = (e) => {
      console.log(e.target.value);
      setDate(e.target.value);
  }
  return (
    <div>
      <label for="DueDate" ><div className="label">Due Date</div></label>
      <input type="date" name="dueDate" id="dueDate" onChange={onInputChange} value={date}></input>
      
    </div>
  );
};

export default DueDateInput;
