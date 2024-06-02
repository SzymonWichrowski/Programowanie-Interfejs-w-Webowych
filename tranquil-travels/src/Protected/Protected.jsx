import { UserAuth } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {

    const { user } = UserAuth();

    if (!user) {
        return <Navigate to='/'></Navigate>
    }

    return children;
};

export default Protected