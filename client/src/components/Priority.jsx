import React from "react";

const Priority=() =>{
  const [state, setState] = React.useState({
    level: "master"
  })
  const handleChange = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
}
  return (
    <form>
      <div>
        Level
        <label>
          Acolyte
          <input
            type="radio"
            name="level"
            value="acolyte"
            checked={state.level === "acolyte"}
            onChange={handleChange}
          />
        </label>
        <label>
          Master
          <input
            type="radio"
            name="level"
            value="master"
            checked={state.level === "master"}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
}

export default Priority;