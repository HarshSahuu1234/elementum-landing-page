import subscribeImg from "../assets/subsribe.png";
import ellipseImg from "../assets/Ellipse.png";
import vectorImg from "../assets/Vector 1.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#E8F4F0] pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">

      {/* Purple Ellipse - properly pinned to the right edge of the screen, away from the text */}
      <img
        src={ellipseImg}
        alt="Decorative ellipse"
        className="absolute hidden md:block z-0 pointer-events-none"
        style={{ top: '10%', right: '-10px', width: '200px', height: '200px', transform: 'rotate(-120deg)' }}
      />

      {/* Top Section - Newsletter */}
      <div className="max-w-4xl mx-auto text-center relative mb-32">

        {/* Arrow 1 - first arrow from Vector 1.png */}
        <img
          src={vectorImg}
          alt="Decorative arrow 1"
          className="absolute hidden md:block z-0 pointer-events-none"
          style={{ top: '-90px', left: '25%', width: '90px', height: 'auto' }}
        />

        {/* Arrow 2 - second arrow from Vector 1.png */}
        <img
          src={vectorImg}
          alt="Decorative arrow 2"
          className="absolute hidden md:block z-0 pointer-events-none"
          style={{ top: '-90px', left: '38%', width: '90px', height: 'auto' }}
        />

        {/* Pixel-perfect newsletter from Figma */}
        <div className="flex justify-center relative z-10 w-full pt-8">
          <img
            src={subscribeImg}
            alt="Subscribe to our newsletter"
            className="w-full max-w-4xl h-auto relative z-10"
            draggable="false"
          />
        </div>
      </div>

      <div className="w-full h-[1px] bg-black/20 mb-16 max-w-7xl mx-auto"></div>

      {/* Grid Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16 text-black/80 font-light">

        {/* Company */}
        <div className="space-y-6 text-sm">
          <h4 className="text-lg font-medium text-black mb-8">Company</h4>
          <a href="#" className="block hover:text-black">Home</a>
          <a href="#" className="block hover:text-black">Studio</a>
          <a href="#" className="block hover:text-black">Service</a>
          <a href="#" className="block hover:text-black">Blog</a>
        </div>

        {/* Terms & Policies */}
        <div className="space-y-6 text-sm">
          <h4 className="text-lg font-medium text-black mb-8">Terms & Policies</h4>
          <a href="#" className="block hover:text-black">Privacy Policy</a>
          <a href="#" className="block hover:text-black">Terms & Conditions</a>
          <a href="#" className="block hover:text-black">Explore</a>
          <a href="#" className="block hover:text-black">Accesibility</a>
        </div>

        {/* Follow Us */}
        <div className="space-y-6 text-sm">
          <h4 className="text-lg font-medium text-black mb-8">Follow Us</h4>
          <a href="#" className="block hover:text-black">Instagram</a>
          <a href="#" className="block hover:text-black">LinkedIn</a>
          <a href="#" className="block hover:text-black">Youtube</a>
          <a href="#" className="block hover:text-black">Twitter</a>
        </div>

        {/* Terms & Policies (contact info) - Figma shows this heading */}
        <div className="space-y-6 text-sm flex flex-col justify-start">
          <h4 className="text-lg font-medium text-black mb-8">Terms & Policies</h4>
          <p className="max-w-[150px]">
            1498w Fluton ste, STE 2D Chicgo, IL 63867.
          </p>
          <p>
            (123) 456789000
          </p>
          <a href="mailto:info@elementum.com" className="hover:text-black font-medium">info@elementum.com</a>
        </div>
      </div>

      <div className="text-center text-sm text-black/60 font-medium">
        ©2023 Elementum. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;