import { Link } from "react-router-dom";

const GreenBtn = ({ padding, link, text }) => {
    return (
        <Link to={link} className='green_btn' style={{ padding: `${padding}` }}>
            {text}
        </Link>
    );
};

export default GreenBtn;
