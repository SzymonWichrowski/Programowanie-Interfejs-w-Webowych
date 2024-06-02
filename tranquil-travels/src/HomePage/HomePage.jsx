import Navbar from "../Navbar/Navbar.jsx";
import Title from "../Title/Title.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import { UserAuth } from "../Context/AuthContext.jsx";

function HomePage() {

    const {user} = UserAuth();

    return(
        <>
            <Navbar></Navbar>
            <Title title='Home'></Title>
            <p className="text">Welcome, {user?.displayName} <br></br> (page available only to logged in users)</p>
            <LoginModal></LoginModal>
        </>
    );
}

export default HomePage