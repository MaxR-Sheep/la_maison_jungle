import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function lackMail() {
    if (!inputValue.includes("@")) {
      alert("Attention, il n'y a pas d'@, ceci ,'est pas une adresse valide");
    }
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez nous votre mail pour plus d'information:
      </div>
      <input
        placeholder="Entrz votre mail"
        onChange={handleInput}
        value={inputValue}
        onBlur={lackMail}
      />
    </footer>
  );
}
export default Footer;
