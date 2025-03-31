
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

interface UserAvatarProps {
  src: string | null;
  fallback: string;
  className?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, fallback, className = '' }) => {
  const [imageError, setImageError] = useState(false);
  
  // Get initials from fallback text (up to 2 characters)
  const initials = fallback
    .split(' ')
    .map(part => part[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();
  
  return (
    <Avatar className={className}>
      {src && !imageError ? (
        <AvatarImage 
          src={src} 
          alt={fallback}
          onError={() => setImageError(true)}
        />
      ) : null}
      <AvatarFallback>
        {initials || <User className="h-4 w-4" />}
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
