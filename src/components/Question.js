import React from "react";

export default function Question(props) {
  const { question } = props;
  console.log(props);
  return (
    <div>
      <h3>{question.author} asks</h3>
      <div>
        <img src={question.avatarURL} alt="avatar" />
      </div>
    </div>
  );
}
