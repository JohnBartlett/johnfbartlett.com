interface IndustryCardProps {
  image: string;
  title: string;
  link: string;
}

const IndustryCard = ({ image, title, link }: IndustryCardProps) => (
  <a href={link} className="block group">
    <div className="relative rounded-lg overflow-hidden shadow-md h-64">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
        <div className="w-10 h-1 bg-secondary"></div>
      </div>
    </div>
  </a>
);

const IndustriesSection = () => {
  const industries = [
    {
      image: "https://pixabay.com/get/g68171c85a986721b2a8b23ab6792569ed021bcc18caf85bbcbde08075a4680ff158a679ad84d4b7b1786d12341d11e9ef0b15751110e7b1f0be9b1726275b798_1280.jpg",
      title: "Manufacturing & Logistics",
      link: "/industries#industries-manufacturing"
    },
    {
      image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Financial Services",
      link: "/industries#industries-financial"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Professional Services",
      link: "/industries#industries-professional"
    },
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Education & Non-profits",
      link: "/industries#industries-education"
    }
  ];

  return (
    <div className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Industries We Serve</h2>
          <p className="text-lg max-w-3xl mx-auto">Specialized AI expertise across diverse sectors</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              image={industry.image}
              title={industry.title}
              link={industry.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
