import { useEffect, useRef, useState } from "react";
import { Progress } from "antd";
import { SmallTitle } from "@/components/index";
import { Accordion, VidStack, Tab, VideoPlayer } from "./components/index";
import { useParams } from "react-router-dom";
import { courseInfo } from "@/utils/data";

const Lessons = () => {
    const { path } = useParams();
    const [toggle, setToggle] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [lesson, setLesson] = useState([]);
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

    useEffect(() => {
        setLesson(courseInfo.find((el) => el.path == path));
    }, [path]);

    console.log(lesson);
    return (
        <>
            <div style={{ display: "flex", gap: "64px" }}>
                <div className='tab-content'>
                    <p className='tab__title'>{lesson?.title}</p>

                    <VideoPlayer
                        tabs={tabs}
                        activeTab={activeTab}
                        handleToggle={handleToggle}
                        toggle={toggle}
                        videoRef={videoRef}
                        isModalOpen={isModalOpen}
                    />
                    <VidStack
                        setIsModalOpen={setIsModalOpen}
                        isModalOpen={isModalOpen}
                    />
                </div>

                <div className='accordion__wrapper'>
                    <div className='accordion-process'>
                        <SmallTitle text='Jarayon' />
                        <Progress
                            className='accordion_item'
                            showInfo={false}
                            strokeColor='#166199'
                            strokeWidth={16}
                            percent={process}
                            size={[390, 16]}
                        />

                        <div className='accordion-process__bottom'>
                            <h2 className='accordion-process__bottom-text'>
                                Web va Grafik dizayn
                            </h2>

                            <p className='accordion-process__bottom-count'>
                                {process >= 100 ? "10" : process / 1}/110
                            </p>
                        </div>
                    </div>

                    <Accordion
                        title={"Video Kurslar"}
                        content={
                            <Tab
                                handleToggle={handleToggle}
                                toggle={toggle}
                                tabs={tabs}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        }
                    />

                    <Accordion title={"Audiolar"} content={"Nothing"} />
                    <Accordion title={"Modullar"} content={"Nothing"} />
                    <Accordion title={"Viktorina"} content={"Nothing"} />
                </div>
            </div>
        </>
    );
};

export default Lessons;
