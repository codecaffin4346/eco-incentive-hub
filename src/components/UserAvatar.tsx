
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

interface UserAvatarProps {
  src: string | null;
  fallback: string;
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, fallback, className = '' }) => {
  return (
    <Avatar className={className}>
      {src ? (
        <AvatarImage 
          src={src} 
          alt={fallback}
          onError={(e) => {
            // If image fails to load, the AvatarFallback will be shown
            const imgElement = e.currentTarget as HTMLImageElement;
            imgElement.style.display = 'none';
          }} 
        />
      ) : null}
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
