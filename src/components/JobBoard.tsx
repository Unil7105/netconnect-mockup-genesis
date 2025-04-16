
import { Search, SlidersHorizontal } from "lucide-react";
import JobCard from "./JobCard";

const JobBoard = () => {
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
      tags: ["Remote", "React", "TypeScript", "UI/UX"]
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
      tags: ["Hybrid", "Figma", "User Research", "Prototyping"]
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
      tags: ["Remote", "SEO", "Content", "Analytics"]
    }
  ];

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
            />
          </div>
          <div className="md:w-32">
            <button className="btn-secondary w-full flex items-center justify-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          <span className="filter-chip active">All Jobs</span>
          <span className="filter-chip">Remote</span>
          <span className="filter-chip">Full-time</span>
          <span className="filter-chip">Contract</span>
          <span className="filter-chip">Design</span>
          <span className="filter-chip">Engineering</span>
          <span className="filter-chip">Marketing</span>
        </div>
      </div>
      
      <div className="card p-4 mb-6 border-l-4 border-l-netconnect-lilac bg-gradient-to-r from-netconnect-lilac/5 to-transparent">
        <div className="flex items-center">
          <div className="flex-1">
            <h4 className="font-medium text-netconnect-lilac mb-1">Suggested for You</h4>
            <p className="text-gray-700 dark:text-gray-300">Based on your profile, these 5 new jobs match your skills</p>
          </div>
          <button className="btn-accent">View Matches</button>
        </div>
      </div>
      
      <div className="mb-4">
        <h3 className="font-medium mb-4">Recent Job Listings</h3>
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
      
      <div className="text-center pt-2">
        <button className="text-netconnect-blue dark:text-netconnect-mint font-medium hover:underline">
          Load More Jobs
        </button>
      </div>
    </div>
  );
};

export default JobBoard;
