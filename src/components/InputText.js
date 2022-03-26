import React from 'react';

const InputText = (props) => {

    return (
        <div className="labelInput">
            <label>{props.label}</label>
            <input name={props.name} type="text"  placeholder={props.helper}></input>
        </div>
    )
}

export default InputText