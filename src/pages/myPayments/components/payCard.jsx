/* eslint-disable react/prop-types */
import { ArrowIcon, BookMediaIcon, GreenPentulIcon } from "@/assets/icons";
import { useToggle } from "@/utils/helpers";

function PayCard({ resultColors }) {
  const [isToggled, toggle] = useToggle();

  return (
    <div className="pay-card">
      <div className="pay-card__top">
        <GreenPentulIcon color={resultColors} />

        <div
          className="pay-card__top-title"
          style={{ backgroundColor: `${resultColors}` }}
        >
          Web va Grafik dizayn
        </div>
      </div>

      <div
        className="pay-card__middle"
        style={{
          display: `${isToggled ? "flex" : "none"}`,
          flexDirection: "column",
        }}
      >
        <div className="item">
          <div className="item-inner">
            <BookMediaIcon color={resultColors} />

            <p
              className="item-inner__title"
              style={{ color: `${resultColors}` }}
            >
              1-oy uchun to`lov
            </p>
          </div>

          <button
            className="item-btn"
            style={{
              color: `${resultColors}`,
              border: `1px solid ${resultColors}`,
            }}
          >
            To`langan
          </button>
        </div>

        <div
          className="line"
          style={{ backgroundColor: `${resultColors}` }}
        ></div>

        <div className="item">
          <div className="item-inner">
            <BookMediaIcon color={resultColors} />

            <p
              className="item-inner__title"
              style={{ color: `${resultColors}` }}
            >
              1-oy uchun to`lov
            </p>
          </div>

          <button
            className="item-btn"
            style={{
              color: `${resultColors}`,
              border: `1px solid ${resultColors}`,
            }}
          >
            To`langan
          </button>
        </div>

        <div
          className="line"
          style={{ backgroundColor: `${resultColors}` }}
        ></div>

        <div className="item">
          <div className="item-inner">
            <BookMediaIcon color={resultColors} />

            <p
              className="item-inner__title"
              style={{ color: `${resultColors}` }}
            >
              1-oy uchun to`lov
            </p>
          </div>

          <button
            className="item-btn"
            style={{
              color: `${resultColors}`,
              border: `1px solid ${resultColors}`,
            }}
          >
            To`langan
          </button>
        </div>
      </div>

      <div className="pay-card__bottom">
        <button className="pay-card__bottom-btn" onClick={toggle}>
          <span style={{ transform: `rotateZ(${isToggled ? -90 : 90}deg)` }}>
            <ArrowIcon color={resultColors} size={32} scale={1.2} />
          </span>
        </button>

        <div className="pay-card__inner">
          <p
            className="pay-card__inner-price"
            style={{ color: `${resultColors}` }}
          >
            400 000 so’m /oy
          </p>
          <button
            className="pay-card__inner-btn"
            style={{ backgroundColor: resultColors }}
          >
            Tolash
          </button>
        </div>
      </div>
    </div>
  );
}

export default PayCard;
