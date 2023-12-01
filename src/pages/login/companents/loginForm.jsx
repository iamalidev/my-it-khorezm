import { useContext } from "react";
import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import { usePostRequest } from "@/hooks/request";
import { UserContext } from "@/context/userContext";
import { loginUrl } from "@/utils/urls";

const LoginForm = () => {
    const loginRequest = usePostRequest({ url: loginUrl });
    const { setUser } = useContext(UserContext);
    const { loading } = loginRequest;

    const handleSubmit = async (value) => {
        const { response } = await loginRequest.request({
            data: { username: value.username, password: value.password },
        });

        if (response.token) {
            setUser(true);
            localStorage.setItem("token", response.token);
        } else {
            message.error("Login yoki parol xato kiritildi");
        }
    };
    return (
        <Form
            autoSave='username'
            className='login__form_wrapper'
            autoComplete='off'
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
            layout='vertical'
        >
            <Form.Item
                name='username'
                label='Login'
                autoComplete='off'
                rules={[
                    {
                        required: true,
                        message: "Iltimos, foydalanuvchi nomingizni kiriting",
                    },
                    {
                        whitespace: true,
                        message:
                            "Foydalanuvchi nomi bo'sh bo'lishi mumkin emas",
                    },
                ]}
                hasFeedback
            >
                <Input
                    autoFocus={true}
                    className='login__form_input'
                    placeholder='Loginingizni kiriting...'
                />
            </Form.Item>
            <Form.Item
                name='password'
                label='Parol'
                rules={[
                    {
                        required: true,
                        message: "Iltimos, parolingizni kiriting",
                    },
                    {
                        whitespace: true,
                        message: "Parol bo'sh bo'lishi mumkin emas",
                    },
                ]}
                hasFeedback
            >
                <Input.Password
                    className='login__form_input'
                    placeholder='Parolingizni kiriting...'
                />
            </Form.Item>
            <Form.Item
                name='remember'
                valuePropName='checked'
                className='login__form_checkbox'
            >
                <Checkbox>Parolni saqlash</Checkbox>
            </Form.Item>
            <Button className='login__form_btn' htmlType='submit'>
                Kirish
                {loading && <Spin style={{ marginLeft: "10px" }} />}
            </Button>
        </Form>
    );
};

export default LoginForm;
