const validation = (values) => {
    let errors = {};

    if(!values.firstName){
        errors.firstName="Name is required."
    }
    if(!values.lastName){
        errors.lastName="Last Name is required."
    }
    if(!values.email){
        errors.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email has invalid format."
    }
    if(!values.url){
        errors.url="Image CDN link is required."
    }

    return(errors)
}

export default validation;