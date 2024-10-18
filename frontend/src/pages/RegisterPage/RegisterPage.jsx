import React from 'react'
import { Link } from 'react-router-dom'
import './RegisterPage.scss'

const RegisterPage = () => {
    return (
        <div className='register-page'>
            <form className='register-form'>
                <h1>Register user</h1>
                <div className='form-group'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' required />
                </div>
                <div className='buttons'>
                    <button type='submit' className='custom-button'>Register</button>
                    <button className='custom-button'><Link to='/'>Home</Link></button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
