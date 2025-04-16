
import Navbar from "../components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Briefcase, Calendar, ChevronRight, MessageSquare, PieChart, Plus, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark">
      <Navbar />
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-1">Welcome Back, Sarah!</h2>
            <p className="text-gray-500 dark:text-gray-400">Tuesday, April 16, 2025</p>
          </div>
          <Button className="bg-netconnect-blue hover:bg-netconnect-blue/90 text-white">
            <Plus className="mr-2 h-4 w-4" /> Create Post
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            {/* Quick Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-netconnect-mint/10 to-netconnect-blue/5 border-netconnect-mint/20">
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
              
              <Card className="bg-gradient-to-br from-netconnect-lilac/10 to-netconnect-blue/5 border-netconnect-lilac/20">
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
              
              <Card className="bg-gradient-to-br from-netconnect-coral/10 to-netconnect-blue/5 border-netconnect-coral/20">
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
            
            {/* Recent Activity */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                  <Link to="/network" className="text-sm text-netconnect-blue dark:text-netconnect-mint hover:underline font-medium flex items-center">
                    View All <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <Avatar className="h-10 w-10 border-2 border-netconnect-mint">
                      <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium">Alex Johnson viewed your profile</p>
                          <span className="text-xs text-gray-500">2 hours ago</span>
                        </div>
                        <Badge variant="outline" className="bg-netconnect-mint/10 text-netconnect-mint border-netconnect-mint/20">
                          Profile View
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <Avatar className="h-10 w-10 border-2 border-netconnect-lilac">
                      <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium">New job match: UX Designer at TechCorp</p>
                          <span className="text-xs text-gray-500">5 hours ago</span>
                        </div>
                        <Badge variant="outline" className="bg-netconnect-lilac/10 text-netconnect-lilac border-netconnect-lilac/20">
                          Job Match
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <Avatar className="h-10 w-10 border-2 border-netconnect-coral">
                      <AvatarImage src="https://i.pravatar.cc/150?img=2" />
                      <AvatarFallback>EM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-medium">Emily Moore liked your latest post</p>
                          <span className="text-xs text-gray-500">Yesterday</span>
                        </div>
                        <Badge variant="outline" className="bg-netconnect-coral/10 text-netconnect-coral border-netconnect-coral/20">
                          Post Engagement
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Upcoming Events */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
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
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                          <Calendar className="mr-1 h-3 w-3" /> Add to Calendar
                        </Button>
                        <Button size="sm" className="h-8 px-3 text-xs bg-netconnect-blue hover:bg-netconnect-blue/90 text-white">
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
            {/* User Stats Card */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Your Network Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Profile Completeness</span>
                    <div className="w-1/2 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-netconnect-mint rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="font-medium text-sm">85%</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Connections</span>
                    <span className="font-medium">486</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Posts</span>
                    <span className="font-medium">24</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Engagement Rate</span>
                    <span className="font-medium">18%</span>
                  </div>
                  
                  <div className="pt-2">
                    <Button variant="outline" className="w-full">
                      <PieChart className="mr-2 h-4 w-4" /> View Detailed Analytics
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Suggested Jobs */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Suggested Jobs</CardTitle>
                  <Link to="/network" className="text-sm text-netconnect-blue dark:text-netconnect-mint hover:underline font-medium">
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
                      <Badge className="bg-netconnect-mint text-white">New</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center">
                        <Briefcase className="mr-1 h-3 w-3" /> Full-time
                      </span>
                      <span className="flex items-center">
                        <Users className="mr-1 h-3 w-3" /> 10-50 employees
                      </span>
                    </div>
                    <Button className="w-full bg-netconnect-blue hover:bg-netconnect-blue/90 text-white">
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
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Jamie Smith</p>
                        <p className="text-xs text-gray-500">Product Manager at Figma</p>
                      </div>
                      <Button variant="outline" size="sm" className="h-8 px-3">
                        <Plus className="h-3 w-3 mr-1" /> Connect
                      </Button>
                    </div>
                  ))}
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
