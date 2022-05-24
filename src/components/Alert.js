import React from 'react'

function Alert(props) {
    const capital = (word)=>{
       let str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1); 
    }
  return(
    <div style={{height:'50px'}}>

    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capital(props.alert.type)}!</strong> {props.alert.mess}
</div>}</div>
  )
}

export default Alert;
