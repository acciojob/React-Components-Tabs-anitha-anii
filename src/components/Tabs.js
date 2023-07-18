import React, { useState } from "react";
import '../styles/App.css';

const Tab = ({ name, activeTab, setActiveTab }) => {
  const isActive = activeTab === name;

  const handleClick = () => {
    setActiveTab(name);
  };

  return (
    <div
      className={`tab ${isActive ? "active" : ""}`}
      id={`${name}-Tab`}
      data-testid={`${name}-Tab`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="tabs">
      <Tab name="Home" activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tab name="About" activeTab={activeTab} setActiveTab={setActiveTab} />
      <Tab name="Features" activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="viewport">Pages Go Here</div>
    </div>
  );
};

export default Tabs;
