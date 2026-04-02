import { motion } from "framer-motion";
import featuresImg from "../assets/body a features.png";
import featuresBImg from "../assets/body b features.png";

const Features = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-white">
      
      {/* Ellipse Gradient Effect - top middle */}
      <div className="absolute top-[5%] left-[48%] md:left-[55%] w-[166px] h-[166px] rounded-full bg-[#FF7171]/20 blur-[50px] z-0 pointer-events-none"></div>

      {/* Vector 2516 - Wavy red line (subtle curved line across the section) */}
      <svg className="absolute top-[20%] left-0 w-full h-[698px] hidden md:block -rotate-[3.88deg] pointer-events-none z-0" style={{filter: 'drop-shadow(0px 16px 12px rgba(0,0,0,0.08))'}} viewBox="0 0 1440 698" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 100 Q 200 -50, 400 150 T 800 400 T 1200 200 T 1440 350" stroke="#FF6D6D" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Feature 1: Tomorrow should be better... */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16 mb-40">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 relative z-10"
        >
          {/* Pixel-perfect feature 1 text block from Figma */}
          <img
            src={featuresImg}
            alt="Tomorrow should be better than today"
            className="w-full h-auto"
            draggable="false"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-end relative"
        >
          {/* Red triangle top-right corner of image area - matching Figma */}
          <svg className="absolute -top-4 right-[10%] w-[80px] h-[78px] hidden md:block z-20" viewBox="0 0 274 267" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="137,0 274,267 0,267" fill="#FF7171" />
          </svg>
          
          {/* Circular mask for image */}
          <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden relative z-10 border-4 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop" 
              alt="Business Meeting" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>


      {/* Feature 2: See how we can help... */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 pl-0 md:pl-20 relative z-10"
        >
          {/* Pixel-perfect feature 2 text block from Figma */}
          <img
            src={featuresBImg}
            alt="See how we can help you progress"
            className="w-full h-auto"
            draggable="false"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center md:justify-start relative"
        >
          {/* Polygon 1 - Red triangle top-left (smaller, matching Figma) */}
          <svg className="absolute -top-6 -left-4 w-[100px] h-[97px] hidden md:block rotate-[15deg] z-20" viewBox="0 0 274 267" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="137,0 274,267 0,267" fill="#FF7171" />
          </svg>
          {/* Polygon 2 - Red triangle bottom-right (matching Figma proportions) */}
          <svg className="absolute -bottom-6 right-[5%] w-[160px] h-[156px] hidden md:block rotate-[-20deg] z-20" viewBox="0 0 274 267" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="137,0 274,267 0,267" fill="#FF7171" />
          </svg>
          
          {/* Circular mask for image */}
          <div className="w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden relative z-10 border-4 border-white shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" 
              alt="People Working" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Features;
