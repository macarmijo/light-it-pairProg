import React from 'react';
import InputText from './InputText'
import InputEmail from './InputEmail'
import InputLink from './InputLink'
// import {useForm} from '../hooks/useForm'

const Form = () => {

    return(
        <section>
            <div className="names">
                <InputText label="Name" helper="Your name" name="name"/>
                <InputText label="Last Name"  helper="Your last name" name="lastName"/>
            </div>

            <InputEmail label="Email"  helper="Your email"/>
            <InputLink label="Image CDN Link" helper="Your image link"/>

            <button type="submit">Submit</button>
        </section>
    )
    
}

export default Form;