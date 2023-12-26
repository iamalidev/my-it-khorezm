/* eslint-disable react/prop-types */
import { useState } from "react";
import { Tabs } from "antd";
import { Information, Homework, Test, ClosedFiles, Files } from "./video/index";
import { Icons } from "@/assets/icons/icons";

export function VidStack({ setIsModalOpen, isModalOpen }) {
    return (
        <div className='video'>
            <div className='tab-box'>
                <Tabs className='tab' defaultActiveKey='tab1'>
                    <Tabs tab={<span>Malumotlar</span>} key='tab1'>
                        <Information />
                    </Tabs>

                    <Tabs
                        tab={<span className='tab-guide'>Fayllar</span>}
                        key='tab2'
                    >
                        <Files />
                    </Tabs>

                    <Tabs
                        tab={<span className='tab-guide'>Uyga vazifa</span>}
                        key='tab3'
                    >
                        <Homework />
                    </Tabs>

                    <Tabs
                        tab={<span className='tab-guide'>Sinov testi</span>}
                        key='tab4'
                    >
                        <Test />
                    </Tabs>
                </Tabs>
            </div>
        </div>
    );
}

export default VidStack;
