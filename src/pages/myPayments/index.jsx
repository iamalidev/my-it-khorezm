import PayCard from "./components/payCard";
import { resultColors } from "@/utils/helpers";

function MyPayments() {
  const payCardStorage = [];

  for (let i = 0; i < 8; i++) {
    payCardStorage.push(<PayCard resultColors={resultColors[1]} />);
  }

  return <div className="pay-card__wrapper">{payCardStorage}</div>;
}

export default MyPayments;
