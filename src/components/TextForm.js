import React,{useState} from 'react'

export default function TextForm(props) {

const  upperCaseHandler=()=>{
  let newtext=text.toUpperCase();
  setText(newtext);
  props.showAlert("converted to Uppercase","Success");
}
const handleOnChange=(event)=>{
  setText(event.target.value);
 
} 
const clearHandler=()=>{
  setText("");
  props.showAlert("Text Cleared","Success");
}
const lowerCaseHandler=()=>{
  let newtext=text.toLowerCase();
  setText(newtext);
  props.showAlert("converted to Lowercase","Success");
}
const copyHandler=()=>{
  
  navigator.clipboard.writeText(text);
  props.showAlert("Text Copied","Success");
}
const removeHandler=()=>{
  let newString = text.replace(/\s+/g,' ').trim();
  setText(newString);
  props.showAlert("Extra Spaces Removed","Success");
}

const [text, setText] = useState('enter text here');
  return (
  <div>
      
      <div className="mb-3 my-4">
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>
    
      <button type="button" className="btn btn-primary my-1" disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'black':null}} onClick={upperCaseHandler} >Convert to Uppercase</button>
      <button type="button" className="btn btn-primary my-1 mx-1" disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'black':null}} onClick={lowerCaseHandler} >Convert to Lowercase</button>
      <button type="button" className="btn btn-primary my-1 " disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'black':null}} onClick={clearHandler} >Clear Text</button>
      <button type="button" className="btn btn-primary my-1 mx-1" disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'black': null}} onClick={copyHandler} >Copy Text</button>
      <button type="button" className="btn btn-primary my-1 " disabled={text.length===0} style={{backgroundColor:props.mode==='dark'?'black': null}} onClick={removeHandler} >Remove Extra spaces</button>
      
      <div className='container'>
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{0.008 *text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} minutes to read </p>
        <h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h2>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length===0?"Enter something to preview it":text}</p>
      </div>
  </div>
  )
}
