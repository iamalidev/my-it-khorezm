import { Icons } from "@/assets/icons/icons";
import { LoginForm } from "./companents/index";

const LoginPage = () => {
    return (
        <div className='login__page'>
            <div className='login'>
                <div className='login__form'>
                    <div className='login__info'>
                        <h1 className='login__title'>IT Park Xorazm</h1>
                        <p className='login__text'>
                            #Sening IT Karyerang shu yerdan boshlanadi
                        </p>
                    </div>
                    <LoginForm />
                </div>
                <div className='login__img'>
                    <div className='login__img_wrapper'>
                        <Icons.loginLogo />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
