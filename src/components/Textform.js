import React,{useState} from 'react';


export default function TextForm(props){
    const [text,setText] = useState(""); 
    const handleUpClick = () =>{
        setText(text.toUpperCase());
    }
    const handleDwnClick =()=>{
        setText(text.toLowerCase());
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const handleCTClick = () =>{
        setText("");
    }


    
    // setText("new text");
    return(
    <>
    <div className="container">

    <h1>{props.h1head}</h1>
    <div      className = "mb-3">
    {/* <label    for   = "mybox" class = "form-label">{props.heading}</label> */}
    <textarea className = "form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"white":"grey"}} id = "mybox" rows = "5" placeholder={props.def_text}></textarea>
    </div>
    <button className = "btn btn-primary mx-2" onClick={handleUpClick}>UpperCase </button>
    <button className = "btn btn-primary mx-2" onClick={handleDwnClick}>LowerCase </button>
    <button className = "btn btn-primary mx-2" onClick={handleCTClick}>ClearText </button>

    </div>
    <div className="container my-2">
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read this</p>
        <h4> Preview </h4>
        <p>{text.length>0?text:"Enter something to previews"}</p>
    </div>



  </>
    )
}