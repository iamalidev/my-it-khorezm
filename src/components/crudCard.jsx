import { Link } from "react-router-dom";
import { Progress, Avatar } from "antd";
import { crudInfo } from "@/utils/data";
import { Icons } from "@/assets/icons/icons";

function CrudCard() {
    return (
        <>
            {crudInfo.map((el) => {
                return (
                    <Link to='/lessons' key={el.id}>
                        <div
                            className='course-card'
                            style={{ backgroundColor: "#374557" }}
                        >
                            <span className='course-card__bg-img'>
                                {el.bgSvg}
                            </span>

                            <div className='course-card__main-entry'>
                                <p>{el.title}</p>
                            </div>

                            <div className='course-card__info'>
                                <div className='course-card__info-date'>
                                    <Icons.whiteCalendarIcon />
                                    <p>{el.date}</p>
                                </div>

                                <div className='course-card__info-date'>
                                    <Icons.clockIcon />
                                    <p>{el.time}</p>
                                </div>
                            </div>

                            <Progress
                                percent={el.progress}
                                size={[432, 18]}
                                showInfo={false}
                            />

                            <div className='course-card__informant'>
                                <div className='course-card__informant-inner'>
                                    <Icons.circleCheckIcon />
                                    <p>Tugallangan</p>
                                </div>
                            </div>

                            <div className='course-card__info-teacher'>
                                <Avatar
                                    shape='square'
                                    size={35}
                                    src={el.teacherImg}
                                />
                                <p>{el.teacher}</p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </>
    );
}

export default CrudCard;
