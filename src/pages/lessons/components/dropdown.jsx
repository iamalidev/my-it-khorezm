import { Dropdown, Space } from "antd";
import { EscIcon, FIcon, InfoIcon, RIcon, SpaceIcon } from "@/assets/icons";

const items = [
  {
    key: "1",
    label: (
      <div>
        <FIcon />
        __________Go to fullScreen mode.
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div>
        <RIcon />
        __________Restart the video.
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div>
        <EscIcon />
        __________Exit from fullScreen mode.
      </div>
    ),
  },
  {
    key: "4",
    label: (
      <div>
        <SpaceIcon />
        __________Pause/Play the video.
      </div>
    ),
  },
];

const DropdownApp = () => (
  <Dropdown
    className="dropdown__app"
    menu={{
      items,
    }}
    placement="bottomLeft"
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space className="navigation__button">
        <InfoIcon />
      </Space>
    </a>
  </Dropdown>
);
export default DropdownApp;
