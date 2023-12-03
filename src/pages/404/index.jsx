import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className='notfound-content'>
            404
            <Link to='/' className='notfound-content_link'>
                <button className='notfound-content_btn'>
                    Bosh sahifaga qaytish
                </button>
            </Link>
        </div>
    );
};

export default PageNotFound;
