import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "@/constants/routes";
import Lazy from "./Lazy";

const Content = () => {
    return (
        <div className='wrapper-content_inside'>
            <div className='container'>
                <Suspense fallback={<Lazy />}>
                    <Routes>
                        {routes.map((el) => (
                            <Route
                                key={el.path}
                                path={el.path}
                                element={el.components}
                            />
                        ))}
                    </Routes>
                </Suspense>
            </div>
        </div>
    );
};

export default Content;
