import React from 'react';
//import {useForm} from '../hooks/useForm';

const InputEmail = (props) => {
    
  // const initialForm = {
  //   name: '',
  //   lastName:'',
  //   email: '',
  //   file:''
  // }

  // const validationForm = (form) =>{
  //   let errors = [];
  //   //let pattern = 

  //   if(!form.email){
  //       console.log('hay error, complete el email')
  //   }

  //   return (errors)
  // }

  //const {form, errors, response, handleChange, handleBlur} = useForm(initialForm, validationForm);

    return (
        <div className="labelInput">
            <label>{props.label}</label>
            <input  id="email"
                    name="email"
                    type="email"
                    placeholder={props.helper}
                    // value={form.email}
                    // onBlur={handleBlur}
                    // onChange={handleChange}
                    />
        </div>
    )
}

export default InputEmail