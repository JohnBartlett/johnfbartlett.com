import { useEffect } from 'react';
import PageTitle from '@/components/shared/PageTitle';
import SectionTitle from '@/components/shared/SectionTitle';

const BlogPlaceholder = () => {
  useEffect(() => {
    // Update page title
    document.title = "Insights & Resources | JF Bartlett & Associates";
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <PageTitle 
          title="Insights & Resources" 
          subtitle="Stay informed about the latest trends and developments in AI for business." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for future blog posts */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-neutral-light rounded-lg p-6 shadow-md hover-translate">
              <div className="h-48 bg-neutral-medium rounded-md mb-4 flex items-center justify-center">
                <i className="fas fa-newspaper text-4xl text-neutral-dark opacity-50"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Future Blog Post Title</h3>
              <p className="mb-4">This section will be populated with informative articles, case studies, and resources related to AI implementation.</p>
              <p className="text-sm text-neutral-dark">Coming soon</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <SectionTitle title="Subscribe to Our Newsletter" subtitle="Get the latest AI insights and updates delivered to your inbox." />
          
          <div className="max-w-xl mx-auto">
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
              <button 
                type="submit" 
                className="bg-secondary hover:bg-opacity-90 text-white py-3 px-6 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPlaceholder;
