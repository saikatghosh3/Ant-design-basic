import React from "react";
import { Progress } from "antd";

const Progressbar = () => {
  return (
    <div>
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={50} status="active" />
      <Progress type="circle" percent={90}  strokeWidth={5}/>
      <Progress type="circle" percent={95} strokeColor="red" />
      <Progress
        type="circle"
        percent={90}
        strokeColor="blue"
        strokeWidth={10}
        status="exception"
       
      />
    </div>
  );
};

export default Progressbar;
