
import Navbar from "../components/Navbar";
import { Search, UserPlus, Users } from "lucide-react";

const Network = () => {
  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="card p-6 mb-6">
              <h3 className="font-semibold mb-4">Your Network</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <Users className="w-5 h-5 text-netconnect-blue dark:text-netconnect-mint" />
                  <div className="text-left">
                    <p className="font-medium">Connections</p>
                    <span className="text-sm text-gray-500">486 people</span>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <UserPlus className="w-5 h-5 text-netconnect-lilac" />
                  <div className="text-left">
                    <p className="font-medium">Pending Invites</p>
                    <span className="text-sm text-gray-500">12 requests</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your network..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-netconnect-blue dark:focus:ring-netconnect-mint"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="card p-4">
                  <div className="flex items-start gap-4">
                    <img
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">John Smith</h4>
                      <p className="text-sm text-gray-500 mb-2">Senior Developer at TechCorp</p>
                      <button className="btn-secondary text-sm w-full">Connect</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
