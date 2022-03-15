import React, { useState } from "react";
import { alphabet } from "./Data";

function App() {
  const [input, setInput] = useState();
  const [data, setData] = useState([]);
  const [number, setNumber] = useState();

  const handleText = (e) => {
    setInput(e.target.value);
  };

  const handleNumber = (e) => {
    setNumber(parseInt(e.target.value));
  };

  let dataChanger;

  let lastArr = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dataChanger = input.split("");

      for (let i = 0; i < dataChanger.length; i++) {
        let x;
        if (dataChanger[i].match(/[^A-Za-z]/g)) {
          x = dataChanger[i];
        } else {
          if (dataChanger[i] === dataChanger[i].toLowerCase()) {
            if (
              alphabet.indexOf(dataChanger[i].toUpperCase()) + number >
              alphabet.length - 1
            ) {
              x =
                alphabet[
                  alphabet.indexOf(dataChanger[i].toUpperCase()) +
                    number -
                    alphabet.length
                ].toLowerCase();
            } else {
              x =
                alphabet[
                  alphabet.indexOf(dataChanger[i].toUpperCase()) + number
                ]?.toLowerCase();
            }
          } else {
            if (
              alphabet.indexOf(dataChanger[i]) + number >
              alphabet.length - 1
            ) {
              x =
                alphabet[
                  alphabet.indexOf(dataChanger[i]) + number - alphabet.length
                ];
            } else {
              x = alphabet[alphabet.indexOf(dataChanger[i]) + number];
            }
          }
        }
        lastArr.push(x);
      }
    }

    lastArr.join("");
    setData((x) => [...x, lastArr.join("")]);
  };

  return (
    <div className="App">
      <header>
        <h2>Sezar şifrələnməsi</h2>
      </header>
      <div className="main">
        <form onSubmit={handleSubmit}>
          <label>Mətni daxil edin:</label>
          <textarea
            type="text"
            onChange={handleText}
            value={input || ""}
          ></textarea>
          <label>Açarı seçin:</label>
          <input
            type="number"
            onChange={handleNumber}
            value={number || ""}
            min="1"
            max="25"
          />
          <button type="submit">Şifrələ</button>
          {data.length > 0 ? (
            <p>
              Nəticə:{" "}
              <div>
                <i>{data[data.length - 1]}</i>
              </div>
            </p>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
