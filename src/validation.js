function validation(data){
  let errors = {};
  
  let email = data.email ;
  let password = data.password;
  
  if (!email?.match(/^[^@\s]{1,35}@[^@\s]+\.[^@\s]+$/)) {
    errors.email = 'El email no es valido'
  }
  
  if (!password || !password.match(/^(?=.*[a-zA-Z])(?=.*\d).{6,10}$/)) {
    errors.password = 'El password no es valido'
  } 

  return errors;
}

export default validation;