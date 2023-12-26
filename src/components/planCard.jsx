import { Avatar } from "antd";
import { planData } from "@/utils/data";
import { resultColors } from "@/utils/helpers";
import { avatarImg } from "@/assets/images";
import { CalendarIcon, ClockIcon } from "@/assets/icons";

const PlanCard = () => {
  return (
    <>
      {planData.map((el) => {
        return (
          <div
            style={{
              borderLeft: `17px solid ${
                resultColors[el.id % resultColors.length]
              }`,
            }}
            className={`plan-card`}
            key={el.id}
          >
            <h1 className="plan-card__title">{el.title}</h1>

            <div className="plan-card__info">
              <div className="plan-card__info-date">
                <CalendarIcon color="#a098ae" size={19} />
                <p>{el.date}</p>
              </div>

              <span className="plan-card__info-line"></span>

              <div className="plan-card__info-date">
                <ClockIcon color="#a098ae" size={19} />
                <p>{el.time}</p>
              </div>
            </div>

            <div className="plan-card__info-date">
              <Avatar shape="square" size={35} src={avatarImg} />
              <p>{el.teacher}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlanCard;
