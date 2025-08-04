// pages/Home.js
import React, { Suspense } from "react";
import { Link } from 'react-router-dom';
import EventTimeline from '../components/EventTimeline';
import "../styles/Stylex.css"; // Assuming your CSS is here

const Albums = React.lazy(() => import("../components/Album"));
const Chatbot = React.lazy(() => import("../components/Chatbot"));

const Home = () => {
  return (
    <main>
      <div className="announcement-bar">
        <Link to="/register">
          <div className="announcement-text" role="alert">
            🚨 Click here for <b>Registration</b> 🚨
          </div>
        </Link>
      </div>
      
      <section className="hero">
        <h1>COLLABKEYS Tech Club!</h1>
        <p>
          "Welcome to CollabKeys – where innovation, coding, and technology meet! Join us in discovering the latest in AI and Data Science while unlocking hidden talents through hands-on events, career insights, and free resources. Step into a world of opportunities designed to inspire and empower students like you".
        </p>
        <Link to="/about" className="button" aria-label="Learn more about CollabKeys">
          Explore More About Us
        </Link>
      <EventTimeline/>
      </section>
      <section >
        <Suspense fallback={<div>Loading Albums...</div>}>
          <Albums />
        </Suspense>
      </section>
      
      <Suspense fallback={<div>Loading Chatbot...</div>}>
        <Chatbot />
      </Suspense>
    </main>
  );
};

export default Home;
