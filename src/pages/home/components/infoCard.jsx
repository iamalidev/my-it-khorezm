/* eslint-disable react/jsx-key */
import {
  BgBookmarkIcon,
  BgLampIcon,
  BgTickIcon,
  BookmarkIcon,
  LampIcon,
  TickIcon,
} from "@/assets/icons";
import { infoData } from "@/utils/data";

function InfoCard() {
  return (
    <>
      {infoData.map((el) => {
        return (
          <div className="info-card" key={el.id}>
            <span className="info-card__bg-img">
              {el.id === 0 && <BgTickIcon />}
              {el.id === 1 && <BgLampIcon />}
              {el.id === 2 && <BgBookmarkIcon />}
            </span>
            <div className="info-card__icon">
              {el.id === 0 && <TickIcon />}
              {el.id === 1 && <LampIcon />}
              {el.id === 2 && <BookmarkIcon />}
            </div>

            <div>
              <p className="info-card__number">{el.number}</p>
              <p className="info-card__text">{el.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default InfoCard;
