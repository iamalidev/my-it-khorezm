import { Route, Routes } from "react-router-dom";
import { routes } from "@/constants/routes";
import Header from "./header";
import Menu from "./menu";

const Root = () => {
    return (
        <div className='wrapper'>
            <Menu />
            <div className='wrapper-content'>
                <Header />
                <div className='wrapper-content_inside'>
                    <div className='container'>
                        <Routes>
                            {routes.map((el) => (
                                <Route
                                    key={el.path}
                                    path={el.path}
                                    element={el.components}
                                />
                            ))}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;
