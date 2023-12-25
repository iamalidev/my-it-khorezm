import { Icons } from "@/assets/icons/icons";

const HeroCard = () => {
    return (
        <div className='hero-card'>
            <Icons.bgBookIcon className='hero-card__book' />
            <Icons.bgCalendarIcon className='hero-card__calendar' />
            <Icons.bgCircleIcon className='hero-card__circle' />

            <h2 className='hero-card__title'>
                Hoziroq qoshiling va chegirmaga ega boling 20% gacha vaucher
            </h2>
            <p className='hero-card__text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
            </p>
        </div>
    );
};

export default HeroCard;
