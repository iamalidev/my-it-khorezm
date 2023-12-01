import { Link } from "react-router-dom";
import { Progress, Avatar } from "antd";
import { CircleCheckIcon, ClockIcon, WhiteCalendarIcon } from "@/assets/icons";
import { crudInfo } from "@/utils/data";

const CrudCard = () => {
    return (
        <>
            {crudInfo.map(
                ({
                    id,
                    bgSvg,
                    title,
                    date,
                    time,
                    progress,
                    teacher,
                    teacherImg,
                }) => {
                    return (
                        <Link to='/lessons' key={id}>
                            <div className='course-card background-dark__blue'>
                                <span className='course-card__bg-img'>
                                    {bgSvg}
                                </span>

                                <div className='course-card__main-entry'>
                                    <p>{title}</p>
                                </div>

                                <div className='course-card__info'>
                                    <div className='course-card__info-date'>
                                        <WhiteCalendarIcon />
                                        <p>{date}</p>
                                    </div>

                                    <div className='course-card__info-date'>
                                        <ClockIcon />
                                        <p>{time}</p>
                                    </div>
                                </div>

                                <Progress
                                    percent={progress}
                                    size={[432, 18]}
                                    showInfo={false}
                                />

                                <div className='course-card__informant'>
                                    <div className='course-card__informant-inner'>
                                        <CircleCheckIcon />
                                        <p>Tugallangan</p>
                                    </div>
                                </div>

                                <div className='course-card__info-teacher'>
                                    <Avatar
                                        shape='square'
                                        size={35}
                                        src={teacherImg}
                                    />
                                    <p>{teacher}</p>
                                </div>
                            </div>
                        </Link>
                    );
                }
            )}
        </>
    );
};

export default CrudCard;
