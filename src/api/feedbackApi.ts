import axios from 'axios';

const API_URL = 'http://localhost:3001';

export interface Feedback {
  id?: number;
  name: string;
  email: string;
  rating: number;
  comments: string;
  created_at?: string;
}

export const getAllFeedback = async (): Promise<Feedback[]> => {
  try {
    const response = await axios.get(`${API_URL}/api/feedback`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback:', error);
    throw error;
  }
};

export const getFeedbackById = async (id: number): Promise<Feedback> => {
  try {
    const response = await axios.get(`${API_URL}/api/feedback/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching feedback with ID ${id}:`, error);
    throw error;
  }
};

export const createFeedback = async (feedback: Feedback): Promise<Feedback> => {
  try {
    const response = await axios.post(`${API_URL}/api/feedback`, feedback);
    return response.data;
  } catch (error) {
    console.error('Error creating feedback:', error);
    throw error;
  }
};

export const updateFeedback = async (id: number, feedback: Feedback): Promise<Feedback> => {
  try {
    const response = await axios.put(`${API_URL}/api/feedback/${id}`, feedback);
    return response.data;
  } catch (error) {
    console.error(`Error updating feedback with ID ${id}:`, error);
    throw error;
  }
};

export const deleteFeedback = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/api/feedback/${id}`);
  } catch (error) {
    console.error(`Error deleting feedback with ID ${id}:`, error);
    throw error;
  }
};