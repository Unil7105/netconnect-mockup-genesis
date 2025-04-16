
import { Bell, Menu, MessageSquare, Search, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-netconnect-dark-card shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-netconnect-blue dark:text-netconnect-mint font-sora font-bold text-xl">
                Net<span className="text-netconnect-lilac">Connect</span>
              </span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <a href="#" className="nav-link font-medium">Home</a>
              <a href="#" className="nav-link font-medium">Network</a>
              <a href="#" className="nav-link font-medium">Jobs</a>
              <a href="#" className="nav-link font-medium">Messages</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center pr-2">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-3 pr-8 w-48 focus:w-64 transition-all duration-300 bg-transparent border-none outline-none text-sm"
              />
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            
            <button className="p-2 rounded-full relative bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center w-3 h-3 bg-netconnect-coral rounded-full"></span>
            </button>
            
            <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <MessageSquare className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
            
            <ThemeToggle />
            
            <button className="p-0.5 rounded-full bg-gradient-to-r from-netconnect-blue to-netconnect-lilac">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
                alt="User" 
                className="w-8 h-8 avatar border-2 border-white dark:border-netconnect-dark" 
              />
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-netconnect-dark-card border-t border-gray-100 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="nav-link block px-3 py-2 rounded-md font-medium">Home</a>
            <a href="#" className="nav-link block px-3 py-2 rounded-md font-medium">Network</a>
            <a href="#" className="nav-link block px-3 py-2 rounded-md font-medium">Jobs</a>
            <a href="#" className="nav-link block px-3 py-2 rounded-md font-medium">Messages</a>
          </div>
          <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800 flex items-center space-x-3">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" 
              alt="User" 
              className="w-8 h-8 avatar" 
            />
            <div>
              <div className="text-sm font-medium">Alex Johnson</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">View Profile</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
