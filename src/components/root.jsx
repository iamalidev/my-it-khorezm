import Header from "./header";
import Menu from "./menu";
import { Content } from "./index";

const Root = () => {
    return (
        <div className='wrapper'>
            <Menu />
            <div className='wrapper-content'>
                <Header />
                <Content />
            </div>
        </div>
    );
};

export default Root;
