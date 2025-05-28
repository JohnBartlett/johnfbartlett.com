import { Link } from 'wouter';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Modern office with technology screens displaying AI visualizations */}
      <img 
        src="https://pixabay.com/get/gd1e0f8efb6621e93d029119c5fea84c53c39989a4e51ced8bb3db6138ebfff20b14f841d54d7f30149e8169dc565571a9db550dcf1c7d0214eb678e54c65083d_1280.jpg" 
        alt="Modern office with AI technology displays" 
        className="w-full h-[60vh] md:h-[80vh] object-cover"
      />
      
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Strategic AI Implementation for Business Growth
            </h1>
            <p className="text-lg md:text-xl text-white opacity-90 mb-8">
              JF Bartlett & Associates helps businesses in St. Petersburg and beyond harness the power of artificial intelligence to solve real business challenges.
            </p>
            <Link href="/contact" className="inline-block bg-secondary hover:bg-opacity-90 text-white py-3 px-6 rounded-md shadow-lg font-medium transition transform hover:scale-105">
                Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
