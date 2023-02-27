import React, { useState } from "react";

const PopUp = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleClick = () => {
    setShowPopUp(!showPopUp);
  };

  return (
    <div>
      <button onClick={handleClick}>Abrir Pop up</button>
      {showPopUp && <div>Este es el contenido del Pop up</div>}
    </div>
  );
};

export default PopUp;
