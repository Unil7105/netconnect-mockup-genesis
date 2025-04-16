import { Award, Briefcase, Calendar, Clock, ExternalLink, FileText, Github, Globe, GraduationCap, Link, MapPin, PenSquare, PlusCircle, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

const ProfileScreen = () => {
  const [following, setFollowing] = useState(false);
  
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
      <div className="relative mb-20">
        <div className="h-40 bg-gradient-to-r from-netconnect-blue to-netconnect-lilac rounded-b-3xl"></div>
        <div className="absolute -bottom-16 left-10 p-1 rounded-full bg-white dark:bg-netconnect-dark-card shadow-lg">
          <div className="p-0.5 rounded-full bg-gradient-to-r from-netconnect-blue to-netconnect-lilac">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
              alt="Profile" 
              className="w-28 h-28 rounded-full border-4 border-white dark:border-netconnect-dark-card object-cover" 
            />
          </div>
        </div>
        <div className="absolute right-6 -bottom-8 space-x-2">
          <Button variant="outline" size="sm" onClick={handleEditProfile} className="bg-white dark:bg-gray-800">
            <PenSquare className="w-4 h-4 mr-2" />
            Edit Profile
          </Button>
          <Button 
            className={following ? "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600" : "bg-netconnect-blue hover:bg-netconnect-blue/90 text-white"}
            onClick={handleConnect}
          >
            {following ? "Connected" : "Connect"}
          </Button>
          <Button variant="outline" onClick={handleMessage} className="bg-white dark:bg-gray-800">Message</Button>
        </div>
      </div>
      
      <div className="px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Sarah Anderson</h1>
            <p className="text-netconnect-blue dark:text-netconnect-mint font-medium mb-2">UX/UI Designer & Product Strategist</p>
            <div className="flex flex-wrap items-center text-gray-500 dark:text-gray-400 text-sm mb-3 gap-y-1">
              <div className="flex items-center mr-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center mr-4">
                <Briefcase className="w-4 h-4 mr-1" />
                <span>FutureUI Studio</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>5+ years experience</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <Badge className="bg-green-500 text-white border-none">Open to Work</Badge>
              <Badge className="bg-teal-500 text-white border-none">Remote</Badge>
              <Badge variant="outline" className="border-gray-300 dark:border-gray-600">Top Professional</Badge>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="border-b w-full justify-start mb-6 bg-transparent">
            <TabsTrigger value="about" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-netconnect-blue dark:data-[state=active]:border-netconnect-mint">About</TabsTrigger>
            <TabsTrigger value="portfolio" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-netconnect-blue dark:data-[state=active]:border-netconnect-mint">Portfolio</TabsTrigger>
            <TabsTrigger value="experience" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-netconnect-blue dark:data-[state=active]:border-netconnect-mint">Experience</TabsTrigger>
            <TabsTrigger value="education" className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-netconnect-blue dark:data-[state=active]:border-netconnect-mint">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">About</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Product designer focused on creating intuitive digital experiences that solve real problems. 
                  5+ years designing for startups and tech companies with a focus on user-centered design principles.
                  Passionate about mentoring early-career designers and building accessible products.
                </p>
                <div className="flex items-center flex-wrap gap-3">
                  <span className="filter-chip">UX Design</span>
                  <span className="filter-chip">Product Strategy</span>
                  <span className="filter-chip">Interaction Design</span>
                  <span className="filter-chip">Figma</span>
                  <span className="filter-chip">Prototyping</span>
                  <span className="filter-chip">User Research</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Contact & Social</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline">
                    <Globe className="w-5 h-5 mr-2" />
                    <span>sarahanderson.design</span>
                  </a>
                  <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline">
                    <Twitter className="w-5 h-5 mr-2" />
                    <span>@sarahdesigns</span>
                  </a>
                  <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline">
                    <Github className="w-5 h-5 mr-2" />
                    <span>github.com/sarahanderson</span>
                  </a>
                  <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline">
                    <Link className="w-5 h-5 mr-2" />
                    <span>linkedin.com/in/sarahanderson</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="portfolio" className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="relative group rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                  alt="Portfolio" 
                  className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white">
                    <p className="text-sm font-medium">HealthTrack App</p>
                    <div className="flex items-center mt-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span className="text-xs">View Project</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                  alt="Portfolio" 
                  className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white">
                    <p className="text-sm font-medium">Fintech Dashboard</p>
                    <div className="flex items-center mt-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span className="text-xs">View Project</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative group rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                  alt="Portfolio" 
                  className="w-full h-36 object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 text-white">
                    <p className="text-sm font-medium">Travel App Concept</p>
                    <div className="flex items-center mt-1">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      <span className="text-xs">View Project</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center h-36 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 cursor-pointer hover:border-netconnect-blue dark:hover:border-netconnect-mint transition-colors">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <PlusCircle className="w-8 h-8 mx-auto mb-2" />
                  <span className="text-sm">Add Project</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-4">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="relative pl-6 border-l-2 border-netconnect-blue dark:border-netconnect-mint pb-6">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-netconnect-blue dark:bg-netconnect-mint"></div>
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
                
                <div className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-700">
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
          
          <TabsContent value="education" className="space-y-4">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg self-start">
                    <GraduationCap className="w-6 h-6 text-netconnect-blue dark:text-netconnect-mint" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Master of Fine Arts, Design</h3>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">California Institute of Arts</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">2018 - 2020</div>
                    <p className="text-gray-600 dark:text-gray-300">Focused on digital product design, user experience, and interactive media.</p>
                    <div className="mt-2 flex gap-2">
                      <Badge variant="outline">UX Design</Badge>
                      <Badge variant="outline">Interaction Design</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg self-start">
                    <Award className="w-6 h-6 text-netconnect-blue dark:text-netconnect-mint" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Advanced UX Certification</h3>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">Nielsen Norman Group</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">2021</div>
                    <p className="text-gray-600 dark:text-gray-300">Comprehensive UX design certification covering research methods, interaction design, and UX strategy.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg self-start">
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
  );
};

export default ProfileScreen;
