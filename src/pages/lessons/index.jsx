import { useRef, useState } from "react";
import { Progress } from "antd";
import { SmallTitle } from "@/components/index";
import { Accordion, VidStack, VideoPlayer, Tab } from "./components/index";
import { tabs } from "@/utils/data";

const Lessons = () => {
    const [toggle, setToggle] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const videoRef = useRef(null);
    let process = 20;

    const playVideo = () => {
        videoRef.current.play();
    };

    const pauseVideo = () => {
        videoRef.current.pause();
    };

    const handleToggle = () => {
        setToggle(!toggle);
        if (toggle == true) {
            pauseVideo();
        } else {
            playVideo();
        }
    };

    return (
        <>
            <div style={{ display: "flex", gap: "64px" }}>
                <div className='tab-content'>
                    <p className='tab__title'>Web va Grafik dizayn</p>

                    <VideoPlayer
                        tabs={tabs}
                        activeTab={activeTab}
                        handleToggle={handleToggle}
                        toggle={toggle}
                        videoRef={videoRef}
                    />
                    <VidStack />
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
