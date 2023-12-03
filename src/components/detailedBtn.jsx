import { Link } from "react-router-dom";
import { DarkBlueArrowIcon } from "@/assets/icons";

function DetailedBtn({ link }) {
    return (
        <Link className='detailed__btn' to={link}>
            Batafsil Jadval <DarkBlueArrowIcon />
        </Link>
    );
}

export default DetailedBtn;
