import { Icons } from "@/assets/icons/icons";
import { LoginForm } from "./companents/index";

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className='login-page_layer page-layer'>
                <Icons.laptopIcon className='page-layer_icon' />

                <div className='container'>
                    <div className='page-layer_content'>
                        <Icons.whiteLogo />
                        <LoginForm />
                        <p className='page-layer_content-copyright'>
                            {new Date().getFullYear()}-yil Praktikum Academy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
