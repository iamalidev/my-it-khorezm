/* eslint-disable react/prop-types */
import SmallTitle from "@/components/smallTitle";
import { ArrowIcon } from "@/assets/icons";
import { useToggle } from "@/utils/helpers";

const Accordion = ({ content, title }) => {
  const [isToggled, toggle] = useToggle();

  return (
    <details className="accordion-cources">
      <summary className="accordion-cources__title">
        <SmallTitle text={title} />
        <div className="accordion-cources__title-left">
          <p className="accordion-cources__data">10/110</p>

          <span
            onClick={toggle}
            className="accordion-cources__title-icon"
            style={{ transform: `rotateZ(${isToggled ? 90 : -90}deg)` }}
          >
            <span
              style={{
                display: "flex",
                transform: `translateX(${isToggled ? 2 : 1}px)`,
              }}
            >
              <ArrowIcon color="#fff" size={32} scale={0.9} />
            </span>
          </span>
        </div>
      </summary>
      <div className="accordion-cources__content">{content}</div>
    </details>
  );
};

export default Accordion;
