import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../styles/About.css"; // Add your CSS file path here
import  { Link } from "react-router-dom";
import HOD from "../img/About/Veeranna_sir.jpg";
import Incharge from "../img/About/Naresh_sir1.jpg";
import Chaitanya from "../img/Team members/Chaitanya1.jpg";
import Shasank from "../img/Team members/Shasank.jpg";

const About = () => {
  return (
    <>
    <div className="acontainer">
      <div className="intro">
        <h1>Welcome to CollabKeys – Empowering Tomorrow’s Innovators!</h1>
        <p>
          As the AI & Data Science Association at Sai Spurthi Institute Of Technology, we inspire students to explore technology through events, career guidance, and free resources. Discover our Events page for tech workshops and discussions, Career Paths for personalized roadmaps, and Free Resources for curated courses and coding challenges. Our AI-powered chatbot provides real-time assistance for learning and career advice. Join CollabKeys to unlock your potential, embrace innovation, and shape your future in AI, Data Science, and tech.
        </p>
      </div>

      <div className="profiles">
        {/* HOD Profile */}
        <ProfileCard 
          imgSrc={HOD}
          name="Dr. T. VEERANNA" 
          title="Department of AI & Data Science" 
          description="The HOD is a driving force behind the department, guiding students and faculty in embracing AI and Data Science innovations to make meaningful contributions."
          Link1={<i className="fa fa-envelope"></i>}
        />
        
        {/* President Profile */}
        <ProfileCard 
          imgSrc={Incharge} 
          name="V. NARESH" 
          title="President, CollabKeys" 
          description="The President leads CollabKeys with a passion for AI and Data Science, encouraging students to participate actively in events and explore tech-related opportunities."
          Link2={<i className="fa fa-envelope"></i>}
        />
      </div>

      <h1 className="develop">Developed By</h1>
      <div className="profiles">
        <ProfileCard 
          imgSrc={Shasank} 
          name="J. Shiva Shasank" 
          title="Student of Dept. of AI & Data Science" 
          description="Shasank specializes in crafting visually appealing and highly interactive web pages. With a strong background in design and development, Shasank focuses on building intuitive user interfaces and optimizing performance for a smooth user experience across all devices."
          Link3={<i className="fa fa-envelope"></i>}
          Link5={<i className="fa-brands fa-linkedin"></i>}
        />
        <ProfileCard 
          imgSrc={Chaitanya}
          name="M. Siva Chaitanya" 
          title="Student of Dept. of AI & Data Science" 
          description="Chaitanya is a dedicated backend developer with extensive experience in building and maintaining scalable server-side applications. Chaitanya ensures that the backend architecture is robust and capable of handling high traffic and complex operations."
          Link4={<i className="fa fa-envelope"></i>}
          Link6={<i className="fa-brands fa-linkedin"></i>}
        />
      </div>  

      <div className="student">
      <Link to="/team">
          <p><i className="fa-solid fa-angles-right"></i>&nbsp;&nbsp; Click to know about the team of CollabKeys &nbsp;&nbsp;<i className="fa-solid fa-angles-left"></i></p>
          </Link>
      </div>
    </div>

    </>
  );
};

export default About;
