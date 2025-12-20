import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: string;
  title: string;
  buttonText: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  buttonText,
  link,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col items-center justify-between text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      {/* Icon */}
      <img
        src={icon}
        alt={title}
        className="h-16 w-16 object-contain mb-4 rounded-full bg-primary/90 p-3"
      />

      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold text-dark mb-4">
        {title}
      </h3>

      {/* Button */}
      <Link
        to={link}
        className="border border-secondary text-secondary text-sm px-4 py-2 rounded-full flex items-center justify-center gap-1 hover:bg-secondary hover:text-white transition-colors"
      >
        {buttonText}
        <span className="ml-1">⟶</span>
      </Link>
    </div>
  );
};

export default ServiceCard;
