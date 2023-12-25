/* eslint-disable react/prop-types */
import { Icons } from "@/assets/icons/icons";

const Tab = ({ tabs, setActiveTab, activeTab, handleToggle, toggle }) => {
    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className='tab__con'>
            {tabs.map((tab, index) => (
                <button
                    style={{
                        padding: `${tab.condition ? "20px 25px" : "26px 25px"}`,
                        cursor: `${tab.condition ? "not-allowed" : "pointer"}`,
                    }}
                    key={index}
                    className={`tab__body ${
                        activeTab === index ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(index)}
                    disabled={tab.condition}
                >
                    <div className='tab__inner'>
                        {activeTab === index ? (
                            <button onClick={handleToggle}>
                                {toggle ? (
                                    <Icons.pauseIcon />
                                ) : (
                                    <Icons.playIcon />
                                )}
                            </button>
                        ) : tab.condition ? (
                            <Icons.circleLockIcon />
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
