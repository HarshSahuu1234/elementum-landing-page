import { motion } from "framer-motion";
import testimonialsHeadImg from "../assets/Testimonials.png";
import testimonialsMsgImg from "../assets/msg testimonials.png";

const Testimonials = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-white">

      {/* Title - pixel-perfect from Figma */}
      <div className="text-center mb-20">
        <img
          src={testimonialsHeadImg}
          alt="What our customer says About Us"
          className="w-auto h-auto mx-auto max-w-full"
          draggable="false"
        />
      </div>

      {/* Main Quote Bubble and Floating Portraits */}
      <div className="relative max-w-4xl mx-auto h-auto min-h-[450px] flex items-center justify-center">

        {/* Quote Card - pixel-perfect from Figma */}
        <img
          src={testimonialsMsgImg}
          alt="Elementum delivered the site within the timeline as they requested."
          className="w-full max-w-2xl h-auto relative z-20"
          draggable="false"
        />

        {/* --- Floating Portraits - Positioned OUTSIDE card to avoid text overlap --- */}

        {/* Left top - small circular portrait */}
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=200&auto=format&fit=crop"
          className="absolute left-[5%] md:left-[2%] -top-8 w-20 h-20 md:w-24 md:h-24 rounded-full object-cover z-10"
        />

        {/* Left middle - larger portrait, positioned to left of card */}
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
          className="absolute -left-[8%] md:-left-[5%] top-[35%] w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-white object-cover z-30 shadow-lg"
        />

        {/* Left tiny */}
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=150&auto=format&fit=crop"
          className="absolute -left-[12%] md:-left-[8%] top-[15%] w-12 h-12 md:w-14 md:h-14 rounded-full object-cover z-10"
        />

        {/* Left bottom */}
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          src="https://images.unsplash.com/photo-1520155707862-5b3281538846?q=80&w=200&auto=format&fit=crop"
          className="absolute left-[2%] md:left-[0%] -bottom-4 w-20 h-20 md:w-24 md:h-24 rounded-full object-cover z-30"
        />

        {/* Right top */}
        <motion.img
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
          className="absolute right-[5%] md:right-[2%] -top-6 w-24 h-24 md:w-28 md:h-28 rounded-full object-cover z-10"
        />

        {/* Right middle */}
        <motion.img
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=200&auto=format&fit=crop"
          className="absolute -right-[5%] md:-right-[3%] top-[45%] w-20 h-20 md:w-24 md:h-24 rounded-full border border-black/10 object-cover z-30"
        />

        {/* Right tiny */}
        <motion.img
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=150&auto=format&fit=crop"
          className="absolute -right-[2%] md:right-[0%] top-[20%] w-12 h-12 md:w-14 md:h-14 rounded-full object-cover z-10"
        />

        {/* Right bottom - larger portrait */}
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop"
          className="absolute -right-[10%] md:-right-[6%] -bottom-8 w-32 h-32 md:w-44 md:h-44 rounded-full object-cover z-30 shadow-2xl border-4 border-white"
        />

      </div>

    </section>
  );
};

export default Testimonials;