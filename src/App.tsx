import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FeedbackFormPage from './pages/FeedbackFormPage';
import AdminPage from './pages/AdminPage';
import EditFeedbackPage from './pages/EditFeedbackPage';
import AuthPages from './pages/AuthPages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackFormPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/edit/:id" element={<EditFeedbackPage />} />
          <Route path="/auth" element={<AuthPages />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;