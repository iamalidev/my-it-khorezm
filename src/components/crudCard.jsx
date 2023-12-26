import { Link } from "react-router-dom";
import { Progress, Avatar } from "antd";
import { CalendarIcon, CircleCheckIcon, ClockIcon, CourseCardBg } from "@/assets/icons";
import { crudInfo } from "@/utils/data";

function CrudCard() {
  return (
    <>
      {crudInfo.map((el) => {
        return (
          <Link to="/lessons" key={el.id}>
            <div className="course-card" style={{ backgroundColor: "#374557" }}>
              <span className="course-card__bg-img">{<CourseCardBg />}</span>

              <div className="course-card__main-entry">
                <p>{el.title}</p>
              </div>

              <div className="course-card__info">
                <div className="course-card__info-date">
                  <CalendarIcon color="#fff" size={18} />
                  <p>{el.date}</p>
                </div>

                <div className="course-card__info-date">
                  <ClockIcon color="#fff" size={18} />
                  <p>{el.time}</p>
                </div>
              </div>

              <Progress
                percent={el.progress}
                size={[432, 18]}
                showInfo={false}
              />

              <div className="course-card__informant">
                <div className="course-card__informant-inner">
                  <CircleCheckIcon />
                  <p>Tugallangan</p>
                </div>

                <p>{}</p>
              </div>

              <div className="course-card__info-teacher">
                <Avatar shape="square" size={35} src={el.teacherImg} />
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
