import React, {useState} from 'react'

export default function Textform(props) {
    const handleupclick = () => {
        console.log("uppercase was used");
        setText(text.toUpperCase());
        props.showAlert(" Uppercase was used","success")
    }
    const handledownclick = () => {
        console.log(" lowercase was used");
        setText(text.toLowerCase());
        props.showAlert(" Lowercase was used","success")
    }
    const handleonchange =(event) =>{
        console.log("handleonchange was used")
        setText(event.target.value)
    }
    const [text, setText] = useState("");
    console.log(useState)
  return (
    <div>
      <div className="container" style={{color: props.mode ==='dark'?'white':'black'}} >
        <h1>{"Enter Text Here"}</h1>
      
      <div className="mb-3">
        <label htmlFor="mybox1" className="form-label"></label>
        <textarea  className='form-control' value={text} onChange={handleonchange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black' }} id="mybox1" rows="10"></textarea>

      </div>
      <button className="btn btn-primary me-1" onClick={handleupclick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handledownclick}>Convert to Lowercase</button>
    <div className="containe my-3" style={{color: props.mode ==='dark'?'black':'white'}}>
    <p style={{color: props.mode ==='dark'?'white':'black'}}>{text.split(" ").length } words and {text.length} characters</p>
      <p style={{color: props.mode ==='dark'?'white':'black'}}>total time taken to read this text is {0.008*(text.split(" ").length)}</p>
    </div>
      </div>
        </div>
    
  )
}
