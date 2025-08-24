import ServiceCard from "./ServiceCard";

const services = [
  { title: "Laser", imageSrc: "/images/laser.jpg" },
  { title: "Facial", imageSrc: "/images/facial.jpg" },
  { title: "Hifu", imageSrc: "/images/hifu.webp" },
  { title: "Mesotherapy", imageSrc: "/images/mesotherapy.jpeg" },
  { title: "Thread Lift", imageSrc: "/images/threadLift.webp" },
  { title: "Botox", imageSrc: "/images/botox.jpg" },
  { title: "Fillers", imageSrc: "/images/fillers.png" },
];

export default function ServiceList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          imageSrc={service.imageSrc}
        />
      ))}
    </div>
  );
}
