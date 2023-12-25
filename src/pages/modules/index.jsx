import { useState, useEffect } from "react";
import { moduleData } from "@/utils/data";
import { GreenBtn } from "@/components/index";
import { ProccessCard } from "./components/index";
import { Icons } from "@/assets/icons/icons";

const Modules = () => {
    const [icon, setIcon] = useState("");

    useEffect(() => {
        if (moduleData.map((el) => el.condition) === "done") {
            setIcon(<Icons.smileIcon />);
        } else {
            setIcon(<Icons.platteIcon />);
        }
    }, []);

    return (
        <div className='modules_page'>
            <div className='modules'>
                {moduleData.map((el) => {
                    return (
                        <div
                            key={el.id}
                            style={{
                                filter: `${
                                    el.condition == "lock"
                                        ? "grayscale(100%)"
                                        : "grayscale(0%)"
                                }`,
                                outline: `${
                                    el.condition == "progress"
                                        ? "3px solid #166199"
                                        : "0px"
                                }`,
                                outlineOffset: `${
                                    el.condition == "progress" ? "4px" : "0px"
                                }`,
                                backgroundColor: `${
                                    el.condition == "lock" ? "#DFDFDF" : "#FFF"
                                }`,
                                cursor: `${
                                    el.condition == "lock"
                                        ? "not-allowed"
                                        : "auto"
                                }`,
                            }}
                            className='module'
                        >
                            {icon}
                            <div className='module_main'>
                                <div className='module_info'>
                                    <p className='module_title'>{el.module}</p>
                                    <p className='module_task'>{el.task}</p>
                                </div>

                                <p className='module_text'>{el.text}</p>
                            </div>

                            {el.condition == "done" ? (
                                <Icons.greenTickIcon
                                    color='#166199'
                                    size='30'
                                />
                            ) : el.condition == "progress" ? (
                                <GreenBtn
                                    text='Davom ettirish'
                                    padding='12px 25px'
                                    link='/tests'
                                />
                            ) : (
                                <Icons.lockIcon
                                    style={{
                                        boxShadow:
                                            "3px 3px 8px 0px rgba(200, 200, 200, 0.20)",
                                    }}
                                />
                            )}
                        </div>
                    );
                })}
            </div>

            <ProccessCard />
        </div>
    );
};

export default Modules;
