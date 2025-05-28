import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to scroll to an element by ID with offset for header
export function scrollToElement(elementId: string, offset: number = 80) {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    return true;
  }
  return false;
}

// Function to handle anchor links
export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  
  // If it's an anchor link
  if (href.startsWith('#')) {
    const id = href.substring(1);
    scrollToElement(id);
  } 
  // If it's a path with an anchor
  else if (href.includes('#')) {
    const [path, id] = href.split('#');
    
    // If we're already on the correct path
    if (window.location.pathname === path || (path === '' && window.location.pathname === '/')) {
      scrollToElement(id);
    } else {
      // Navigate to the path and then scroll
      window.location.href = href;
    }
  } 
  // Regular navigation
  else {
    window.location.href = href;
  }
}

// Format a date
export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return new Date(date).toLocaleDateString('en-US', options);
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
}
