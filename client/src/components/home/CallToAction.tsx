import { Link } from 'wouter';

const CallToAction = () => {
  return (
    <div className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform Your Business with AI?</h2>
          <p className="text-lg mb-8">
            Schedule a consultation to discuss how AI can transform your business operations.
          </p>
          <Link href="/contact" className="inline-block bg-secondary hover:bg-opacity-90 text-white py-3 px-8 rounded-md shadow-lg font-medium transition transform hover:scale-105 text-lg">
            Schedule Your Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
