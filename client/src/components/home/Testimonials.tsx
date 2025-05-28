const Testimonials = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Client Success Stories</h2>
          <p className="text-lg max-w-3xl mx-auto">
            What our clients say about working with JF Bartlett & Associates
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-neutral-light rounded-xl p-8 shadow-md relative">
            <div className="absolute -top-4 left-8 text-6xl text-primary opacity-20">"</div>
            <div className="relative z-10">
              <p className="text-lg italic mb-6">
                For placeholder testimonials: We'll showcase real client success stories and experiences working with JF Bartlett & Associates.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-neutral-medium rounded-full flex items-center justify-center">
                  <i className="fas fa-user text-primary"></i>
                </div>
                <div className="ml-4">
                  <p className="font-semibold">Client Name</p>
                  <p className="text-sm text-neutral-dark">Position, Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
