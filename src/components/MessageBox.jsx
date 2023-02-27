import React, { useState } from "react";

const MessageBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h2>Soy tu asesor de confianza ¿En que te puedo ayudar?</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MessageBox;
