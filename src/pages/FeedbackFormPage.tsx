import FeedbackForm from '../components/FeedbackForm';

const FeedbackFormPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow rounded-lg p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Share Your Feedback</h1>
          <p className="text-gray-600">
            We value your opinion! Please tell us about your experience.
          </p>
        </div>
        
        <FeedbackForm />
      </div>
    </div>
  );
};

export default FeedbackFormPage;