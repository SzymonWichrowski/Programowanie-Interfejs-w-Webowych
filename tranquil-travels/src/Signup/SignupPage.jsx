import { useState } from "react";
import LoginModal from "../LoginModal/LoginModal";
import Navbar from "../Navbar/Navbar";
import Title from "../Title/Title";
import { UserAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";


function SignupPage() {

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password);
            navigate('/home');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }

    }

    return(
        <>
            <Navbar></Navbar>
            <Title title='Sign up'></Title> 
            <form className="signup-forms" onSubmit={handleSubmit}>
                <div className="signup-form">
                    <label className="text-small">Email:</label>
                    <input type="email" className='signup-input' placeholder="your email" onChange={(e) => setEmail(e.target.value) }></input>
                </div>
                <br></br>
                <div className="signup-form">
                    <label className="text-small">Password:</label>
                    <input type="password" className='signup-input' onChange={(e) => setPassword(e.target.value) }></input>
                </div>
                <br></br>
                <br></br>
                <div className="signup-buttons">
                    <button type='reset' className='button secondary'>Cancel</button>
                    <button type='submit' className='button secondary'>Sign Up</button>
                </div>
            </form>
            <LoginModal></LoginModal>
        </>
    );
}

export default SignupPage