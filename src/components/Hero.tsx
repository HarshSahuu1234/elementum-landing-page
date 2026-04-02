import { motion } from "framer-motion";
import headImg from "../assets/head.png";

const Hero = () => {
  return (
    <section className="relative w-full pt-40 pb-20 overflow-hidden flex flex-col items-center justify-center text-center px-6 bg-white">
      
      {/* Background Decorative Elements */}
      {/* Red arc - partial circle outline top-left */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
        className="absolute top-20 left-10 md:left-20 w-28 h-28 border-[3px] border-red-400 rounded-full border-l-transparent border-t-transparent origin-center -rotate-45 hidden md:block"
      />
      {/* Purple half-circle decoration - top right */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
        className="absolute top-32 right-10 md:right-24 w-[140px] h-[140px] bg-[#934CEC] rounded-t-full rotate-[60deg] hidden md:block"
      />

      {/* Main Heading Content - pixel-perfect image from Figma */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <img
          src={headImg}
          alt="The thinkers and doers were changing the status Quo with"
          className="w-full h-auto"
          draggable="false"
        />
      </div>

      {/* Vector 2511 - Dark curved bracket */}
      <svg className="absolute left-[53px] top-[600px] w-[76px] h-[347px] hidden md:block" viewBox="0 0 76 347" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 68 8 C 68 90, 8 90, 8 173.5 S 68 257, 68 339" stroke="#0E0E0E" strokeWidth="8" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Vector 2510 - Red curved bracket */}
      <svg className="absolute left-[-9px] top-[600px] w-[77px] h-[358px] hidden md:block" viewBox="0 0 77 358" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 69 8 C 69 93, 8 93, 8 179 S 69 265, 69 350" stroke="#FF7171" strokeWidth="8" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Floating Portraits Section */}
      <div className="relative w-full max-w-6xl mx-auto h-[400px] mt-20">
        
        {/* Profile 1 - Far Left */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" 
          alt="Team Member" 
          className="absolute left-0 bottom-10 w-32 h-32 md:w-44 md:h-44 rounded-full object-cover z-20"
        />

        {/* Profile 2 - Mid Left */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
          alt="Team Member" 
          className="absolute left-[18%] top-10 w-24 h-24 md:w-32 md:h-32 rounded-full object-cover z-10"
        />

        {/* Profile 3 - Center Bottom */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
          alt="Team Member" 
          className="absolute left-[38%] bottom-0 w-36 h-36 md:w-48 md:h-48 rounded-full object-cover z-30 shadow-xl"
        />

        {/* Profile 4 - Center Top */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
          alt="Team Member" 
          className="absolute left-[55%] top-[10%] w-28 h-28 md:w-36 md:h-36 rounded-full object-cover z-20"
        />

        {/* Profile 5 - Mid Right */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop" 
          alt="Team Member" 
          className="absolute right-[15%] bottom-10 w-32 h-32 md:w-44 md:h-44 rounded-full object-cover z-10"
        />

        {/* Profile 6 - Far Right */}
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop" 
          alt="Team Member" 
          className="absolute right-0 top-20 w-24 h-24 md:w-32 md:h-32 rounded-full object-cover z-20"
        />

      </div>

    </section>
  );
};

export default Hero;