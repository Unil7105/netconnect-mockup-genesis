
import { Briefcase, ExternalLink, Link, MapPin, PlusCircle } from "lucide-react";

const ProfileScreen = () => {
  return (
    <div className="max-w-3xl mx-auto pb-8">
      <div className="relative mb-20">
        <div className="h-40 bg-gradient-to-r from-netconnect-blue to-netconnect-lilac rounded-b-3xl"></div>
        <div className="absolute -bottom-16 left-10 p-1 rounded-full bg-white dark:bg-netconnect-dark-card">
          <div className="p-0.5 rounded-full bg-gradient-to-r from-netconnect-blue to-netconnect-lilac">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" 
              alt="Profile" 
              className="w-28 h-28 avatar border-4 border-white dark:border-netconnect-dark-card" 
            />
          </div>
        </div>
        <div className="absolute right-6 -bottom-8 space-x-2">
          <button className="btn-primary">Connect</button>
          <button className="btn-secondary">Message</button>
        </div>
      </div>
      
      <div className="px-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-1">Sarah Anderson</h1>
            <p className="text-netconnect-blue dark:text-netconnect-mint font-medium mb-2">UX/UI Designer & Product Strategist</p>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
              <div className="flex items-center mr-4">
                <MapPin className="w-4 h-4 mr-1" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-4 h-4 mr-1" />
                <span>FutureUI Studio</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="badge badge-open">Open to Work</span>
              <span className="badge" style={{ backgroundColor: 'rgba(26, 188, 156, 0.1)', color: '#1ABC9C' }}>
                Remote
              </span>
            </div>
          </div>
        </div>
        
        <div className="card p-5 mb-6">
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
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Portfolio</h3>
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
        </div>
        
        <div className="card p-5">
          <h3 className="text-lg font-semibold mb-3">External Links</h3>
          <div className="space-y-3">
            <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline">
              <Link className="w-5 h-5 mr-2" />
              <span>portfolio.design</span>
            </a>
            <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline">
              <Link className="w-5 h-5 mr-2" />
              <span>dribbble.com/sarahanderson</span>
            </a>
            <a href="#" className="flex items-center text-netconnect-blue dark:text-netconnect-mint hover:underline">
              <Link className="w-5 h-5 mr-2" />
              <span>linkedin.com/in/sarahanderson</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
