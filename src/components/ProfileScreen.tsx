
import { Award, Briefcase, Calendar, Clock, ExternalLink, FileText, Github, Globe, GraduationCap, Link, Mail, MapPin, PenSquare, PlusCircle, Twitter, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileScreen = () => {
  const [following, setFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 180);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleConnect = () => {
    setFollowing(!following);
    if (!following) {
      toast.success("Connection request sent!");
    } else {
      toast.info("Connection request withdrawn");
    }
  };
  
  const handleMessage = () => {
    toast.success("Message window opened");
  };
  
  const handleEditProfile = () => {
    toast.info("Edit profile mode activated");
  };

  return (
    <div className="max-w-3xl mx-auto pb-8">
      <div className="relative mb-24">
        {/* Enhanced background with layered gradients and pattern */}
        <div className="h-44 bg-gradient-to-r from-netconnect-blue via-netconnect-lilac to-purple-500 rounded-b-3xl overflow-hidden relative">
          {/* Mesh gradient background */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1000')] bg-cover bg-center opacity-10"></div>
          {/* Subtle noise pattern overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 mix-blend-overlay"></div>
          {/* Particles/tech pattern effect */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDgiPjwvcGF0aD4KPC9zdmc+')] opacity-20"></div>
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-netconnect-white dark:from-netconnect-dark to-transparent"></div>
        </div>
        
        {/* Enhanced Avatar with glowing border and status indicator */}
        <div className="absolute -bottom-20 left-10 rounded-full p-1 bg-white dark:bg-netconnect-dark-card shadow-lg">
          <div className="p-1 rounded-full relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-netconnect-blue via-netconnect-lilac to-netconnect-mint opacity-70 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-300"></div>
            <div className="relative rounded-full p-0.5 bg-gradient-to-r from-netconnect-blue to-netconnect-lilac">
              {/* Enhanced status indicator with pulse animation */}
              <div className="absolute top-0 right-0 -mr-1 -mt-1 z-10">
                <span className="relative flex h-5 w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50"></span>
                  <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white dark:border-netconnect-dark-card shadow-[0_0_10px_rgba(74,222,128,0.5)]"></span>
                </span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
                alt="Profile" 
                className="w-32 h-32 rounded-full border-4 border-white dark:border-netconnect-dark-card object-cover hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
          
          {/* Edit profile floating button over avatar */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleEditProfile}
            className="absolute -top-2 -right-2 bg-white/90 dark:bg-netconnect-dark-card/90 backdrop-blur-sm h-8 w-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <PenSquare className="h-4 w-4 text-netconnect-blue dark:text-netconnect-mint" />
          </Button>
        </div>
        
        {/* Redesigned action buttons */}
        <div className="absolute right-6 -bottom-10 space-x-3 flex items-center">
          <Button 
            className={cn(
              "transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-[-2px] gap-2",
              following 
                ? "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" 
                : "bg-netconnect-blue hover:bg-netconnect-blue/90 text-white"
            )}
            onClick={handleConnect}
          >
            <Users className="w-4 h-4" />
            {following ? "Connected" : "Connect"}
          </Button>
          <Button 
            variant="outline" 
            onClick={handleMessage} 
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white hover:shadow-md dark:hover:bg-gray-700 transition-all duration-300 gap-2"
          >
            <Mail className="w-4 h-4" />
            Message
          </Button>
        </div>
      </div>
      
      <div className="px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Sarah Anderson</h1>
            <p className="text-netconnect-blue dark:text-netconnect-mint font-medium mb-2">UX/UI Designer & Product Strategist</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 italic">"Let's build the future of design together 💡"</p>
            <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-3 gap-y-2 gap-x-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-netconnect-blue/10 dark:bg-netconnect-mint/10 flex items-center justify-center mr-2">
                  <MapPin className="w-3.5 h-3.5 text-netconnect-blue dark:text-netconnect-mint" />
                </div>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-netconnect-blue/10 dark:bg-netconnect-mint/10 flex items-center justify-center mr-2">
                  <Briefcase className="w-3.5 h-3.5 text-netconnect-blue dark:text-netconnect-mint" />
                </div>
                <span>FutureUI Studio</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-netconnect-blue/10 dark:bg-netconnect-mint/10 flex items-center justify-center mr-2">
                  <Clock className="w-3.5 h-3.5 text-netconnect-blue dark:text-netconnect-mint" />
                </div>
                <span>5+ years experience</span>
              </div>
            </div>
            
            {/* Badges with enhanced hover effects and horizontal scroll */}
            <div className="flex items-center space-x-2 mb-2 overflow-x-auto pb-2 scrollbar-none">
              <Badge className="bg-green-500 text-white border-none flex items-center gap-1 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:bg-green-400">
                <Globe className="w-3 h-3" />
                <span>Open to Work</span>
              </Badge>
              <Badge className="bg-teal-500 text-white border-none flex items-center gap-1 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:bg-teal-400">
                <MapPin className="w-3 h-3" />
                <span>Remote</span>
              </Badge>
              <Badge variant="outline" className="border-gray-300 dark:border-gray-600 flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Award className="w-3 h-3" />
                <span>Top Professional</span>
              </Badge>
              <Badge variant="outline" className="border-gray-300 dark:border-gray-600 flex items-center gap-1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <span>+2 more</span>
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Enhanced sticky tabs with animation */}
        <div className={cn(
          "transition-all duration-300 z-10",
          isScrolled ? "sticky top-0 bg-white/90 dark:bg-netconnect-dark/90 backdrop-blur-md shadow-md py-2 px-2 -mx-2 rounded-md" : ""
        )}>
          <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="overflow-x-auto scrollbar-none">
              <TabsList className="border-b w-full justify-start bg-transparent min-w-max">
                <TabsTrigger 
                  value="about" 
                  className="relative rounded-none data-[state=active]:border-b-0 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-netconnect-blue data-[state=active]:after:to-netconnect-lilac data-[state=active]:text-netconnect-blue dark:data-[state=active]:text-netconnect-mint transition-all hover:text-netconnect-blue/80 dark:hover:text-netconnect-mint/80"
                >
                  About
                </TabsTrigger>
                <TabsTrigger 
                  value="portfolio" 
                  className="relative rounded-none data-[state=active]:border-b-0 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-netconnect-blue data-[state=active]:after:to-netconnect-lilac data-[state=active]:text-netconnect-blue dark:data-[state=active]:text-netconnect-mint transition-all hover:text-netconnect-blue/80 dark:hover:text-netconnect-mint/80"
                >
                  Portfolio
                </TabsTrigger>
                <TabsTrigger 
                  value="experience" 
                  className="relative rounded-none data-[state=active]:border-b-0 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-netconnect-blue data-[state=active]:after:to-netconnect-lilac data-[state=active]:text-netconnect-blue dark:data-[state=active]:text-netconnect-mint transition-all hover:text-netconnect-blue/80 dark:hover:text-netconnect-mint/80"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger 
                  value="education" 
                  className="relative rounded-none data-[state=active]:border-b-0 data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-0.5 data-[state=active]:after:w-full data-[state=active]:after:bg-gradient-to-r data-[state=active]:after:from-netconnect-blue data-[state=active]:after:to-netconnect-lilac data-[state=active]:text-netconnect-blue dark:data-[state=active]:text-netconnect-mint transition-all hover:text-netconnect-blue/80 dark:hover:text-netconnect-mint/80"
                >
                  Education
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="about" className="space-y-6 animate-fade-in">
              <Card className="border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">About</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Product designer focused on creating intuitive digital experiences that solve real problems. 
                    5+ years designing for startups and tech companies with a focus on user-centered design principles.
                    Passionate about mentoring early-career designers and building accessible products.
                  </p>
                  <div className="flex items-center flex-wrap gap-3">
                    <span className="filter-chip hover:bg-netconnect-blue/10 dark:hover:bg-netconnect-mint/10 transition-colors">UX Design</span>
                    <span className="filter-chip hover:bg-netconnect-blue/10 dark:hover:bg-netconnect-mint/10 transition-colors">Product Strategy</span>
                    <span className="filter-chip hover:bg-netconnect-blue/10 dark:hover:bg-netconnect-mint/10 transition-colors">Interaction Design</span>
                    <span className="filter-chip hover:bg-netconnect-blue/10 dark:hover:bg-netconnect-mint/10 transition-colors">Figma</span>
                    <span className="filter-chip hover:bg-netconnect-blue/10 dark:hover:bg-netconnect-mint/10 transition-colors">Prototyping</span>
                    <span className="filter-chip hover:bg-netconnect-blue/10 dark:hover:bg-netconnect-mint/10 transition-colors">User Research</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold">Contact & Social</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-3">
                    <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-netconnect-blue/10 dark:bg-netconnect-mint/10 flex items-center justify-center mr-3 group-hover:bg-netconnect-blue/20 dark:group-hover:bg-netconnect-mint/20 transition-colors">
                        <Globe className="w-4 h-4 text-netconnect-blue dark:text-netconnect-mint" />
                      </div>
                      <span>sarahanderson.design</span>
                    </a>
                    <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-netconnect-blue/10 dark:bg-netconnect-mint/10 flex items-center justify-center mr-3 group-hover:bg-netconnect-blue/20 dark:group-hover:bg-netconnect-mint/20 transition-colors">
                        <Twitter className="w-4 h-4 text-netconnect-blue dark:text-netconnect-mint" />
                      </div>
                      <span>@sarahdesigns</span>
                    </a>
                    <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-netconnect-blue/10 dark:bg-netconnect-mint/10 flex items-center justify-center mr-3 group-hover:bg-netconnect-blue/20 dark:group-hover:bg-netconnect-mint/20 transition-colors">
                        <Github className="w-4 h-4 text-netconnect-blue dark:text-netconnect-mint" />
                      </div>
                      <span>github.com/sarahanderson</span>
                    </a>
                    <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline group">
                      <div className="w-8 h-8 rounded-full bg-netconnect-blue/10 dark:bg-netconnect-mint/10 flex items-center justify-center mr-3 group-hover:bg-netconnect-blue/20 dark:group-hover:bg-netconnect-mint/20 transition-colors">
                        <Link className="w-4 h-4 text-netconnect-blue dark:text-netconnect-mint" />
                      </div>
                      <span>linkedin.com/in/sarahanderson</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="portfolio" className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Enhanced portfolio cards with better hover effects */}
                <div className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt="Portfolio" 
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">HealthTrack App</p>
                      <div className="flex items-center mt-1">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span className="text-xs">View Project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt="Portfolio" 
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">Fintech Dashboard</p>
                      <div className="flex items-center mt-1">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span className="text-xs">View Project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                    alt="Portfolio" 
                    className="w-full h-36 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-medium">Travel App Concept</p>
                      <div className="flex items-center mt-1">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        <span className="text-xs">View Project</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center h-36 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 cursor-pointer hover:border-netconnect-blue dark:hover:border-netconnect-mint transition-colors group shadow-sm hover:shadow-md">
                  <div className="text-center text-gray-500 dark:text-gray-400 group-hover:text-netconnect-blue dark:group-hover:text-netconnect-mint transition-colors">
                    <PlusCircle className="w-8 h-8 mx-auto mb-2 group-hover:animate-pulse-gentle" />
                    <span className="text-sm">Add Project</span>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="experience" className="space-y-4 animate-fade-in">
              <Card className="border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 space-y-6">
                  <div className="relative pl-6 border-l-2 border-netconnect-blue dark:border-netconnect-mint pb-6 hover:pl-8 transition-all duration-300">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-netconnect-blue dark:bg-netconnect-mint shadow-[0_0_10px_rgba(31,58,147,0.5)] dark:shadow-[0_0_10px_rgba(26,188,156,0.5)]"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div>
                        <h3 className="text-lg font-medium">Senior UX Designer</h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span>FutureUI Studio</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-right mb-2 sm:mb-0">
                        <div className="flex items-center sm:justify-end">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Jan 2023 - Present</span>
                        </div>
                        <div className="flex items-center sm:justify-end mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>San Francisco, CA</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Leading UX design for enterprise products, managing a team of designers, and establishing design systems.
                      Collaborate with product managers and engineers to deliver user-centered products.
                    </p>
                  </div>
                  
                  <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700 hover:pl-8 transition-all duration-300">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <div>
                        <h3 className="text-lg font-medium">UX/UI Designer</h3>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                          <Briefcase className="w-4 h-4 mr-1" />
                          <span>DesignWave</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 sm:text-right mb-2 sm:mb-0">
                        <div className="flex items-center sm:justify-end">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Mar 2020 - Dec 2022</span>
                        </div>
                        <div className="flex items-center sm:justify-end mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>New York, NY</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                      Designed user interfaces for mobile and web applications. Conducted user research and usability testing.
                      Created wireframes, prototypes and high-fidelity designs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="education" className="space-y-4 animate-fade-in">
              <Card className="border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800/30 p-3 rounded-lg transition-colors duration-300 -mx-3">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg self-start group-hover:bg-netconnect-blue/10 dark:group-hover:bg-netconnect-mint/10 transition-colors">
                      <GraduationCap className="w-6 h-6 text-netconnect-blue dark:text-netconnect-mint" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Master of Fine Arts, Design</h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">California Institute of Arts</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">2018 - 2020</div>
                      <p className="text-gray-600 dark:text-gray-300">Focused on digital product design, user experience, and interactive media.</p>
                      <div className="mt-2 flex gap-2">
                        <Badge variant="outline" className="hover:bg-netconnect-blue/5 dark:hover:bg-netconnect-mint/5 transition-colors">UX Design</Badge>
                        <Badge variant="outline" className="hover:bg-netconnect-blue/5 dark:hover:bg-netconnect-mint/5 transition-colors">Interaction Design</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800/30 p-3 rounded-lg transition-colors duration-300 -mx-3">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg self-start group-hover:bg-netconnect-blue/10 dark:group-hover:bg-netconnect-mint/10 transition-colors">
                      <Award className="w-6 h-6 text-netconnect-blue dark:text-netconnect-mint" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Advanced UX Certification</h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Nielsen Norman Group</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">2021</div>
                      <p className="text-gray-600 dark:text-gray-300">Comprehensive UX design certification covering research methods, interaction design, and UX strategy.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800/30 p-3 rounded-lg transition-colors duration-300 -mx-3">
                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg self-start group-hover:bg-netconnect-blue/10 dark:group-hover:bg-netconnect-mint/10 transition-colors">
                      <FileText className="w-6 h-6 text-netconnect-blue dark:text-netconnect-mint" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Bachelor of Arts, Graphic Design</h3>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">University of California, Berkeley</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">2014 - 2018</div>
                      <p className="text-gray-600 dark:text-gray-300">Studied graphic design fundamentals, typography, color theory, and design thinking.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
