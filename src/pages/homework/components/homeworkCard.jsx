import { Link } from "react-router-dom";
import { Icons } from "@/assets/icons/icons";

function HomeworkCard() {
    return (
        <div className='homework-card'>
            <Icons.greenPentulIcon color='#166199' />

            <div className='homework-inner'>
                <div className='homework-info'>
                    <span className='homework-info_title'>
                        Web va Grafik dizayn
                    </span>
                    <p className='homework-info_subtitle'>
                        O`qituvchi: Humoyun madrahimov
                    </p>
                </div>

                <Link to='/' className='homework__btn'>
                    Darsni ko`rish
                </Link>
            </div>
        </div>
    );
}

export default HomeworkCard;
