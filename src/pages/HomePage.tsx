import { Link } from "react-router-dom";
import { MessageSquare, List, Star } from "lucide-react";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          We Value Your <span className="text-blue-600">Feedback</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Help us improve our products and services by sharing your experience
          with us. Your opinion matters and drives our continuous improvement.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/feedback"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Submit Feedback
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 text-blue-600 mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Submit Your Feedback
            </h3>
            <p className="text-gray-600">
              Fill out our simple form with your name, email, rating, and
              comments about your experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 text-blue-600 mb-4">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Rate Your Experience
            </h3>
            <p className="text-gray-600">
              Let us know how satisfied you were with our products or services
              on a scale from 1 to 5 stars.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-100 text-blue-600 mb-4">
              <List className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              We Review and Improve
            </h3>
            <p className="text-gray-600">
              Our team carefully reviews all feedback and implements
              improvements based on your suggestions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
