
import { useState } from "react";
import Navbar from "../components/Navbar";
import ProfileScreen from "../components/ProfileScreen";
import NetworkingFeed from "../components/NetworkingFeed";
import JobBoard from "../components/JobBoard";

const Tabs = {
  PROFILE: "profile",
  FEED: "feed",
  JOBS: "jobs",
};

const Index = () => {
  const [activeTab, setActiveTab] = useState(Tabs.PROFILE);

  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark">
      <Navbar />
      
      <div className="container mx-auto py-6">
        <div className="mb-6 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-center sm:justify-start space-x-8 px-4 pb-2">
            <button
              onClick={() => setActiveTab(Tabs.PROFILE)}
              className={`font-work-sans text-sm pb-2 px-1 font-medium border-b-2 transition-colors ${
                activeTab === Tabs.PROFILE
                  ? "border-netconnect-blue dark:border-netconnect-mint text-netconnect-blue dark:text-netconnect-mint"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab(Tabs.FEED)}
              className={`font-work-sans text-sm pb-2 px-1 font-medium border-b-2 transition-colors ${
                activeTab === Tabs.FEED
                  ? "border-netconnect-blue dark:border-netconnect-mint text-netconnect-blue dark:text-netconnect-mint"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
              }`}
            >
              Network Feed
            </button>
            <button
              onClick={() => setActiveTab(Tabs.JOBS)}
              className={`font-work-sans text-sm pb-2 px-1 font-medium border-b-2 transition-colors ${
                activeTab === Tabs.JOBS
                  ? "border-netconnect-blue dark:border-netconnect-mint text-netconnect-blue dark:text-netconnect-mint"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300"
              }`}
            >
              Job Board
            </button>
          </div>
        </div>
        
        {activeTab === Tabs.PROFILE && <ProfileScreen />}
        {activeTab === Tabs.FEED && <NetworkingFeed />}
        {activeTab === Tabs.JOBS && <JobBoard />}
      </div>
    </div>
  );
};

export default Index;
