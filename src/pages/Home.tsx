
import Navbar from "../components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bell, 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Clock, 
  Heart, 
  LineChart, 
  MessageCircle, 
  MessageSquare, 
  PieChart, 
  Plus, 
  Share2, 
  Sparkles, 
  ThumbsUp, 
  TrendingUp, 
  Users 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const Home = () => {
  const [activePostFilter, setActivePostFilter] = useState('forYou');
  
  const handleCreatePost = () => {
    toast.info('Opening post creation dialog');
  };
  
  const handleRSVP = () => {
    toast.success('You\'ve RSVP\'d to the Tech Networking Mixer!');
  };
  
  const handleApplyNow = () => {
    toast.info('Redirecting to application page');
  };
  
  const handleConnect = (name: string) => {
    toast.success(`Connection request sent to ${name}`);
  };
  
  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark">
      <Navbar />
      
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Welcome Back, Sarah!</h2>
            <p className="text-gray-500 dark:text-gray-400">Tuesday, April 16, 2025</p>
          </div>
          <Button 
            className="bg-netconnect-blue hover:bg-netconnect-blue/90 text-white"
            onClick={handleCreatePost}
          >
            <Plus className="mr-2 h-4 w-4" /> Create Post
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Quick Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="overflow-hidden">
                <div className="h-1 bg-netconnect-mint"></div>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-netconnect-mint/20">
                    <Users className="w-6 h-6 text-netconnect-mint" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Profile Views</p>
                    <p className="text-2xl font-semibold">245</p>
                    <span className="text-xs text-netconnect-mint flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> +12% this week
                    </span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-1 bg-netconnect-lilac"></div>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-netconnect-lilac/20">
                    <MessageSquare className="w-6 h-6 text-netconnect-lilac" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Post Impressions</p>
                    <p className="text-2xl font-semibold">1.2k</p>
                    <span className="text-xs text-netconnect-lilac flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> +28% this week
                    </span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-1 bg-netconnect-coral"></div>
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-netconnect-coral/20">
                    <Bell className="w-6 h-6 text-netconnect-coral" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Connection Requests</p>
                    <p className="text-2xl font-semibold">12</p>
                    <span className="text-xs text-netconnect-coral flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" /> New today
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Feed Tabs */}
            <Card>
              <CardHeader className="pb-0">
                <Tabs defaultValue={activePostFilter} onValueChange={setActivePostFilter} className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="forYou">For You</TabsTrigger>
                    <TabsTrigger value="trending">Trending</TabsTrigger>
                    <TabsTrigger value="following">Following</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="forYou" className="space-y-4 mt-0">
                    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <div className="flex gap-3 mb-3">
                        <Avatar>
                          <AvatarImage src="https://i.pravatar.cc/150?img=32" />
                          <AvatarFallback>MJ</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">Michael Johnson</h4>
                            <Badge className="ml-2 bg-netconnect-blue/10 text-netconnect-blue border-none text-[10px] py-0">Following</Badge>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager at TechForward</p>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>2 hours ago</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-800 dark:text-gray-200">Just published our updated product roadmap for Q2. Excited about the new features we're rolling out! Anyone else working on AI-powered recommendations?</p>
                      </div>
                      
                      <div className="rounded-lg overflow-hidden mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                          alt="Product Roadmap" 
                          className="w-full object-cover h-48"
                        />
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-3">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center text-gray-500 hover:text-netconnect-blue">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            <span className="text-sm">124</span>
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-netconnect-blue">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            <span className="text-sm">28</span>
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-netconnect-blue">
                            <Share2 className="w-4 h-4 mr-1" />
                            <span className="text-sm">Share</span>
                          </button>
                        </div>
                        <button className="text-netconnect-blue text-sm hover:underline">See all comments</button>
                      </div>
                    </div>
                    
                    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                      <div className="flex gap-3 mb-3">
                        <Avatar>
                          <AvatarImage src="https://i.pravatar.cc/150?img=44" />
                          <AvatarFallback>EC</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">Emily Chen</h4>
                            <Badge className="ml-2 bg-netconnect-mint/10 text-netconnect-mint border-none text-[10px] py-0">New Connection</Badge>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">UX Researcher at DesignHub</p>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>Yesterday</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-800 dark:text-gray-200">I'm sharing my latest article on conducting effective remote user testing. Based on real case studies from our team's work over the past year.</p>
                        <div className="mt-3 p-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                          <h5 className="font-medium mb-1">10 Tips for Better Remote User Testing</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Learn how to get the most valuable insights from your remote user testing sessions...</p>
                          <Link to="#" className="text-netconnect-blue text-sm hover:underline">Read the full article</Link>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-3">
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center text-gray-500 hover:text-netconnect-blue">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            <span className="text-sm">87</span>
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-netconnect-blue">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            <span className="text-sm">14</span>
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-netconnect-blue">
                            <Share2 className="w-4 h-4 mr-1" />
                            <span className="text-sm">Share</span>
                          </button>
                        </div>
                        <button className="text-netconnect-blue text-sm hover:underline">See all comments</button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="trending" className="mt-0">
                    <div className="py-8 text-center">
                      <Sparkles className="h-12 w-12 text-netconnect-lilac mx-auto mb-3" />
                      <h3 className="text-lg font-medium mb-2">Discover Trending Topics</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-4">
                        We're personalizing your feed based on your interests. Check back soon for trending discussions in your field.
                      </p>
                      <Button variant="outline">Explore Categories</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="following" className="mt-0">
                    <div className="py-8 text-center">
                      <Users className="h-12 w-12 text-netconnect-mint mx-auto mb-3" />
                      <h3 className="text-lg font-medium mb-2">Follow More People</h3>
                      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-4">
                        Start following more professionals in your field to see their posts and updates here.
                      </p>
                      <Link to="/network">
                        <Button>Find People to Follow</Button>
                      </Link>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardHeader>
            </Card>
            
            {/* Upcoming Events */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
                  <Link to="#" className="text-sm text-netconnect-blue dark:text-netconnect-mint hover:underline font-medium">
                    View All
                  </Link>
                </div>
                <CardDescription>Events matching your interests and network</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="flex flex-col items-center justify-center min-w-[60px] h-16 rounded-lg bg-netconnect-blue/10 border border-netconnect-blue/20">
                      <span className="text-xs font-medium text-gray-500">APR</span>
                      <span className="text-xl font-bold text-netconnect-blue dark:text-netconnect-mint">18</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Tech Networking Mixer</h4>
                      <p className="text-sm text-gray-500 mb-1">7:00 PM - 9:00 PM • Virtual</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 px-3 text-xs bg-white dark:bg-gray-800">
                          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
                        </Button>
                        <Button size="sm" className="h-8 px-3 text-xs bg-netconnect-blue hover:bg-netconnect-blue/90 text-white" onClick={handleRSVP}>
                          RSVP
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="flex flex-col items-center justify-center min-w-[60px] h-16 rounded-lg bg-netconnect-lilac/10 border border-netconnect-lilac/20">
                      <span className="text-xs font-medium text-gray-500">APR</span>
                      <span className="text-xl font-bold text-netconnect-lilac">24</span>
                    </div>
                    <div>
                      <h4 className="font-medium">UX Design Workshop</h4>
                      <p className="text-sm text-gray-500 mb-1">2:00 PM - 4:00 PM • San Francisco</p>
                      <div className="flex flex-wrap items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 px-3 text-xs bg-white dark:bg-gray-800">
                          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
                        </Button>
                        <Button size="sm" className="h-8 px-3 text-xs bg-netconnect-lilac hover:bg-netconnect-lilac/90 text-white">
                          RSVP
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            {/* User Profile Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center flex-col text-center mb-4">
                  <Avatar className="w-20 h-20 border-4 border-white dark:border-gray-800 shadow-lg mb-3">
                    <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">Sarah Anderson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">UX/UI Designer & Product Strategist</p>
                  <Link to="/profile">
                    <Button variant="outline" size="sm" className="mb-2">View Profile</Button>
                  </Link>
                </div>
                
                <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Profile Completeness</span>
                      <div className="w-1/2 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-netconnect-mint rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="font-medium text-sm">85%</span>
                    </div>
                    
                    <Button variant="outline" className="w-full">
                      <PenSquare className="mr-2 h-4 w-4" /> Complete Your Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* User Stats Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Your Network Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-netconnect-blue dark:text-netconnect-mint">486</p>
                    <span className="text-sm text-gray-500">Connections</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-netconnect-lilac">24</p>
                    <span className="text-sm text-gray-500">Posts</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-netconnect-coral">18%</p>
                    <span className="text-sm text-gray-500">Engagement</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <p className="text-2xl font-bold text-green-500">10</p>
                    <span className="text-sm text-gray-500">Job Matches</span>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button variant="outline" className="w-full bg-white dark:bg-gray-800">
                    <LineChart className="mr-2 h-4 w-4" /> View Detailed Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Suggested Jobs */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Suggested Jobs</CardTitle>
                  <Link to="/profile" className="text-sm text-netconnect-blue dark:text-netconnect-mint hover:underline font-medium">
                    View All
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium">UX/UI Designer</h4>
                        <p className="text-sm text-gray-500">CreativeTech Inc.</p>
                      </div>
                      <Badge className="bg-green-500 text-white border-none">New</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="flex items-center">
                        <Users className="mr-1 h-3 w-3" /> 10-50 employees
                      </span>
                    </div>
                    <Button 
                      className="w-full bg-netconnect-blue hover:bg-netconnect-blue/90 text-white"
                      onClick={handleApplyNow}
                    >
                      Apply Now
                    </Button>
                  </div>
                  
                  <div className="p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium">Product Designer</h4>
                        <p className="text-sm text-gray-500">InnoSoft Inc.</p>
                      </div>
                      <Badge className="bg-netconnect-lilac text-white border-none">Remote</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="flex items-center">
                        <Users className="mr-1 h-3 w-3" /> 50-200 employees
                      </span>
                    </div>
                    <Button 
                      className="w-full bg-netconnect-blue hover:bg-netconnect-blue/90 text-white"
                      onClick={handleApplyNow}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* People You May Know */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">People You May Know</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://i.pravatar.cc/150?img=11" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Jamie Smith</p>
                      <p className="text-xs text-gray-500">Product Manager at Figma</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 px-3 bg-white dark:bg-gray-800"
                      onClick={() => handleConnect('Jamie Smith')}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Connect
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                      <AvatarFallback>RJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Robert Johnson</p>
                      <p className="text-xs text-gray-500">Frontend Developer at Google</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 px-3 bg-white dark:bg-gray-800"
                      onClick={() => handleConnect('Robert Johnson')}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Connect
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://i.pravatar.cc/150?img=13" />
                      <AvatarFallback>AL</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Alice Lee</p>
                      <p className="text-xs text-gray-500">UI Designer at Adobe</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-8 px-3 bg-white dark:bg-gray-800"
                      onClick={() => handleConnect('Alice Lee')}
                    >
                      <Plus className="h-3 w-3 mr-1" /> Connect
                    </Button>
                  </div>
                  
                  <Button variant="ghost" className="w-full text-netconnect-blue dark:text-netconnect-mint">
                    See More Suggestions <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
