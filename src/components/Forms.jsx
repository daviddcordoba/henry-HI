import React, { useState } from 'react'
import validation from '../validation'

const Forms = ({login}) => {
    
    const [errors, setErrors] = useState({});

    const [ userData, setUserData] = useState({
        email: '',
        password: ''
    })
    
    function handleChange (e){
        let name = e.target.name;
        let value = e.target.value;
        setErrors(validation({...userData,[name]:value}))
        setUserData({
            ...userData,
            [name] : value
        })
    }
    
    function handleSubmit(e){
        e.preventDefault();
        login(userData)
    }
    
    return (
        <div>
            <form >
                <label htmlFor='email'>Email:</label>
                <input 
                    value={userData.email} 
                    type='text' 
                    name='email' 
                    onChange={handleChange}/>
                <br/>{errors.email && <span>Email no valido</span>}
                <br/><label htmlFor='password'>Password:</label>
                <input 
                    value={userData.password} 
                    type='text' 
                    name='password' 
                    onChange={handleChange}/>
                <br/>{errors.password && <span>Contrasenia no valida</span>}
            </form>
                <button  type='submit' onClick={handleSubmit}>Enviar</button>
        </div>
    )
}

export default Forms