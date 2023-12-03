import { useEffect, useState } from "react";
import { Avatar } from "antd";
import { planData } from "@/utils/data";
import { avatarImg } from "@/assets/images";
import { GrayCalendarIcon, GrayClockIcon } from "@/assets/icons";

const PlanCard = () => {
    const [border, setBorder] = useState([]);

    useEffect(() => {
        const randomColors = ["#fec64f", "#166199", "#374557"].sort(
            () => 0.5 - Math.random()
        );
        setBorder(randomColors);
    }, []);

    return (
        <>
            {planData.map(({ id, title, date, time, teacher }) => {
                return (
                    <div
                        key={id}
                        style={{
                            borderLeft: `17px solid ${
                                border[id % border.length]
                            }`,
                        }}
                        className={`plan-card`}
                    >
                        <h1 className='plan-card__title'>{title}</h1>

                        <div className='plan-card__info'>
                            <div className='plan-card__info-date'>
                                <GrayCalendarIcon />
                                <p>{date}</p>
                            </div>

                            <span className='plan-card__info-line'></span>

                            <div className='plan-card__info-date'>
                                <GrayClockIcon />
                                <p>{time}</p>
                            </div>
                        </div>

                        <div className='plan-card__info-date'>
                            <Avatar shape='square' size={35} src={avatarImg} />
                            <p>{teacher}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default PlanCard;
