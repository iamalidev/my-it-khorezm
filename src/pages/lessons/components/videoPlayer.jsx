/* eslint-disable react/prop-types */
import { useState } from "react";
import { Divider, Select } from "antd";
import DropdownApp from "./dropdown";
import { Icons } from "@/assets/icons/icons";

const VideoPlayer = ({
    tabs,
    activeTab,
    videoRef,
    handleToggle,
    toggle,
    isModalOpen,
}) => {
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [scale, setScale] = useState(0);
    const [value, setValue] = useState(1);
    const [hover, setHover] = useState(false);
    const [reverse, setReverse] = useState(false);
    const { Option } = Select;

    const handleSelectChange = (value) => {
        setValue(value);
        videoRef.current.playbackRate = value;
    };

    const handleChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            videoRef.current.requestFullscreen();
        }
    };

    const handleTimeUpdate = () => {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        const progressPercentage = (currentTime / duration) * 100;
        setProgress(progressPercentage);
        setCurrentTime(currentTime);
        setDuration(duration);
    };

    const handleProgressBarClick = (e) => {
        const progressBar = e.currentTarget;
        const clickPosition =
            e.clientX - progressBar.getBoundingClientRect().left;
        const progressBarWidth = progressBar.clientWidth;
        const clickPercentage = (clickPosition / progressBarWidth) * 100;

        if (clickPercentage <= progress) {
            setProgress(clickPercentage);
            const newTime = (clickPercentage / 100) * videoRef.current.duration;
            videoRef.current.currentTime = newTime;
        }
    };

    document.addEventListener("keydown", (el) => {
        if (el.keyCode == 70) {
            handleFullScreen();
        } else if (el.keyCode == 82) {
            if (videoRef.current) {
                videoRef.current.currentTime -= 1;
                setReverse(true);

                setTimeout(() => {
                    setReverse(false);
                }, 1500);
            }
        }
    });

    const convertTime = (seconds) => {
        return `${Math.floor(seconds / 3600)}:${Math.floor(
            (seconds % 3600) / 60
        )}:${seconds % 60}`;
    };

    window.addEventListener("keydown", function (e) {
        if (e.key === " " || e.code === 32) {
            e.preventDefault();
            handleToggle();
        }
    });

    return (
        <div
            className='player__container'
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
        >
            <video
                className='video__player'
                onTimeUpdate={handleTimeUpdate}
                src={tabs[activeTab].content}
                ref={videoRef}
                type='video/mp4'
            >
                Your browser does not support the video tag.
            </video>
            <div
                className='player__controls'
                style={{ opacity: `${hover ? 1 : 0}` }}
            >
                <DropdownApp />
                <div className='main__control'>
                    {reverse ? (
                        <Icons.reverseIcon />
                    ) : toggle ? (
                        <Icons.circlePauseIcon
                            style={{ cursor: "pointer" }}
                            onClick={handleToggle}
                        />
                    ) : (
                        <Icons.circlePlayIcon
                            style={{ cursor: "pointer" }}
                            onClick={handleToggle}
                        />
                    )}
                </div>
                <div
                    className='player__navigations'
                    style={{ transform: `translateY(${hover ? 0 : 200}px)` }}
                >
                    <div className='navigation__left'>
                        <button
                            className='navigation__button'
                            style={{ paddingInline: "10px" }}
                            onClick={handleToggle}
                        >
                            {toggle ? (
                                <Icons.miniPauseIcon />
                            ) : (
                                <Icons.miniPlayIcon />
                            )}
                        </button>

                        <div className='navigation__data'>
                            {convertTime(Math.round(currentTime.toFixed(2)))} /{" "}
                            {convertTime(Math.round(duration.toFixed(2)))}
                        </div>
                    </div>

                    <div className='navigation__right'>
                        <div
                            className='volume__control'
                            onMouseEnter={() => setScale(1)}
                            onMouseLeave={() => setScale(0)}
                        >
                            <button
                                className='navigation__button volume__button'
                                style={{
                                    transform: `translateX(${
                                        scale == 1 ? 0 : 130
                                    }px)`,
                                    transition: "0.3s",
                                    zIndex: "10",
                                }}
                                onClick={() => {
                                    volume == 0 ? setVolume(0.5) : setVolume(0);
                                }}
                            >
                                {volume == 0 ? (
                                    <Icons.muteIcon />
                                ) : (
                                    <Icons.volumeIcon />
                                )}
                            </button>

                            <input
                                style={{
                                    transform: `scaleX(${scale})`,
                                    transition: "0.2s",
                                }}
                                type='range'
                                min='0'
                                max='1'
                                step='0.1'
                                value={volume}
                                onChange={handleChange}
                            />
                        </div>

                        <Select
                            placement='topLeft'
                            suffixIcon={null}
                            onChange={handleSelectChange}
                            value={value}
                            style={{ width: "63px" }}
                            dropdownRender={(menu) => (
                                <div>
                                    {menu}
                                    <Divider style={{ margin: "0" }} />
                                </div>
                            )}
                        >
                            {[0.5, 1, 1.5, 2].map((item) => (
                                <Option key={item} className='speed__option'>
                                    {item}
                                </Option>
                            ))}
                        </Select>

                        <button
                            className='navigation__button'
                            onClick={handleFullScreen}
                        >
                            <Icons.fullScreen />
                        </button>
                    </div>
                </div>
                <div>
                    <div
                        className='progress__bar'
                        onClick={handleProgressBarClick}
                        style={{
                            transform: `translateY(${hover ? 0 : 200}px)`,
                        }}
                    >
                        <div
                            className='progress__thumb'
                            style={{ width: `${progress}%` }}
                        >
                            <div
                                className='progress__item'
                                style={{
                                    right: `${
                                        currentTime == 0 ? "-17px" : "0px"
                                    }`,
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
