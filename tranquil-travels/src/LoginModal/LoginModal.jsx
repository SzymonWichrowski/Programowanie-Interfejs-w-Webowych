import { GoogleButton } from 'react-google-button';
import {closeModal} from '../scripts/modals.js'
import { UserAuth } from '../Context/AuthContext.jsx';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginModal() {

    const {googleSignIn, signIn, user} = UserAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleGoogleSignIn = async () => {

        try {
            await googleSignIn();
            navigate('/home');
        } catch (error) {
            console.log(error)
        }
    }

    const handleSignIn = async (e) => {
        email.preventDefault();
        setError('');
        try {
            await signIn(email, password);
            navigate('/home');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }

    useEffect(() => {
        if (user) {
            closeModal('login-modal');
        }
    }, [user]);

    return(
        <dialog className='modal' id="login-modal">
            <div className="modal-heading">
                <p className="title-large">Login</p>
                <img src="/Cross.svg" className='pointer' onClick={() => closeModal('login-modal')}></img>
            </div>
            <br></br>
            <p className="text-small modal-text">Login with e-mail and password.</p>
            <br></br>
            <form className="modal-forms" onSubmit={handleSignIn}>
                <div className="modal-form">
                    <label className="text-small">Email:</label>
                    <input type='email' className='modal-input' placeholder="your email" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <br></br>
                <div className="modal-form">
                    <label className="text-small">Password:</label>
                    <input type="password" className='modal-input' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <br></br>
                <div className="modal-buttons">
                    <button type='reset' className='button primary' onClick={() => closeModal('login-modal')}>Cancel</button>
                    <button type='submit' className='button primary'>Log in</button>
                </div>
            </form>
            <br></br>
            <p className="text-small modal-text">Don't have an account yet? <Link to='/signup'>Sign up!</Link>
            <br></br> 
            Or you can just use google authorization instead:</p>
            <br></br>
            <div className='google-button'>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
            
        </dialog>
    );
}

export default LoginModal