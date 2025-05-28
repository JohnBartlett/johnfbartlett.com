import { useState } from 'react';

interface UseMobileMenuReturn {
  isMobileMenuOpen: boolean;
  isServicesDropdownOpen: boolean;
  isIndustriesDropdownOpen: boolean;
  toggleMobileMenu: () => void;
  toggleServicesDropdown: () => void;
  toggleIndustriesDropdown: () => void;
}

export const useMobileMenu = (): UseMobileMenuReturn => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState<boolean>(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
    
    // If opening services dropdown, close industries dropdown
    if (!isServicesDropdownOpen) {
      setIsIndustriesDropdownOpen(false);
    }
  };

  const toggleIndustriesDropdown = () => {
    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen);
    
    // If opening industries dropdown, close services dropdown
    if (!isIndustriesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  return {
    isMobileMenuOpen,
    isServicesDropdownOpen,
    isIndustriesDropdownOpen,
    toggleMobileMenu,
    toggleServicesDropdown,
    toggleIndustriesDropdown
  };
};
