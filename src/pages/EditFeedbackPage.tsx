import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, ArrowLeft } from "lucide-react";
import { getFeedbackById } from "../api/feedbackApi";
import type { Feedback } from "../api/feedbackApi";
import FeedbackForm from "../components/FeedbackForm";

const EditFeedbackPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeedback = async () => {
      if (!id) return;

      try {
        setIsLoading(true);
        setError(null);
        const data = await getFeedbackById(parseInt(id));
        setFeedback(data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
        setError(
          "Failed to load feedback. It may have been deleted or does not exist."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedback();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="w-8 h-8 text-blue-600 animate-spin" />
        <span className="ml-2 text-gray-600">Loading feedback...</span>
      </div>
    );
  }

  if (error || !feedback) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-6">
          <p className="text-red-700">{error || "Feedback not found"}</p>
        </div>
        <button
          onClick={() => navigate("/admin")}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white border-blue-600 hover:bg-blue-50"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Admin
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate("/admin")}
        className="inline-flex items-center mb-6 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white border-blue-600 hover:bg-blue-50"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Admin
      </button>

      <div className="bg-white shadow rounded-lg p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Edit Feedback
          </h1>
          <p className="text-gray-600">Update the feedback details below</p>
        </div>

        <FeedbackForm initialData={feedback} isEditing={true} />
      </div>
    </div>
  );
};

export default EditFeedbackPage;
