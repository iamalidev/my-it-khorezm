import { useRef, useState } from "react";
import { Progress } from "antd";
import Accordion from "./components/accordion";
import { VidStack } from "./components/video";
import SmallTitle from "@/components/smallTitle";
import Tab from "./components/tab";
import VideoPlayer from "./components/videoPlayer";

const Lessons = () => {
  const [toggle, setToggle] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);
  let process = 20;

  const tabs = [
    {
      title: "Kirish",
      duration: "1:00",
      condition: false,
      content:
        "https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4",
    },
    {
      title: "Ishni Boshlash",
      duration: "1:00",
      condition: false,
      content:
        "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4",
    },
    {
      title: "Asboblar",
      duration: "1:00",
      condition: true,
      content: "https://media-files.vidstack.io/720p.mp4",
    },
  ];

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const handleToggle = () => {
    toggle ? pauseVideo() : playVideo();
    setToggle(!toggle);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "64px" }}>
        <div className="tab-content">
          <p className="tab__title">Web va Grafik dizayn</p>

          <VideoPlayer
            tabs={tabs}
            activeTab={activeTab}
            handleToggle={handleToggle}
            toggle={toggle}
            videoRef={videoRef}
            isModalOpen={isModalOpen}
          />
          <VidStack setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>

                                        <div className='content-variants__wrapper'>
                                            {button.tab
                                                .find(
                                                    (tab) =>
                                                        tab.id === activeTab
                                                )
                                                ?.options.map(
                                                    (option, index) => (
                                                        <button
                                                            key={index}
                                                            className='content__variant'
                                                            onClick={() =>
                                                                handleOptionSelect(
                                                                    index
                                                                )
                                                            }
                                                            style={{
                                                                backgroundColor:
                                                                    selectedOption ===
                                                                    index
                                                                        ? index ===
                                                                          button.tab.find(
                                                                              (
                                                                                  tab
                                                                              ) =>
                                                                                  tab.id ===
                                                                                  activeTab
                                                                          )
                                                                              ?.answer
                                                                            ? "#166199"
                                                                            : "#FC6B57"
                                                                        : "white",
                                                                color:
                                                                    selectedOption ===
                                                                    index
                                                                        ? "#fff"
                                                                        : "#000",
                                                            }}
                                                        >
                                                            {option}
                                                            {selectedOption ===
                                                            index ? (
                                                                index ===
                                                                button.tab.find(
                                                                    (tab) =>
                                                                        tab.id ===
                                                                        activeTab
                                                                )?.answer ? (
                                                                    <GreenTickIcon
                                                                        size='20px'
                                                                        color='#fff'
                                                                    />
                                                                ) : (
                                                                    <ErrorIcon />
                                                                )
                                                            ) : (
                                                                <div className='content-variant__item'></div>
                                                            )}
                                                        </button>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                </>
                            ) : null
                        )}
                    </div>
                )}
            </div>
            <div className='tab-bottom__content'>
                <div className='timer__wrapper'>
                    <CountdownCircleTimer
                        size={100}
                        key={key}
                        isPlaying
                        duration={10}
                        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                        colorsTime={[7, 5, 2, 0]}
                        onComplete={() => {
                            setKey((prevKey) => prevKey + 1);
                            handleNextTaskTab();
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
                    >
                        <GradientArrowIcon
                            style={{ transform: "rotate(180deg)" }}
                        />{" "}
                        Prev
                    </button>
                    <button
                        className='task-navigation__button'
                        onClick={handleNextTaskTab}
                        disabled={activeTab === data[data.length - 1].id}
                    >
                        Next <GradientArrowIcon />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Tests;
