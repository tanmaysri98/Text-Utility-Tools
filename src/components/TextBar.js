import React, { useState } from 'react';
import './TextBar.css'

export default function TextBar() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUpperCaseClick = () => {
    setResult(text.toUpperCase());
  };

  const handleLowerCaseClick = () => {
    setResult(text.toLowerCase());
  };

  return (
    <>
      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} value={text} onChange={handleChange}></textarea>
        <label htmlFor="floatingTextarea2">Comments</label>
      </div>
      <button className="btn btn-primary my-2" type="button" onClick={handleUpperCaseClick}>Convert to Upper-Case</button>
      <button className="btn btn-secondary mx-3 my-2" type="button" onClick={handleLowerCaseClick}>Convert to Lower-Case</button>
      <div>{result}</div>

      <div className='container'> 
        <h1>Counter:</h1>
        <p>{text.length} characters and {text.split(" ").length} words.</p>
        <p>{0.008 * text.split(" ").length} minutes to read completely.</p>
      </div>
    </> 
  );
}
