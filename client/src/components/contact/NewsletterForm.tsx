import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';

const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' })
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

const NewsletterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/newsletter-signup', data);
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-neutral-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    {...field} 
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-secondary hover:bg-opacity-90 text-white py-2 px-4 rounded-md transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsletterForm;
