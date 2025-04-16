import { useState } from "react";
import Navbar from "../components/Navbar";
import { Search, Send, Phone, Video, MoreHorizontal, Image, Paperclip, Smile, Mic, Filter, Check, Clock, Plus, ChevronDown, MessageSquare, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Message {
  id: number;
  sender: string;
  text: string;
  time: string;
  isUser: boolean;
  day?: string;
}

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
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Did you see the latest design mockups?",
    time: "Yesterday",
    unread: 3,
    online: false
  },
  {
    id: 6,
    name: "David Kim",
    avatar: "https://i.pravatar.cc/150?img=6",
    lastMessage: "I'll send over the contract details soon",
    time: "2d ago",
    unread: 0,
    online: true
  },
  {
    id: 7,
    name: "Sophia Lee",
    avatar: "https://i.pravatar.cc/150?img=7",
    lastMessage: "Thanks for your feedback on the proposal",
    time: "3d ago",
    unread: 0,
    online: false
  },
  {
    id: 8,
    name: "James Wilson",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Let's schedule a follow-up meeting",
    time: "1w ago",
    unread: 0,
    online: false
  }
];

const messagesData: Record<number, Message[]> = {
  1: [
    {
      id: 1,
      sender: "Sarah Parker",
      text: "Hi, are you available for a quick call today?",
      time: "10:32 AM",
      isUser: false,
      day: "Today"
    },
    {
      id: 2,
      sender: "You",
      text: "Sure, that works for me! What time were you thinking?",
      time: "10:35 AM",
      isUser: true,
      day: "Today"
    },
    {
      id: 3,
      sender: "Sarah Parker",
      text: "Great! How about 3:00 PM your time? I'd like to discuss the design revisions for the project.",
      time: "10:36 AM",
      isUser: false,
      day: "Today"
    },
    {
      id: 4,
      sender: "You",
      text: "3:00 PM works perfectly. I'll send you a calendar invite with the meeting details.",
      time: "10:38 AM",
      isUser: true,
      day: "Today"
    },
    {
      id: 5,
      sender: "Sarah Parker",
      text: "Sounds good, looking forward to it!",
      time: "10:39 AM",
      isUser: false,
      day: "Today"
    },
    {
      id: 6,
      sender: "Sarah Parker",
      text: "Oh, one more thing - could you share the latest mockups before our call? It would help me prepare.",
      time: "10:42 AM",
      isUser: false,
      day: "Today"
    },
    {
      id: 7,
      sender: "You",
      text: "Of course! I'll upload them to our shared drive and send you the link.",
      time: "10:45 AM",
      isUser: true,
      day: "Today"
    }
  ],
  2: [
    {
      id: 1,
      sender: "Alex Johnson",
      text: "Hey, I was looking at the project timeline and I think we might need to adjust some deadlines.",
      time: "09:15 AM",
      isUser: false,
      day: "Today"
    },
    {
      id: 2,
      sender: "You",
      text: "I noticed that too. Which milestones are you concerned about?",
      time: "09:20 AM",
      isUser: true,
      day: "Today"
    },
    {
      id: 3,
      sender: "Alex Johnson",
      text: "Mainly the user testing phase. I think we need at least another week for that, considering the feedback from the stakeholders.",
      time: "09:22 AM",
      isUser: false,
      day: "Today"
    },
    {
      id: 4,
      sender: "You",
      text: "That makes sense. Let me look at how we can adjust the schedule without impacting the final delivery date.",
      time: "09:25 AM",
      isUser: true,
      day: "Today"
    },
    {
      id: 5,
      sender: "Alex Johnson",
      text: "Perfect. Can we discuss the project timeline in more detail soon?",
      time: "09:27 AM",
      isUser: false,
      day: "Today"
    },
    {
      id: 6,
      sender: "You",
      text: "Definitely. I'm free tomorrow afternoon if that works for you?",
      time: "09:30 AM",
      isUser: true,
      day: "Today"
    }
  ],
  3: [
    {
      id: 1,
      sender: "Jessica Williams",
      text: "Hi there! I wanted to thank you for introducing me to the team at InnovateTech. We had a great initial conversation.",
      time: "2:45 PM",
      isUser: false,
      day: "Today"
    },
    {
      id: 2,
      sender: "You",
      text: "That's wonderful to hear! I thought you two would hit it off. How did the meeting go?",
      time: "2:50 PM",
      isUser: true,
      day: "Today"
    },
    {
      id: 3,
      sender: "Jessica Williams",
      text: "It went really well! They're interested in my proposal and we're scheduled for a follow-up next week to discuss details.",
      time: "2:52 PM",
      isUser: false,
      day: "Today"
    },
    {
      id: 4,
      sender: "You",
      text: "That's fantastic news! Let me know if you need any support preparing for the next meeting.",
      time: "2:55 PM",
      isUser: true,
      day: "Today"
    },
    {
      id: 5,
      sender: "Jessica Williams",
      text: "Thanks for the introduction!",
      time: "3:00 PM",
      isUser: false,
      day: "Today"
    }
  ],
  4: [
    {
      id: 1,
      sender: "Michael Chen",
      text: "Hey, I've been reviewing the analytics for the campaign and the numbers look promising!",
      time: "4:15 PM",
      isUser: false,
      day: "Yesterday"
    },
    {
      id: 2,
      sender: "You",
      text: "That's great to hear! Which metrics are performing the best?",
      time: "4:20 PM",
      isUser: true,
      day: "Yesterday"
    },
    {
      id: 3,
      sender: "Michael Chen",
      text: "Click-through rates are exceeding our targets by 15%, and conversion is up by 8% compared to the last campaign.",
      time: "4:25 PM",
      isUser: false,
      day: "Yesterday"
    },
    {
      id: 4,
      sender: "You",
      text: "Excellent! I think our new targeting strategy is paying off. Let's sync up tomorrow morning to discuss how we can leverage this for the upcoming phases.",
      time: "4:30 PM",
      isUser: true,
      day: "Yesterday"
    },
    {
      id: 5,
      sender: "Michael Chen",
      text: "Let's sync up tomorrow morning",
      time: "4:32 PM",
      isUser: false,
      day: "Yesterday"
    }
  ],
  5: [
    {
      id: 1,
      sender: "Emily Rodriguez",
      text: "Hi! I've just shared the latest design mockups with you. Would love your feedback!",
      time: "11:20 AM",
      isUser: false,
      day: "Yesterday"
    },
    {
      id: 2,
      sender: "You",
      text: "Thanks, Emily! I'll take a look and get back to you by EOD.",
      time: "11:25 AM",
      isUser: true,
      day: "Yesterday"
    },
    {
      id: 3,
      sender: "Emily Rodriguez",
      text: "Perfect, no rush. I'm particularly interested in your thoughts on the new navigation system.",
      time: "11:28 AM",
      isUser: false,
      day: "Yesterday"
    },
    {
      id: 4,
      sender: "Emily Rodriguez",
      text: "Also, did you get a chance to review the color palette updates?",
      time: "3:45 PM",
      isUser: false,
      day: "Yesterday"
    },
    {
      id: 5,
      sender: "Emily Rodriguez",
      text: "Did you see the latest design mockups?",
      time: "5:15 PM",
      isUser: false,
      day: "Yesterday"
    }
  ]
};

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(1);
  const [messageText, setMessageText] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log("Sending message:", messageText);
      setMessageText("");
    }
  };

  const getMessagesForSelectedChat = () => {
    if (!selectedChat) return [];
    return messagesData[selectedChat as keyof typeof messagesData] || [];
  };

  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900">
      <Navbar />
      <div className="container mx-auto py-6 px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Messages</h2>
          <p className="text-gray-500 dark:text-gray-400">Connect with your professional network</p>
        </div>
        
        <div className="flex h-[calc(100vh-12rem)] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700/50 shadow-lg backdrop-blur-sm bg-white/5 dark:bg-gray-900/40">
          <div className="w-full sm:w-1/3 md:w-1/4 bg-white/80 dark:bg-gray-900/80 border-r border-gray-200 dark:border-gray-800/50 flex flex-col relative">
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-10 pointer-events-none"></div>
            
            <div className="p-4 border-b border-gray-200 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Inbox</h3>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon-sm" className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
                            <Filter className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-56">
                          <DropdownMenuLabel>Filter Messages</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="cursor-pointer">
                            <Check className="mr-2 h-4 w-4" /> Unread
                          </DropdownMenuItem>
                          <DropdownMenuItem className="cursor-pointer">
                            <Clock className="mr-2 h-4 w-4" /> Recent
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Filter Messages</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              {filterOpen && (
                <div className="mb-3 p-3 bg-gray-50 dark:bg-gray-800/70 rounded-lg">
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
                  className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700/70 focus:outline-none focus:ring-2 focus:ring-netconnect-blue dark:focus:ring-netconnect-mint focus:border-transparent text-sm bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm transition-all"
                />
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700">
              {conversations.length > 0 ? (
                conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    className={`w-full text-left p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border-b border-gray-100 dark:border-gray-800/30 ${
                      selectedChat === conversation.id ? "bg-gray-50 dark:bg-gray-800/70 border-l-4 border-l-netconnect-blue dark:border-l-netconnect-mint" : ""
                    }`}
                    onClick={() => setSelectedChat(conversation.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex-shrink-0">
                        <Avatar className="h-10 w-10 ring-2 ring-white/10 dark:ring-gray-800/70 hover:ring-netconnect-blue/20 dark:hover:ring-netconnect-mint/20 transition-all">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {conversation.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white dark:border-gray-900 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className={`font-medium truncate ${conversation.unread > 0 ? 'text-white font-semibold' : 'text-gray-800 dark:text-gray-200'}`}>
                            {conversation.name}
                            {conversation.unread > 0 && (
                              <span className="inline-block w-2 h-2 bg-netconnect-coral rounded-full ml-2 animate-pulse"></span>
                            )}
                          </h4>
                          <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                      </div>
                      {conversation.unread > 0 && (
                        <Badge className="ml-2 bg-netconnect-coral shadow-[0_0_10px_rgba(255,107,107,0.5)] flex-shrink-0">{conversation.unread}</Badge>
                      )}
                    </div>
                  </button>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
                    <MessageSquare className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">No messages yet</h3>
                  <p className="text-gray-500 dark:text-gray-400 max-w-md">
                    Start a new conversation to begin connecting
                  </p>
                </div>
              )}
            </div>
            
            <div className="p-4 border-t border-gray-200 dark:border-gray-800/50 sticky bottom-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <Button className="w-full bg-netconnect-blue hover:bg-netconnect-blue/90 text-white shadow-[0_4px_14px_rgba(31,58,147,0.4)] hover:shadow-[0_6px_20px_rgba(31,58,147,0.6)] transition-all hover:translate-y-[-1px] active:translate-y-[1px]">
                <Mail className="mr-2 h-4 w-4" /> New Message
              </Button>
            </div>
          </div>
          
          <div className="hidden sm:flex sm:w-2/3 md:w-3/4 flex-col bg-gray-50/30 dark:bg-gray-900/40 backdrop-blur-sm">
            {selectedChat ? (
              <>
                <div className="p-4 bg-white/50 dark:bg-gray-900/60 border-b border-gray-200 dark:border-gray-800/50 flex items-center justify-between sticky top-0 backdrop-blur-sm z-10">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 ring-2 ring-white/10 dark:ring-gray-800/70">
                      <AvatarImage src={conversations.find(c => c.id === selectedChat)?.avatar} />
                      <AvatarFallback>{conversations.find(c => c.id === selectedChat)?.name.charAt(0) || ''}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{conversations.find(c => c.id === selectedChat)?.name}</h4>
                      <p className="text-xs text-green-500">
                        {conversations.find(c => c.id === selectedChat)?.online ? (
                          <span className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                            Online
                          </span>
                        ) : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon-sm" className="rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors">
                            <Phone className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Voice Call</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon-sm" className="rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors">
                            <Video className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Video Call</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon-sm" className="rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>More Options</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 bg-opacity-30 bg-gradient-to-b from-gray-50/10 to-gray-100/20 dark:from-gray-900/10 dark:to-gray-800/20">
                  <div className="space-y-4">
                    {getMessagesForSelectedChat().map((message, index) => {
                      const showDayDivider = index === 0 || 
                                            message.day !== getMessagesForSelectedChat()[index - 1].day;
                      
                      return (
                        <div key={message.id}>
                          {showDayDivider && message.day && (
                            <div className="flex items-center justify-center my-6 relative">
                              <div className="absolute left-0 right-0 h-[1px] bg-gray-200 dark:bg-gray-700/50"></div>
                              <div className="bg-gray-200 dark:bg-gray-800/70 px-4 py-1.5 rounded-full text-xs text-gray-500 relative z-10 shadow-sm">
                                {message.day}
                              </div>
                            </div>
                          )}
                          
                          <div className={`flex gap-3 ${message.isUser ? 'justify-end' : ''} animate-fade-in`}>
                            {!message.isUser && (
                              <Avatar className="h-8 w-8 mt-1 ring-1 ring-white/10 dark:ring-gray-800/70 flex-shrink-0">
                                <AvatarImage src={conversations.find(c => c.id === selectedChat)?.avatar} />
                                <AvatarFallback>
                                  {conversations.find(c => c.id === selectedChat)?.name.charAt(0) || ''}
                                </AvatarFallback>
                              </Avatar>
                            )}
                            <div 
                              className={`max-w-[70%] p-0 ${
                                message.isUser 
                                  ? 'bg-netconnect-blue text-white shadow-[0_4px_14px_rgba(31,58,147,0.2)] hover:shadow-[0_6px_20px_rgba(31,58,147,0.3)]' 
                                  : 'bg-white dark:bg-gray-800/70 shadow-[0_4px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_10px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_14px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_6px_14px_rgba(0,0,0,0.3)]'
                              } rounded-2xl transition-all duration-300`}
                            >
                              <div className="px-4 py-3">
                                <p className="text-sm">{message.text}</p>
                                <span className={`text-[10px] ${message.isUser ? 'text-blue-200' : 'text-gray-500'} block text-right mt-1`}>
                                  {message.time}
                                  {message.isUser && <Check className="inline ml-1 h-3 w-3" />}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                <div className="p-4 bg-white/50 dark:bg-gray-900/60 border-t border-gray-200 dark:border-gray-800/50 sticky bottom-0 backdrop-blur-sm">
                  <Card className="p-1 border border-gray-200 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/50 shadow-lg">
                    <CardContent className="p-0">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <textarea
                            placeholder="Type a message..."
                            className="w-full border-none focus:outline-none focus:ring-0 resize-none py-3 px-4 max-h-24 text-sm bg-transparent transition-all"
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
                        <div className="flex items-center gap-1 px-2 flex-shrink-0">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon-sm" className="rounded-full h-8 w-8 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                                  <Paperclip className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Attach File</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon-sm" className="rounded-full h-8 w-8 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                                  <Image className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Share Image</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button variant="ghost" size="icon-sm" className="rounded-full h-8 w-8 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                                  <Smile className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Add Emoji</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                          <Button 
                            className="ml-1 h-9 w-9 rounded-full bg-netconnect-blue hover:bg-netconnect-blue/90 p-0 shadow-[0_4px_10px_rgba(31,58,147,0.3)] hover:shadow-[0_4px_14px_rgba(31,58,147,0.5)] transition-all hover:scale-105 active:scale-95"
                            onClick={handleSendMessage}
                            disabled={!messageText.trim()}
                            aria-label="Send message"
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
                <div className="w-20 h-20 rounded-full bg-gray-100/50 dark:bg-gray-800/50 flex items-center justify-center mb-4 shadow-inner">
                  <MessageSquare className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Your Messages</h3>
                <p className="text-gray-500 dark:text-gray-400 max-w-md mb-6">
                  Select a conversation or start a new one to begin messaging
                </p>
                <Button variant="glass-primary" className="shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px] active:translate-y-[1px]">
                  <Mail className="mr-2 h-4 w-4" /> New Message
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
