
import { Plus } from "lucide-react";
import PostCard from "./PostCard";
import { useState } from "react";
import PostCreationModal from "./PostCreationModal";

const NetworkingFeed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posts = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      title: "Senior Developer at TechCorp",
      time: "2h ago",
      content: "Just launched our new API documentation site! Check it out if you're interested in integrating with our platform. Feedback welcome!",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
      likes: 42,
      comments: 8,
      shares: 3,
      tags: ["webdev", "api", "documentation"]
    },
    {
      id: 2,
      name: "Maya Patel",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      title: "Product Designer at DesignLabs",
      time: "5h ago",
      content: "I'm excited to share that we're hiring for multiple roles on my team! Looking for talented Product Designers and UX Researchers. DM me if interested!",
      image: "",
      likes: 89,
      comments: 23,
      shares: 17,
      tags: ["hiring", "productdesign", "uxresearch"]
    },
    {
      id: 3,
      name: "Jordan Smith",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
      title: "Marketing Manager at GrowthCo",
      time: "1d ago",
      content: "Just published our latest case study on how we increased conversion rates by 43% through a series of A/B tests and UX improvements. Would love your thoughts!",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
      likes: 156,
      comments: 32,
      shares: 28,
      tags: ["marketing", "growth", "casestudy", "ux"]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Your Network Feed</h2>
        <button 
          className="btn-primary flex items-center gap-1.5"
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="w-4 h-4" />
          <span>Create Post</span>
        </button>
      </div>
      
      <div className="mb-6">
        <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar">
          <span className="filter-chip active whitespace-nowrap">All</span>
          <span className="filter-chip whitespace-nowrap">Design</span>
          <span className="filter-chip whitespace-nowrap">Engineering</span>
          <span className="filter-chip whitespace-nowrap">Marketing</span>
          <span className="filter-chip whitespace-nowrap">Startups</span>
          <span className="filter-chip whitespace-nowrap">Remote Work</span>
          <span className="filter-chip whitespace-nowrap">Career Tips</span>
        </div>
      </div>
      
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      
      {isModalOpen && <PostCreationModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default NetworkingFeed;
