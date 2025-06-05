import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">Made with</p>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <p className="text-gray-600 text-sm">by FeedbackPro Team</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} FeedbackPro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;