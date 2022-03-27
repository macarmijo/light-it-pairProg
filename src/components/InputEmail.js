import React from 'react';

const InputEmail = (props) => {

    return (
        <div className="labelInput">
            <label htmlFor='email'>{props.label}</label>
            <input  name="email"
                    type="email"
                    placeholder={props.helper}
                    id='email'
                    onChange={props.change} value={props.value}
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

export default InputEmail;