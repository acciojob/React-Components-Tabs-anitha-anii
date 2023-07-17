import React,{useState} from "react";
import '../styles/App.css';

function App(){
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabs">
      <div
        className={activeTab === 'Home' ? 'tab active' : 'tab'}
        id="Home-tab"
        onClick={() => handleTabClick('Home')}
      >
        Home
      </div>
      <div
        className={activeTab === 'About' ? 'tab active' : 'tab'}
        id="About-tab"
        onClick={() => handleTabClick('About')}
      >
        About
      </div>
      <div
        className={activeTab === 'Features' ? 'tab active' : 'tab'}
        id="Features-tab"
        onClick={() => handleTabClick('Features')}
      >
        Features
      </div>
      <div className="viewport">
        Pages Go Here
      </div>
    </div>
  );
};


export default App;