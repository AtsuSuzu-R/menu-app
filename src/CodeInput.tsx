import "./CodeInput.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function CodeInput() {
  const [num, setNum] = useState("");

  const handleNumberClick = (value: string) => {
    setNum(num + value);
  };

  return (
    <div className="menu-num">
      <TextField
        className="input"
        variant="outlined"
        fullWidth
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <div className="button-row">
        <button className="btn-num" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("3")}>
          3
        </button>
      </div>
      <div className="button-row">
        <button className="btn-num" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("6")}>
          6
        </button>
      </div>
      <div className="button-row">
        <button className="btn-num" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="btn-num" onClick={() => handleNumberClick("9")}>
          9
        </button>
      </div>
      <div className="button-row button-row-last">
        <button className="btn-num" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button className="btn-num" onClick={() => setNum("")}>
          C
        </button>
      </div>
    </div>
  );
}
