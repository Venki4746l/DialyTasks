import React, { useState } from "react";
import Child1 from "./Child1";

const Parent = () => {
  const [data, setData] = useState("");

  const dataUpdateHandler = (e) => {
    setData(e.target.value);
  };
  return (
    <div>
     <input type="text" onChange={dataUpdateHandler} />
      <Child1 dataHandler={data}  />
    </div>
  );
};

export default Parent;
