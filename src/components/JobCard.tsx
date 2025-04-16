
import { ArrowRight, Clock, MapPin } from "lucide-react";

interface JobCardProps {
  company: string;
  logo: string;
  title: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  tags: string[];
}

const JobCard = ({
  company,
  logo,
  title,
  location,
  type,
  salary,
  posted,
  tags,
}: JobCardProps) => {
  return (
    <div className="card p-5 mb-4 hover:border-netconnect-mint dark:hover:border-netconnect-mint transition-colors">
      <div className="flex items-start gap-4">
        <img src={logo} alt={company} className="w-14 h-14 rounded-md object-contain bg-gray-100 dark:bg-gray-800 p-2" />
        <div className="flex-1">
          <h4 className="font-semibold text-lg mb-1">{title}</h4>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">{company}</p>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-3">
            <div className="flex items-center mr-3">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span>{location}</span>
            </div>
            <div className="flex items-center mr-3">
              <Clock className="w-3.5 h-3.5 mr-1" />
              <span>{type}</span>
            </div>
            <span className="mr-3">•</span>
            <span>{salary}</span>
            <span className="mx-1.5">•</span>
            <span>{posted}</span>
          </div>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="filter-chip text-xs py-1 px-3">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <button className="job-apply-btn">
              <span>Apply with Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="text-netconnect-blue dark:text-netconnect-mint font-medium text-sm hover:underline">
              Save Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
