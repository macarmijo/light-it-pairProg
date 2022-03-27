import React from 'react';

const InputText = (props) => {

    return (
        <div className="labelInput">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text"  placeholder={props.helper} id={props.name}
                onChange={props.change} value={props.value} name={props.name}
            />
          {props.messageError 
              ? <>
                  <div className="line"></div>
                  <p className="error">{props.messageError}</p>
                </>
              : ''
            } 
           
        </div>
    )
}

export default InputText