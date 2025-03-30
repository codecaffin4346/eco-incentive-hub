
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  linkText: string;
  linkTo: string;
  imageUrl: string;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  linkText,
  linkTo,
  imageUrl,
}: FeatureCardProps) => {
  return (
    <div className="eco-card overflow-hidden group">
      <div className="h-48 overflow-hidden relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-eco-green text-white p-2 rounded-full">
          <Icon className="h-6 w-6" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-eco-green-dark mb-2">{title}</h3>
        <p className="text-eco-gray-dark mb-4">{description}</p>
        <Link to={linkTo}>
          <Button
            variant="link"
            className="p-0 text-eco-green hover:text-eco-green-dark"
          >
            {linkText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
