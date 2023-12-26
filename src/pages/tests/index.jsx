import { useEffect, useState } from "react";
import { testData } from "@/utils/data";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Icons } from "@/assets/icons/icons";

import { testBg } from "@/assets/images";
const Tests = () => {
    const activeTabButton = document.querySelector(".lesson-button__active");
    const tabContainer = document.querySelector(".lesson-buttons__wrapper");
    const [selectedOption, setSelectedOption] = useState(null);
    const [activeButton, setActiveButton] = useState(1);
    const [activeTab, setActiveTab] = useState(1);
    const [key, setKey] = useState(0);
    const [answers, setAnswers] = useState(
        JSON.parse(localStorage.getItem("testAnswers")) ?? []
    );

    const handleOptionSelect = (optionIndex) => {
        setSelectedOption(optionIndex);
        setAnswers([
            ...answers,
            {
                id: optionIndex,
                answers: optionIndex,
            },
        ]);
    };

    useEffect(() => {
        localStorage.setItem("testAnswers", JSON.stringify(answers));
    }, [answers]);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
        setActiveTab(buttonId);
    };

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleNextTaskTab = () => {
        if (activeTab <= testData.length) {
            setActiveTab(activeTab + 1);
            selectedOption(null);
        }
    };

    const handlePrevTaskTab = () => {
        if (activeTab !== 0) {
            setActiveTab(activeTab - 1);
        }
    };

    const activeTabDirection = (number) => {
        tabContainer.scrollLeft = activeTabButton.offsetLeft - number;
    };

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const remainingSeconds = remainingTime % 60;
        const result = `${minutes}:${
            remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
        }`;

        return (
            <p className='timer__second' role='timer' aria-live='assertive'>
                {result}
            </p>
        );
    };

    return (
        <>
            <div className='tab__container'>
                <div className='lesson-content__wrapper'>
                    <button
                        className='lesson-navigation__button'
                        onClick={() => {
                            testData.map((el) => {
                                if (activeButton > el.id) {
                                    setActiveButton(activeButton - 1);
                                }
                            });
                            activeTabDirection(1200);
                        }}
                        disabled={activeButton === 1}
                    >
                        <Icons.bigBlueArrowIcon />
                    </button>
                    <div className='lesson-buttons__wrapper'>
                        {testData.map((button) => (
                            <button
                                key={button.id}
                                className={
                                    activeButton === button.id &&
                                    !button.disabled
                                        ? "lesson-button__active"
                                        : "lesson-button"
                                }
                                onClick={() => handleButtonClick(button.id)}
                                disabled={button.disabled}
                            >
                                {button.id}-Dars
                            </button>
                        ))}
                    </div>
                    <button
                        className='lesson-navigation__button'
                        onClick={() => {
                            testData.map((el) => {
                                if (activeButton < el.id) {
                                    setActiveButton(activeButton + 1);
                                }
                            });
                            activeTabDirection(700);
                        }}
                    >
                        <Icons.bigBlueArrowIcon
                            style={{
                                transform:
                                    "rotateZ(180deg) translateY(-3px) translateX(-2px)",
                            }}
                        />
                    </button>
                </div>

                <div className='tab-content__container'>
                    {testData.map((button) =>
                        activeButton === button.id ? (
                            <>
                                <div
                                    key={button.id}
                                    className='tab-sub__buttons'
                                >
                                    {button.tab.map((tab) => (
                                        <div
                                            key={tab.id}
                                            className={`sub-button ${
                                                activeTab === tab.id
                                                    ? "active"
                                                    : ""
                                            }`}
                                            onClick={() =>
                                                handleTabClick(tab.id)
                                            }
                                        >
                                            {tab.id}-Savol
                                        </div>
                                    ))}
                                </div>

                                <div className='tab__content'>
                                    <div className='tab-question__wrapper'>
                                        <p className='content__question'>
                                            {
                                                button.tab.find(
                                                    (tab) =>
                                                        tab.id === activeTab
                                                )?.question
                                            }
                                            ?
                                        </p>

                                        <div className='content__desk'>
                                            <img src={testBg} alt='test-bg' />
                                        </div>
                                    </div>

                                    <div className='content-variants__wrapper'>
                                        {button.tab
                                            .find((tab) => tab.id === activeTab)
                                            ?.options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    className='content__variant'
                                                    onClick={() =>
                                                        handleOptionSelect(
                                                            index
                                                        )
                                                    }
                                                    style={{
                                                        background:
                                                            selectedOption ==
                                                                index &&
                                                            "#166199",
                                                        color:
                                                            selectedOption ==
                                                                index && "#fff",
                                                    }}
                                                >
                                                    {option}
                                                    <span>
                                                        {selectedOption ==
                                                            index && (
                                                            <Icons.greenTickIcon />
                                                        )}
                                                    </span>
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            </>
                        ) : null
                    )}
                </div>
            </div>
            <div className='tab-bottom__content'>
                <div className='timer__wrapper'>
                    <CountdownCircleTimer
                        size={100}
                        key={key}
                        isPlaying
                        duration={300}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[7, 5, 2, 0]}
                        onComplete={() => {
                            console.log("hii");
                        }}
                    >
                        {children}
                    </CountdownCircleTimer>
                    <p className='timer__info'>Tugash vaqti</p>
                </div>

                <div className='task-navigation__wrapper'>
                    <button
                        className='task-navigation__button'
                        onClick={handlePrevTaskTab}
                        disabled={activeTab == 1}
                    >
                        <Icons.gradientArrowIcon
                            style={{ transform: "rotate(180deg)" }}
                        />
                        Prev
                    </button>
                    <button
                        className='task-navigation__button'
                        onClick={handleNextTaskTab}
                    >
                        Next <Icons.gradientArrowIcon />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Tests;
