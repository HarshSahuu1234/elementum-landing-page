import servicesImg from "../assets/Services.png";

const Services = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* Pixel-perfect Services section from Figma */}
      <img
        src={servicesImg}
        alt="What we can offer you - Services"
        className="w-full h-auto"
        draggable="false"
      />
    </section>
  );
};

export default Services;