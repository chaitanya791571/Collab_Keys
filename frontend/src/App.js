// App.js
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import About from './pages/About';
import Events from './pages/Events';
import CareerPath from './pages/Careerpath';
import Team from './pages/Team';
import Contact from './pages/Contact';
import RegisterForm from './pages/Registration';
import LoginForm from './pages/Login';
import Albums from './components/Album';
import ProtectedRoute from './components/ProtectedRoute';
import ForgotPassword from './components/forgot';
import ResetPassword from './components/ResetPassword';
import CoursePage from './pages/Courses';
import ResourceCard from './components/ResourceCard';
import Modal from './components/Modal';
import EventTimeline from './components/EventTimeline';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);  // State for triggering refresh
  
  // Function to trigger the refresh
  const triggerRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);  // Update the key to trigger re-fetching in EventTimeline
  };
  return (
    <Router>
      <Navbar />  {/* Navbar is outside Routes to display on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careerpath" element={<CareerPath />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/events" element={<ProtectedRoute forEvents> <Events /> </ProtectedRoute>}/>
        <Route path="/album" element={<Albums />} />
        <Route path="/forgot" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/admin" element={<ProtectedRoute forAdmin><AdminDashboard triggerRefresh={triggerRefresh} refreshKey={refreshKey} /></ProtectedRoute>} />
        <Route path="/courses" element={<CoursePage />} />
        <Route path="/ResourceCard" element={<ResourceCard />} />
        <Route path="/Modal" element={<Modal />} /> 
        <Route path="/event-timeline" element={<EventTimeline triggerRefresh={triggerRefresh} refreshKey={refreshKey} />} />
        
        {/* Wildcard route to handle undefined paths */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
