import { useContext } from "react";
import { UserContext } from "@/service/userContext";
import Root from "@/components/root";
import LoginPage from "./login";

const CheckUser = () => {
    const { user } = useContext(UserContext);

    return <>{user ? <Root /> : <LoginPage />}</>;
};

export default CheckUser;
