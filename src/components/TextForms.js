import React, { useState } from "react";

export default function TextForms(props) {
  const handleUper = () => {
    // console.log("uppercase was clicked!");
    const newText = text.toUpperCase();
    props.showAlert("Converted to uppercase!", "success");
    //    console.log(upper);
    setText(newText);
  };
  const handletoLower = () =>{
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");


  }
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value); 
    props.showAlert("Copied to clipboard!", "success");

  }
  const removeSpace = () =>{
    var newText = text.split(/[ ]+/);
    setText(newText.join(" "))    
    props.showAlert("Extra spaces removed!", "success");

}
  
  const handleClear = () =>{
    const newText = ''
    setText(newText);
    props.showAlert("Text cleared!", "success");

  }
 
  const handleCap = () =>{
    var newText = text.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
    setText(newText);
    props.showAlert("Converted to capitalize!", "success");

  }
 
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new text"; // wrong wasy to change the state
  // setText ("new text"); // correct wat to change the state
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'? 'white': 'grey',color:props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8" placeholder="enter text here"></textarea>
        <button className="btn btn-primary my-3" onClick={handleUper}>Convert to Uppercase </button>
        <button className="btn btn-primary mx-3" onClick={handletoLower}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleCap}>Capitalize text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-3" onClick={removeSpace}>Remove extra spaces</button>

        <button className="btn btn-warning mx-2" onClick={handleClear}>Clear Text</button>
      </div>
    </div>
    <div className="container my-2" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.trim() === "" ? 0 : text.split(" ").length} words and {text.length} charcters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview"}</p>
    </div>
    </>
  );
}
