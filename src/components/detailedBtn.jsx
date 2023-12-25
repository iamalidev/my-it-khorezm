import { Icons } from "@/assets/icons/icons";
import { Link } from "react-router-dom";

function DetailedBtn({ link }) {
    return (
        <Link className='detailed-btn' to={link}>
            Batafsil Jadval <Icons.darkBlueArrowIcon />
        </Link>
    );
}

export default DetailedBtn;
