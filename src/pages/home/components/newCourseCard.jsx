import { Avatar } from "antd";
import { courseInfo } from "@/utils/data";
import { CalendarIcon, ClockIcon, CourseCardBg } from "@/assets/icons";

function NewCourseCard() {
  return (
    <>
      {courseInfo.map((el) => {
        return (
          <div className="new-course__card" key={el.id}>
            <span className="course-card__bg-img">{<CourseCardBg />}</span>

            <div className="course-card__main-entry">
              <p>{el.title}</p>
            </div>

            <div className="new-course__card-info">
              <div className="course-card__info-date">
                <CalendarIcon color="#fff" size={18} />
                <p>{el.date}</p>
              </div>

              <div className="course-card__info-date">
                <ClockIcon color="#fff" size={18} />
                <p>{el.time}</p>
              </div>
            </div>

            <div className="course-card__info-teacher">
              <Avatar shape="square" size={35} src={el.teacherImg} />
              <p>{el.teacher}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default NewCourseCard;
