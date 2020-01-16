import React, { useState } from "react";

export default function({ suggestions }) {
  const [currentValue, setCurrentValue] = useState("");
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleChange = e => {
    let cv = e.target.value;
    let length = cv.length;
    setCurrentValue(cv);
    if (cv.length > 0) {
      setCurrentSuggestions(
        suggestions.filter(item => {
          if (
            item.animal.toLowerCase().slice(0, length) ===
            cv.toLowerCase().slice(0, length)
          )
            return item.animal;
        })
      );
    } else {
      setCurrentSuggestions([]);
    }
  };

  const handleKeyDown = e => {
    console.log(e.key);
    if (e.key === "ArrowUp" && currentSuggestions.length > 0) {
      if (selectedIndex > -1) {
        setSelectedIndex(selectedIndex - 1);
      } else {
        setSelectedIndex(currentSuggestions.length - 1);
      }
    }

    if (e.key === "ArrowDown" && currentSuggestions.length > 0) {
      if (selectedIndex < currentSuggestions.length - 1) {
        setSelectedIndex(selectedIndex + 1);
      } else {
        setSelectedIndex(-1);
      }
    }

    if (e.key === "Enter" && currentSuggestions.length > 0) {
      setCurrentValue(currentSuggestions[selectedIndex].animal);
    }
  };

  return (
    <>
      <h1>You can only search for animals!</h1>
      <input
        placeholder="Put stuff here"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={currentValue}
      ></input>
      <ul className="suggestions">
        {currentSuggestions.length > 0 &&
          currentSuggestions.map((suggestion, i) => (
            <li key={i} className={i === selectedIndex ? "selected" : null}>
              {suggestion.animal}
            </li>
          ))}
      </ul>
    </>
  );
}
