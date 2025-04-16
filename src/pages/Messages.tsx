
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Search, Send } from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark">
      <Navbar />
      <div className="container mx-auto py-6">
        <div className="flex h-[calc(100vh-10rem)] gap-6">
          <div className="w-1/3 flex flex-col">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-netconnect-blue dark:focus:ring-netconnect-mint"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg mb-2 transition-colors ${
                    selectedChat === i ? "bg-gray-50 dark:bg-gray-800" : ""
                  }`}
                  onClick={() => setSelectedChat(i)}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/150?img=${i}`}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">Sarah Parker</h4>
                      <p className="text-sm text-gray-500">Sure, that works for me!</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="w-2/3 flex flex-col">
            {selectedChat ? (
              <>
                <div className="card p-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/150?img=${selectedChat}`}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-medium">Sarah Parker</h4>
                      <p className="text-sm text-gray-500">Online</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 card p-4 mb-4 overflow-y-auto">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <img
                        src={`https://i.pravatar.cc/150?img=${selectedChat}`}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                        <p>Hi, are you available for a quick call today?</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 justify-end">
                      <div className="bg-netconnect-blue dark:bg-netconnect-mint text-white rounded-lg p-3 max-w-[80%]">
                        <p>Sure, that works for me!</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card p-4">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 p-2 focus:outline-none focus:ring-2 focus:ring-netconnect-blue dark:focus:ring-netconnect-mint"
                    />
                    <button className="btn-primary p-2">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="card p-6 text-center">
                <p className="text-gray-500">Select a conversation to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
