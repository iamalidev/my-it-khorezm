/* eslint-disable react/prop-types */
import { CircleLockIcon, PauseIcon, PlayIcon } from "@/assets/icons";

const Tab = ({ tabs, setActiveTab, activeTab, isToggled, toggle }) => {
  
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab__con">
      {tabs.map((tab, index) => (
        <button
          style={{
            padding: `${tab.condition ? "20px 25px" : "26px 25px"}`,
            cursor: `${tab.condition ? "not-allowed" : "pointer"}`,
          }}
          key={index}
          className={`tab__body ${activeTab === index ? "active" : ""}`}
          onClick={() => handleTabClick(index)}
          disabled={tab.condition}
        >
          <div className="tab__inner">
            {activeTab === index ? (
              <button onClick={toggle}>
                {isToggled ? <PauseIcon /> : <PlayIcon />}
              </button>
            ) : tab.condition ? (
              <CircleLockIcon />
            ) : (
              ""
            )}
            {tab.title}
          </div>
          {tab.duration}
        </button>
      ))}
    </div>
  );
};

export default Tab;
