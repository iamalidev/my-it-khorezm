import { Link } from "react-router-dom";
import { ArrowIcon } from "@/assets/icons";

function DetailedBtn({ link }) {
  return (
    <Link className="detailed__btn" to={link}>
      Batafsil Jadval <ArrowIcon color="#374557" size={30} scale={1} />
    </Link>
  );
}

export default DetailedBtn;
