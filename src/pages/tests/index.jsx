import {
  ArrowIcon,
  ErrorIcon,
  GradientArrowIcon,
  GreenTickIcon,
} from "@/assets/icons";
import { useState } from "react";
import Timer from "./components/timer";
import { testData } from "@/utils/data";

const Tests = () => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [activeTab, setActiveTab] = useState(1);
  const [seconds, setSeconds] = useState(10);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
    setActiveTab(1);
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleNextTaskTab = () => {
    testData.map((el) =>
      el.tab.map((el) => {
        if (activeTab < el.id) {
          setActiveTab(activeTab + 1);
          setSeconds(10);
        }
      })
    );
  };

  const handlePrevTaskTab = () => {
    testData.map((el) =>
      el.tab.map((el) => {
        if (activeTab > el.id) {
          setActiveTab(activeTab - 1);
          setSeconds(10);
        }
      })
    );
  };

  const activeTabDirection = (number) => {
    document.querySelector(".lesson-buttons__wrapper").scrollLeft =
      document.querySelector(".lesson-button__active").offsetLeft - number;
  };

  return (
    <>
      <div className="tab__container">
        <div className="lesson-content__wrapper">
          <button
            className="lesson-navigation__button"
            onClick={() => {
              testData.map((el) => {
                if (activeButton > el.id) {
                  setActiveButton(activeButton - 1);
                }
              });
              activeTabDirection(1200);
            }}
          >
            <ArrowIcon color="#166199" size={32} scale={1.4} />
          </button>
          <div className="lesson-buttons__wrapper">
            {testData.map((button) => (
              <button
                key={button.id}
                className={
                  activeButton === button.id && !button.disabled
                    ? "lesson-button__active"
                    : "lesson-button"
                }
                onClick={() => handleButtonClick(button.id)}
                disabled={button.disabled}
              >
                {button.id + 1}-Dars
              </button>
            ))}
          </div>
          <button
            className="lesson-navigation__button"
            onClick={() => {
              testData.map((el) => {
                if (activeButton < el.id) {
                  setActiveButton(activeButton + 1);
                }
              });
              activeTabDirection(700);
            }}
          >
            <span>
              <ArrowIcon color="#166199" size={32} scale={1.4} />
            </span>
          </button>
        </div>
        {activeTab >= testData[activeButton].tab.length + 1 ? (
          <p>{JSON.stringify(selectedOption)}</p>
        ) : (
          <div className="tab-content__container">
            {testData.map((button) =>
              activeButton === button.id ? (
                <div key={button.id}>
                  <div className="tab-sub__buttons">
                    {button.tab.map((tab) => (
                      <button
                        key={tab.id}
                        className={`sub-button ${
                          activeTab === tab.id ? "active" : ""
                        }`}
                        onClick={() => {
                          handleTabClick(tab.id);
                          setSeconds(10);
                        }}
                      >
                        {tab.id}-Savol
                      </button>
                    ))}
                  </div>

                  <div className="tab__content">
                    <div className="tab-question__wrapper">
                      <p className="content__question">
                        {
                          button.tab.find((tab) => tab.id === activeTab)
                            ?.question
                        }{" "}
                        ?
                      </p>

                      <div className="content__desk"></div>
                    </div>

                    <div className="content-variants__wrapper">
                      {button.tab
                        .find((tab) => tab.id === activeTab)
                        ?.options.map((option, index) => (
                          <button
                            key={index}
                            className="content__variant"
                            onClick={() => {
                              if (
                                selectedOption.length >=
                                testData[activeButton].tab.length
                              ) {
                                console.log("error");
                              } else {
                                setTimeout(handleNextTaskTab(), 1000);
                                setSelectedOption((prevMassive) => [
                                  ...prevMassive,
                                  index,
                                ]);
                              }
                            }}
                            style={{
                              backgroundColor:
                                selectedOption[activeTab] === index
                                  ? index === button.tab[activeTab].answer
                                    ? "#FC6B57"
                                    : "#166199"
                                  : "white",
                              color:
                                selectedOption[activeTab] === index
                                  ? "#fff"
                                  : "#000",
                            }}
                          >
                            {option}
                            {selectedOption[activeTab] === index ? (
                              index ===
                              button.tab.find((tab) => tab.id === activeTab)
                                ?.answer ? (
                                <GreenTickIcon color="#fff" size={10} />
                              ) : (
                                <ErrorIcon />
                              )
                            ) : (
                              <div className="content-variant__item"></div>
                            )}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
      <div className="tab-bottom__content">
        <Timer
          activeTab={activeTab}
          testData={testData}
          activeButton={activeButton}
          seconds={seconds}
          setSeconds={setSeconds}
          handleNextTaskTab={handleNextTaskTab}
        />

        <div className="task-navigation__wrapper">
          <button
            className="task-navigation__button"
            onClick={handlePrevTaskTab}
          >
            <GradientArrowIcon style={{ transform: "rotate(180deg)" }} /> Prev
          </button>
          <button
            className="task-navigation__button"
            onClick={handleNextTaskTab}
            disabled={activeTab === testData[activeButton].tab.length + 1}
          >
            Next <GradientArrowIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Tests;
