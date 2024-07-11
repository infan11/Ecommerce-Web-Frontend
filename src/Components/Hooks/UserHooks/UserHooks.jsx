import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserHooks = () => {
    const useAuth = useContext(AuthContext);
    return useAuth
};

export default UserHooks;