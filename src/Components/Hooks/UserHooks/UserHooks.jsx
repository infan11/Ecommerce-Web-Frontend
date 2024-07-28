import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const userHooks = () => {
    const useAuth = useContext(AuthContext);
    return useAuth
};

export default userHooks;