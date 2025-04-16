
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Search, Send, Phone, Video, MoreHorizontal, Image, Paperclip, Smile, Mic, Filter, Check, Clock, Plus, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const conversations = [
  {
    id: 1,
    name: "Sarah Parker",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Sure, that works for me!",
    time: "2m ago",
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Can we discuss the project timeline?",
    time: "1h ago",
    unread: 0,
    online: true
  },
  {
    id: 3,
    name: "Jessica Williams",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Thanks for the introduction!",
    time: "3h ago",
    unread: 0,
    online: false
  },
  {
    id: 4,
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "Let's sync up tomorrow morning",
    time: "Yesterday",
    unread: 0,
    online: false
  }
];

const messages = [
  {
    id: 1,
    sender: "Sarah Parker",
    text: "Hi, are you available for a quick call today?",
    time: "10:32 AM",
    isUser: false
  },
  {
    id: 2,
    sender: "You",
    text: "Sure, that works for me! What time were you thinking?",
    time: "10:35 AM",
    isUser: true
  },
  {
    id: 3,
    sender: "Sarah Parker",
    text: "Great! How about 3:00 PM your time? I'd like to discuss the design revisions for the project.",
    time: "10:36 AM",
    isUser: false
  },
  {
    id: 4,
    sender: "You",
    text: "3:00 PM works perfectly. I'll send you a calendar invite with the meeting details.",
    time: "10:38 AM",
    isUser: true
  },
  {
    id: 5,
    sender: "Sarah Parker",
    text: "Sounds good, looking forward to it!",
    time: "10:39 AM",
    isUser: false
  }
];

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messageText, setMessageText] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // In a real app, we would send the message to the backend
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark">
      <Navbar />
      <div className="container mx-auto py-6 px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Messages</h2>
          <p className="text-gray-500 dark:text-gray-400">Connect with your professional network</p>
        </div>
        
        <div className="flex h-[calc(100vh-12rem)] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm">
          {/* Conversations Sidebar */}
          <div className="w-full sm:w-1/3 md:w-1/4 bg-white dark:bg-netconnect-dark-card border-r border-gray-200 dark:border-gray-800 flex flex-col">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Inbox</h3>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setFilterOpen(!filterOpen)}>
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
              
              {filterOpen && (
                <div className="mb-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <h4 className="text-xs font-medium mb-2">FILTER MESSAGES</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer bg-netconnect-blue/10 text-netconnect-blue dark:text-netconnect-mint border-netconnect-blue/20 dark:border-netconnect-mint/20">
                      <Check className="mr-1 h-3 w-3" /> Unread
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      <Clock className="mr-1 h-3 w-3" /> Recent
                    </Badge>
                  </div>
                </div>
              )}
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-netconnect-blue dark:focus:ring-netconnect-mint text-sm"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                    selectedChat === conversation.id ? "bg-gray-50 dark:bg-gray-800" : ""
                  }`}
                  onClick={() => setSelectedChat(conversation.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={conversation.avatar} />
                        <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      {conversation.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-netconnect-dark-card"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-medium truncate">{conversation.name}</h4>
                        <span className="text-xs text-gray-500">{conversation.time}</span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                    </div>
                    {conversation.unread > 0 && (
                      <Badge className="ml-2 bg-netconnect-coral">{conversation.unread}</Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <Button className="w-full bg-netconnect-blue hover:bg-netconnect-blue/90 text-white">
                <Plus className="mr-2 h-4 w-4" /> New Message
              </Button>
            </div>
          </div>
          
          {/* Chat Area */}
          <div className="hidden sm:flex sm:w-2/3 md:w-3/4 flex-col bg-gray-50 dark:bg-gray-900">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 bg-white dark:bg-netconnect-dark-card border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={conversations.find(c => c.id === selectedChat)?.avatar} />
                      <AvatarFallback>SP</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{conversations.find(c => c.id === selectedChat)?.name}</h4>
                      <p className="text-xs text-green-500">Online</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-gray-500">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-gray-500">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 text-gray-500">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`flex gap-3 ${message.isUser ? 'justify-end' : ''}`}
                      >
                        {!message.isUser && (
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={conversations.find(c => c.id === selectedChat)?.avatar} />
                            <AvatarFallback>SP</AvatarFallback>
                          </Avatar>
                        )}
                        <div className={`max-w-[70%] ${message.isUser ? 'bg-netconnect-blue text-white' : 'bg-white dark:bg-netconnect-dark-card'} rounded-2xl px-4 py-3 shadow-sm`}>
                          <p className="text-sm">{message.text}</p>
                          <span className={`text-[10px] ${message.isUser ? 'text-blue-200' : 'text-gray-500'} block text-right mt-1`}>
                            {message.time}
                            {message.isUser && <Check className="inline ml-1 h-3 w-3" />}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Message Input */}
                <div className="p-4 bg-white dark:bg-netconnect-dark-card border-t border-gray-200 dark:border-gray-800">
                  <Card className="p-1">
                    <CardContent className="p-0">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <textarea
                            placeholder="Type a message..."
                            className="w-full border-none focus:outline-none focus:ring-0 resize-none py-2 px-3 max-h-20 text-sm"
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                              }
                            }}
                            rows={1}
                          />
                        </div>
                        <div className="flex items-center gap-1 px-2">
                          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-gray-500">
                            <Paperclip className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-gray-500">
                            <Image className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-gray-500">
                            <Smile className="h-4 w-4" />
                          </Button>
                          <Button 
                            className="ml-1 h-9 w-9 rounded-full bg-netconnect-blue hover:bg-netconnect-blue/90 p-0"
                            onClick={handleSendMessage}
                          >
                            <Send className="h-4 w-4 text-white" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                  <MessageSquare className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Your Messages</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md">
                  Select a conversation or start a new one to begin messaging
                </p>
                <Button className="mt-6 bg-netconnect-blue hover:bg-netconnect-blue/90 text-white">
                  <Plus className="mr-2 h-4 w-4" /> New Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
