import React from "react";
import "./title.scss";

const Title = () => {
  return (
    <article className="title">
      <h2 className="title__heading"> Hello, Jonas!</h2>
      <p className="title__under-heading">
        You have &nbsp;
        <span className="under-heading__strong" id="taskCount">
          3 new task &nbsp;
        </span>
        today
      </p>
    </article>
  );
};

export default Title;
