/* eslint-disable react/prop-types */
import { useState } from "react";
import { Tabs } from "antd";
import { Information, Homework, Test, ClosedFiles, Files } from "./video/index";
import { Icons } from "@/assets/icons/icons";

export function VidStack({ setIsModalOpen, isModalOpen }) {
    const [lock, setLock] = useState(true);

    return (
        <div className='video'>
            <div className='tab-box'>
                <Tabs className='tab' defaultActiveKey='tab1'>
                    <Tabs tab={<span>Malumotlar</span>} key='tab1'>
                        <Information />
                    </Tabs>

                    <Tabs
                        tab={
                            <span className='tab-guide'>
                                {lock == true ? (
                                    <>
                                        Fayllar <Icons.tabLockIcon />
                                    </>
                                ) : (
                                    <>Fayllar</>
                                )}
                            </span>
                        }
                        key='tab2'
                    >
                        {lock == true ? (
                            <ClosedFiles
                                setIsModalOpen={setIsModalOpen}
                                isModalOpen={isModalOpen}
                                setLock={setLock}
                            />
                        ) : (
                            <Files />
                        )}
                    </Tabs>

                    <Tabs
                        tab={
                            <span className='tab-guide'>
                                {lock == true ? (
                                    <>
                                        Uyga vazifa <Icons.tabLockIcon />
                                    </>
                                ) : (
                                    <>Uyga vazifa</>
                                )}
                            </span>
                        }
                        disabled={lock == true ? true : false}
                        key='tab3'
                    >
                        <Homework />
                    </Tabs>

                    <Tabs
                        tab={
                            <span className='tab-guide'>
                                {lock == true ? (
                                    <>
                                        Sinov testi <Icons.tabLockIcon />
                                    </>
                                ) : (
                                    <>Sinov testi</>
                                )}
                            </span>
                        }
                        key='tab4'
                        disabled={lock == true ? true : false}
                    >
                        <Test />
                    </Tabs>
                </Tabs>
            </div>
        </div>
    );
}

export default VidStack;
