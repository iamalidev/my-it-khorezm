import { PayCard } from "./components/index";

const MyPayments = () => {
    return (
        <div className='pay-card__wrapper'>
            {Array.from({ length: 7 }).map((_, id) => (
                <PayCard key={id} />
            ))}
        </div>
    );
};

export default MyPayments;
