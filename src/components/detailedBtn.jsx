import { Link } from "react-router-dom";
import { DarkBlueArrowIcon } from "@/assets/icons";

const DetailedBtn = ({ link }) => {
    return (
        <Link to={link}>
            <button className='detailed__btn'>
                Batafsil Jadval <DarkBlueArrowIcon />
            </button>
        </Link>
    );
};

export default DetailedBtn;
