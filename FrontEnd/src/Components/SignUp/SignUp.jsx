import { useState, useEffect } from 'react';
import { validateEmail } from '../Validation/ValidEmail';
import { validatePassword } from '../Validation/ValidPassword';

import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {
        if (email) {
            setEmailError(validateEmail(email) ? '' : 'Invalid email address');
        }

        if (password) {
            setPasswordError(validatePassword(password) ? '' : 'Password must be at least 8 characters');
        }

    }, [email, password]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (emailError || passwordError) {
            console.log('Form cannot be submitted due to validation errors.');
            return;
        }

        console.log('Form submitted successfully');
    };

    return (
        <div className='signupContainer'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='signup-email-text'>Email</label>
                    <input type="email"
                        className='signup-email-input' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    {emailError && <span>{emailError}</span>}
                </div>
                <div>
                    <label className='signup-password-text'>Password</label>
                    <input type="password" 
                        className='signup-password-input'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    {passwordError && <span>{passwordError}</span>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;