import { Dropdown, Space } from "antd";
import { Icons } from "@/assets/icons/icons";

const items = [
    {
        key: "1",
        label: (
            <div>
                <Icons.fIcon />
                __________Go to fullScreen mode.
            </div>
        ),
    },
    {
        key: "2",
        label: (
            <div>
                <Icons.RIcon />
                __________Restart the video.
            </div>
        ),
    },
    {
        key: "3",
        label: (
            <div>
                <Icons.escIcon />
                __________Exit from fullScreen mode.
            </div>
        ),
    },
    {
        key: "4",
        label: (
            <div>
                <Icons.spaceIcon />
                __________Pause/Play the video.
            </div>
        ),
    },
];

const DropdownApp = () => (
    <Dropdown
        className='dropdown__app'
        menu={{
            items,
        }}
        placement='bottomLeft'
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space className='navigation__button'>
                <Icons.infoIcon />
            </Space>
        </a>
    </Dropdown>
);
export default DropdownApp;
