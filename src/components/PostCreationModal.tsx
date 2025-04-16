
import { Image, Link, Paperclip, Tag, X } from "lucide-react";
import { useState } from "react";

interface PostCreationModalProps {
  onClose: () => void;
}

const PostCreationModal = ({ onClose }: PostCreationModalProps) => {
  const [content, setContent] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");
  const [showTagInput, setShowTagInput] = useState(false);

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && newTag.trim()) {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-netconnect-dark-card rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold">Create a Post</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-4">
          <textarea
            placeholder="What would you like to share?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-40 p-3 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-netconnect-blue dark:focus:ring-netconnect-mint resize-none bg-white dark:bg-netconnect-dark-card"
          />
          
          {/* Tags Section */}
          <div className="mt-3">
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1">
                    <span className="text-sm">#{tag}</span>
                    <button onClick={() => handleRemoveTag(tag)}>
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {showTagInput ? (
              <div className="flex items-center mb-3">
                <span className="text-gray-500 mr-1">#</span>
                <input
                  type="text"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add a tag (press Enter)"
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm"
                  autoFocus
                />
                <button 
                  onClick={handleAddTag}
                  className="text-netconnect-blue dark:text-netconnect-mint text-sm font-medium"
                >
                  Add
                </button>
              </div>
            ) : null}
          </div>
          
          {/* File Upload Section */}
          <div className="mt-3 p-4 border border-dashed border-gray-200 dark:border-gray-700 rounded-lg text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <Image className="w-6 h-6 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Drag and drop an image, or
              <span className="text-netconnect-blue dark:text-netconnect-mint font-medium ml-1">browse</span>
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setShowTagInput(!showTagInput)}
              className={`p-2 rounded-full transition-colors ${showTagInput ? 'bg-gray-100 dark:bg-gray-800 text-netconnect-blue dark:text-netconnect-mint' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              <Tag className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Link className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-medium">
              Save Draft
            </button>
            <button className="btn-primary hover:animate-bounce-subtle">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreationModal;
