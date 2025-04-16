
import { Heart, MessageCircle, Share, Smile } from "lucide-react";

interface PostCardProps {
  name: string;
  avatar: string;
  title: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

const PostCard = ({
  name,
  avatar,
  title,
  time,
  content,
  image,
  likes,
  comments,
  shares,
  tags,
}: PostCardProps) => {
  return (
    <div className="card p-5 mb-5">
      <div className="flex items-center mb-4">
        <img src={avatar} alt={name} className="w-11 h-11 avatar mr-3" />
        <div>
          <h4 className="font-semibold text-base">{name}</h4>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>{title}</span>
            <span className="mx-1.5">•</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-base mb-2">{content}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="text-netconnect-blue dark:text-netconnect-mint text-sm hover:underline cursor-pointer">
              #{tag}
            </span>
          ))}
        </div>
        {image && (
          <div className="rounded-lg overflow-hidden mt-3">
            <img src={image} alt="Post image" className="w-full h-auto object-cover hover-glow" />
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
        <div className="post-interaction">
          <Heart className="w-5 h-5" />
          <span>{likes}</span>
        </div>
        <div className="post-interaction">
          <MessageCircle className="w-5 h-5" />
          <span>{comments}</span>
        </div>
        <div className="post-interaction">
          <Share className="w-5 h-5" />
          <span>{shares}</span>
        </div>
        <div className="post-interaction">
          <Smile className="w-5 h-5" />
          <span>React</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
