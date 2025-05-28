import { useState, useEffect } from 'react';

interface UseScrollProps {
  threshold?: number;
}

interface UseScrollReturn {
  isScrolled: boolean;
  scrollY: number;
}

export const useScroll = (threshold: number = 50): UseScrollReturn => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > threshold);
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Call handler right away to update initial state
    handleScroll();
    
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return { isScrolled, scrollY };
};
