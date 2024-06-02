import { GoogleButton } from 'react-google-button';
import {closeModal} from '../scripts/modals.js'
import { UserAuth } from '../Context/AuthContext.jsx';
import { useEffect } from 'react';

function LoginModal() {

    const {googleSignIn, user} = UserAuth();

    const handleGoogleSignIn = async () => {

        try {
            await googleSignIn();
        } catch (error) {
            console.log(error)
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
            <p className="text-small modal-text">Login with e-mail and password...</p>
            <br></br>
            <form className="modal-forms">
                <div className="modal-form">
                    <label className="text-small">Email:</label>
                    <input className='modal-input' id='email' placeholder="your email"></input>
                </div>
                <br></br>
                <div className="modal-form">
                    <label className="text-small">Password:</label>
                    <input type="password" className='modal-input' id='password'></input>
                </div>
                <br></br>
                <div className="modal-buttons">
                    <button type='reset' className='button primary' onClick={() => closeModal('login-modal')}>Cancel</button>
                    <button type='submit' className='button primary'>Log in</button>
                </div>
            </form>
            <br></br>
            <p className="text-small modal-text">or use google authorization instead:</p>
            <br></br>
            <div className='google-button'>
                <GoogleButton onClick={handleGoogleSignIn} />
            </div>
            
        </dialog>
    );
}

export default LoginModal