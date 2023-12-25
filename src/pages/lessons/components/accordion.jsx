/* eslint-disable react/prop-types */
import { useState } from "react";
import SmallTitle from "@/components/smallTitle";
import { Icons } from "@/assets/icons/icons";

const Accordion = ({ content, title }) => {
    const [icon, setIcon] = useState(true);

    const handleClick = () => {
        setIcon(!icon);
    };

    return (
        <details className='accordion-cources' onClick={handleClick}>
            <summary className='accordion-cources__title'>
                <SmallTitle text={title} />
                <div className='accordion-cources__title-left'>
                    <p className='accordion-cources__data'>10/110</p>

                    <span className='accordion-cources__title-icon'>
                        {icon == true ? (
                            <Icons.topArrowIcon
                                style={{ transform: "rotateZ(180deg)" }}
                            />
                        ) : (
                            <Icons.topArrowIcon />
                        )}
                    </span>
                </div>
            </summary>
            <div className='accordion-cources__content'>{content}</div>
        </details>
    );
};

export default Accordion;
