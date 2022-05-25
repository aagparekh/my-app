import React, { useState } from 'react'

export default function TextForm(props) {
    const clickHandle = () => {
        // console.log("Clicked");
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("success","Converted to uppercase");

    }
    const clickClearHandle = () => {
        // console.log("Clicked");
        setText("");

    }
    const onChangeEvent = (event) => {
        setText(event.target.value);
    }

    const clickModeHandle = () =>{
        if(myStyle.color === 'black')
        {
            setMyStyle({color:'white'});
           document.body.style.backgroundColor = 'black';
            setBtntext('Light mode');
        }
        else
        {
            setMyStyle({color:'black'});
            document.body.style.backgroundColor = 'white';
            setBtntext('black mode');
        }
    }
    const clickExtraSpaceHandle = ()=>{
        let regex = text.split(/[ ]+/);
        setText(regex.join(" "));
    }
    const clickCopyHandle = ()=>{
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard");
    }
    const [text, setText] = useState('Text here to change djfscmss');
    const [myStyle,setMyStyle] = useState({
        color:'black',
        backgroundColor:'white' 
    });
    const [btntext,setBtntext]  = useState('Black mode')
    return (
        <>
            <div className="container p-3" style={myStyle}>
                <div className="mb-3 pt-3">
                    <h4>{props.heading}</h4>
                    <textarea className="form-control" value={text} onChange={onChangeEvent} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button disabled={text.length==0} className="btn btn-primary" onClick={clickHandle}>Text Uppercase</button>
                <button disabled={text.length==0} className="btn btn-primary ms-2" onClick={clickClearHandle}>Clear</button>
                <button disabled={text.length==0} className="btn btn-primary ms-2" onClick={clickModeHandle}>{btntext}</button>
                <button disabled={text.length==0} className="btn btn-primary ms-2" onClick={clickCopyHandle}>Copy text</button>
                <button disabled={text.length==0} className="btn btn-primary ms-2" onClick={clickExtraSpaceHandle}>Remove Extra Space</button>

            </div>
            <div className="pt-4 p-3" style={myStyle}>
                <h4>Text sumary</h4>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words {text.length} Characters</p>
                <p><strong>{0.008 * text.length} Mins to read the text</strong></p>
            </div>
        </>
    );
}
