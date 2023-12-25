import { Link } from "react-router-dom";
import { Progress, Avatar } from "antd";
import { courseInfo } from "@/utils/data";
import { Icons } from "@/assets/icons/icons";

const CourseCard = () => {
    return (
        <>
            {courseInfo.map(
                ({
                    id,
                    bgSvg,
                    title,
                    date,
                    time,
                    progress,
                    teacher,
                    teacherImg,
                    path,
                }) => {
                    return (
                        <Link to={`/my-courses/${path}`} key={id}>
                            <div className='course-card'>
                                <span className='course-card__bg-img'>
                                    {bgSvg}
                                </span>

                                <div className='course-card__main-entry'>
                                    <p>{title}</p>
                                </div>

                                <div className='course-card__info'>
                                    <div className='course-card__info-date'>
                                        <Icons.whiteCalendarIcon />
                                        <p>{date}</p>
                                    </div>

                                    <div className='course-card__info-date'>
                                        <Icons.clockIcon />
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
                                        <Icons.retryIcon />
                                        <p>Jarayonda</p>
                                    </div>

                                    <p>{`${
                                        progress >= 100 ? "10" : progress / 10
                                    }/10`}</p>
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

export default CourseCard;
