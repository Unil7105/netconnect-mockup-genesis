
import Navbar from "../components/Navbar";
import { Search, UserPlus, Users, Filter, MapPin, Building, ChevronRight, UserCheck, Plus, X } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NetworkFilters = [
  { id: 'all', name: 'All' },
  { id: 'tech', name: 'Tech' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'product', name: 'Product' },
  { id: 'leadership', name: 'Leadership' },
];

const industryFilters = [
  { id: 'software', name: 'Software' },
  { id: 'finance', name: 'Finance' },
  { id: 'health', name: 'Healthcare' },
  { id: 'education', name: 'Education' },
  { id: 'ecommerce', name: 'E-commerce' },
];

const Network = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);
  
  return (
    <div className="min-h-screen bg-netconnect-white dark:bg-netconnect-dark">
      <Navbar />
      <div className="container mx-auto py-6 px-4">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Your Network</h2>
          <p className="text-gray-500 dark:text-gray-400">Connect with professionals in your industry</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3 lg:w-1/4 space-y-6">
            {/* Network Stats */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Your Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-netconnect-mint/20">
                      <UserCheck className="w-5 h-5 text-netconnect-mint" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-medium">Connections</p>
                      <span className="text-sm text-gray-500">486 people</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  
                  <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors relative">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-netconnect-lilac/20">
                      <UserPlus className="w-5 h-5 text-netconnect-lilac" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-medium">Pending Invites</p>
                      <span className="text-sm text-gray-500">12 requests</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-netconnect-coral text-[10px] font-medium text-white">12</span>
                  </button>
                </div>
              </CardContent>
            </Card>
            
            {/* Filters */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Filter className="w-4 h-4 mr-2 text-gray-500" />
                  <CardTitle className="text-base font-semibold">Filters</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Role</h4>
                    <div className="flex flex-wrap gap-2">
                      {NetworkFilters.map(filter => (
                        <button
                          key={filter.id}
                          onClick={() => setActiveFilter(filter.id)}
                          className={`filter-chip ${activeFilter === filter.id ? 'active' : ''}`}
                        >
                          {filter.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-2">Industry</h4>
                    <div className="flex flex-wrap gap-2">
                      {industryFilters.map(filter => (
                        <button
                          key={filter.id}
                          onClick={() => setActiveIndustry(activeIndustry === filter.id ? null : filter.id)}
                          className={`filter-chip ${activeIndustry === filter.id ? 'active' : ''}`}
                        >
                          {filter.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {(activeFilter !== 'all' || activeIndustry) && (
                    <div className="pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-gray-500"
                        onClick={() => {
                          setActiveFilter('all');
                          setActiveIndustry(null);
                        }}
                      >
                        <X className="h-3 w-3 mr-1" /> Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:w-2/3 lg:w-3/4">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search your network..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-netconnect-blue dark:focus:ring-netconnect-mint"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-12 bg-gradient-to-r from-netconnect-blue to-netconnect-lilac"></div>
                  <CardContent className="pt-0">
                    <div className="flex flex-col items-center -mt-8 mb-4">
                      <Avatar className="w-16 h-16 border-4 border-white dark:border-netconnect-dark-card">
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${i}`} />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <h3 className="font-medium mt-2 text-center">John Smith</h3>
                      <p className="text-sm text-gray-500 text-center">Senior Developer at TechCorp</p>
                      
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs bg-netconnect-mint/10 text-netconnect-mint border-netconnect-mint/20">
                          React
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-netconnect-lilac/10 text-netconnect-lilac border-netconnect-lilac/20">
                          UI/UX
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" /> San Francisco
                      </span>
                      <span className="flex items-center">
                        <Building className="w-3 h-3 mr-1" /> TechCorp
                      </span>
                    </div>
                    
                    <div className="flex justify-between gap-2">
                      <Button variant="outline" className="flex-1 text-sm">View Profile</Button>
                      <Button className="flex-1 text-sm bg-netconnect-blue hover:bg-netconnect-blue/90 text-white">
                        <Plus className="h-3 w-3 mr-1" /> Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="bg-transparent">
                Load More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
