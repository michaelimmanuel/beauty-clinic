import ServiceList from "../molecules/ServiceList";
import SectionTitle from "../atoms/SectionTitle";
export default function OurServices() {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <SectionTitle className="text-brown-dark font-bold text-center mb-10">Our Treatments</SectionTitle>
        <ServiceList />
      </div>
    </section>
  );
}