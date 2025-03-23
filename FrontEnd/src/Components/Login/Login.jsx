import { useState } from 'react';
import { Link } from 'react-router-dom';

import { validateEmail } from '../Validation/ValidEmail';
import { validatePassword } from '../Validation/ValidPassword';

import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate email and password on submit
        const emailValid = validateEmail(email);
        const passwordValid = validatePassword(password);

        setEmailError(emailValid ? '' : 'Invalid email address');
        setPasswordError(passwordValid ? '' : 'Password must be at least 8 characters');

        if (!emailValid || !passwordValid) {
            console.log('Form has errors');
            return;
        }

        console.log('Form submitted successfully');
    };

    return (
        <div className='loginContainer'>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='login-email-text'>Email</label>
                    <input type="email"
                        className='login-email-input' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    {emailError && <span>{emailError}</span>}
                </div>
                <div>
                    <label className='login-password-text'>Password</label>
                    <input type="password" 
                        className='login-password-input'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    {passwordError && <span>{passwordError}</span>}
                </div>
                <button type="submit">Login</button>
                <Link to="/signup">
                    <button type="button">SignUp</button>
                </Link>
            </form>
        </div>
    );
};

export default Login;
