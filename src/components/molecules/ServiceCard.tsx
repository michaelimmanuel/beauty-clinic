import React from "react";

interface ServiceCardProps {
  title: string;
  imageSrc: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 bg-black/50 
          flex items-center justify-center 
          opacity-100 md:opacity-0 md:group-hover:opacity-100 
          transition-opacity duration-300
        "
      >
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default ServiceCard;