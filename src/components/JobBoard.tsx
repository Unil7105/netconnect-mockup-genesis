
import { Search, SlidersHorizontal } from "lucide-react";
import JobCard from "./JobCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const JobBoard = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeJobType, setActiveJobType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const jobs = [
    {
      id: 1,
      company: "TechCorp",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Firefox_logo%2C_2019.svg",
      title: "Senior Frontend Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      tags: ["Remote", "React", "TypeScript", "UI/UX"],
      category: "Engineering"
    },
    {
      id: 2,
      company: "DesignLabs",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
      title: "Product Designer",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k - $120k",
      posted: "1 week ago",
      tags: ["Hybrid", "Figma", "User Research", "Prototyping"],
      category: "Design"
    },
    {
      id: 3,
      company: "GrowthCo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
      title: "Marketing Specialist",
      location: "Austin, TX",
      type: "Contract",
      salary: "$70k - $90k",
      posted: "3 days ago",
      tags: ["Remote", "SEO", "Content", "Analytics"],
      category: "Marketing"
    },
    {
      id: 4,
      company: "InnoSoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      title: "Backend Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "5 days ago",
      tags: ["Python", "Django", "AWS", "API"],
      category: "Engineering"
    },
    {
      id: 5,
      company: "DataViz Inc",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
      title: "Data Analyst",
      location: "Chicago, IL",
      type: "Part-time",
      salary: "$60k - $80k",
      posted: "1 week ago",
      tags: ["SQL", "Python", "Tableau", "Excel"],
      category: "Data"
    },
    {
      id: 6,
      company: "StartUp Hub",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      title: "Product Manager",
      location: "Boston, MA",
      type: "Contract",
      salary: "$100k - $130k",
      posted: "Just now",
      tags: ["Agile", "Roadmapping", "B2B", "SaaS"],
      category: "Product"
    }
  ];

  // Filter jobs based on active filter and search query
  const filteredJobs = jobs.filter(job => {
    const matchesCategory = activeFilter === 'all' || job.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesType = !activeJobType || job.type.toLowerCase() === activeJobType.toLowerCase();
    const matchesSearch = !searchQuery || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    return matchesCategory && matchesType && matchesSearch;
  });

  const handleCategoryFilter = (category: string) => {
    setActiveFilter(category);
  };

  const handleJobTypeFilter = (type: string) => {
    setActiveJobType(activeJobType === type ? null : type);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Find Your Next Opportunity</h2>
        <p className="text-gray-500 dark:text-gray-400">Discover jobs matching your skills and interests</p>
      </div>
      
      <div className="card p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Job title, company, or keyword" 
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-netconnect-blue dark:focus:ring-netconnect-mint bg-white dark:bg-netconnect-dark-card"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="md:w-32">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800"
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('all');
                setActiveJobType(null);
              }}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Reset</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium mb-2 text-gray-500">Filter by category</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeFilter === 'all' ? 'bg-netconnect-blue text-white hover:text-white hover:bg-netconnect-blue/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleCategoryFilter('all')}
          >
            All Jobs
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeFilter === 'engineering' ? 'bg-netconnect-blue text-white hover:text-white hover:bg-netconnect-blue/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleCategoryFilter('engineering')}
          >
            Engineering
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeFilter === 'design' ? 'bg-netconnect-blue text-white hover:text-white hover:bg-netconnect-blue/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleCategoryFilter('design')}
          >
            Design
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeFilter === 'marketing' ? 'bg-netconnect-blue text-white hover:text-white hover:bg-netconnect-blue/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleCategoryFilter('marketing')}
          >
            Marketing
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeFilter === 'product' ? 'bg-netconnect-blue text-white hover:text-white hover:bg-netconnect-blue/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleCategoryFilter('product')}
          >
            Product
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeFilter === 'data' ? 'bg-netconnect-blue text-white hover:text-white hover:bg-netconnect-blue/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleCategoryFilter('data')}
          >
            Data
          </Button>
        </div>
        
        <h3 className="text-sm font-medium mb-2 text-gray-500">Job type</h3>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeJobType === 'full-time' ? 'bg-netconnect-lilac text-white hover:text-white hover:bg-netconnect-lilac/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleJobTypeFilter('full-time')}
          >
            Full-time
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeJobType === 'part-time' ? 'bg-netconnect-lilac text-white hover:text-white hover:bg-netconnect-lilac/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleJobTypeFilter('part-time')}
          >
            Part-time
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className={`rounded-full px-4 ${activeJobType === 'contract' ? 'bg-netconnect-lilac text-white hover:text-white hover:bg-netconnect-lilac/90' : 'bg-white dark:bg-gray-800'}`}
            onClick={() => handleJobTypeFilter('contract')}
          >
            Contract
          </Button>
        </div>
      </div>
      
      {filteredJobs.length > 0 ? (
        <>
          <div className="card p-4 mb-6 border-l-4 border-l-netconnect-lilac bg-gradient-to-r from-netconnect-lilac/5 to-transparent">
            <div className="flex items-center">
              <div className="flex-1">
                <h4 className="font-medium text-netconnect-lilac mb-1">Suggested for You</h4>
                <p className="text-gray-700 dark:text-gray-300">Based on your profile, these {filteredJobs.length} jobs match your skills</p>
              </div>
              <Button className="bg-netconnect-lilac hover:bg-netconnect-lilac/90 text-white">View Matches</Button>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">
                {searchQuery || activeFilter !== 'all' || activeJobType 
                  ? `Filtered Results (${filteredJobs.length})` 
                  : 'Recent Job Listings'}
              </h3>
              {(searchQuery || activeFilter !== 'all' || activeJobType) && (
                <Badge variant="outline" className="flex items-center gap-1">
                  {filteredJobs.length} jobs found
                </Badge>
              )}
            </div>
            
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      ) : (
        <div className="text-center py-12">
          <div className="mb-4 text-gray-400">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium mb-2">No jobs found</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your search or filters to find what you're looking for.</p>
          <Button 
            variant="outline" 
            onClick={() => {
              setSearchQuery('');
              setActiveFilter('all');
              setActiveJobType(null);
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default JobBoard;
