import React, { useEffect, useState } from 'react';
import InputText from './InputText'
import InputEmail from './InputEmail'
import InputLink from './InputLink'
import validation from './validation'

const Form = () => {

    const [values, setValues]= useState({
        firstName: '',
        lastName: '',
        email: '',
        url: '',
    });

    const [errors, setErrors] = useState({});

    const [click, setClick] = useState(false)

    const handleChange = (e)=>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    };

    const handleClick = (e) => {
        e.preventDefault();
        setErrors(validation(values));
        setClick(true);
    };

    useEffect(() => {    
        console.log('vuelvo a cargar formulario')
      },[click]);
    
    return(
        <form>
            <div className="names">
                <InputText label="Name" helper="Your name" name="firstName"
                        value={values.firstName}  change={handleChange}
                        messageError={errors.firstName}
                />
                
               
                <InputText label="Last Name"  helper="Your last name" name="lastName"
                           value={values.lastName}  change={handleChange}
                            messageError={errors.lastName}
                />

            </div>

            <InputEmail 
                label="Email"  
                helper="Your email"
                value={values.email}
                change={handleChange}
                messageError={errors.email}
            />

            <InputLink 
                label="Image CDN Link" 
                helper="Your image link"
                value={values.url}
                change={handleChange}
                messageError={errors.url}
            />

            <button type="submit" onClick={handleClick} >Submit</button>

        </form>
    )
    
}

export default Form;