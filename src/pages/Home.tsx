
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark">
      <Navbar />
      <div className="container mx-auto py-6">
        <h2 className="text-xl font-semibold mb-6">Welcome Back, Sarah!</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent Activity</h3>
                <button className="text-sm text-netconnect-blue dark:text-netconnect-mint hover:underline">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-netconnect-mint rounded-full"></div>
                  <div>
                    <p className="text-sm">Alex Johnson viewed your profile</p>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="w-2 h-2 bg-netconnect-lilac rounded-full"></div>
                  <div>
                    <p className="text-sm">New job match: UX Designer at TechCorp</p>
                    <span className="text-xs text-gray-500">5 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Your Network Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Profile Views</span>
                  <span className="font-medium">245</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Post Impressions</span>
                  <span className="font-medium">1.2k</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Connection Requests</span>
                  <span className="font-medium">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
