import React from "react";
import CareerBox from "../components/CareerBox";
import "../styles/Stylex.css"; // Add your CSS file path
import SD from "../img/Careerpath/SoftwareDevelopment.jpg"
import DS from "../img/Careerpath/DataScience.jpg"
import Cloud from "../img/Careerpath/CloudComputing.jpg"
import AIML from "../img/Careerpath/AI&ML.jpg"
import Cyber from "../img/Careerpath/Cyber.jpg"
const CareerPath = () => {
  return (
    <>
    <div className="career-paths">
      <h1>Career Paths</h1>
      <p><b>Discover Your Perfect Career Path</b></p>

      <div className="career-grid">
        {/* Career Boxes */}
        <CareerBox 
          imgSrc={SD} 
          title="Software Development" 
          link="course.html" 
          briefDescription="Learn to build modern software solutions and applications..."
          details={[
            "Learning programming languages (Python, Java, C++)",
            "Understanding version control (Git)",
            "Building projects and learning frameworks",
            "Mastering data structures and algorithms"
          ]}
        />

        <CareerBox 
          imgSrc={DS}
          title="Data Science & Analytics" 
          link="course.html" 
          briefDescription="Explore data analysis, machine learning, and big data..."
          details={[
            "Learning programming languages (Python, R) for data analysis",
            "Mastering data manipulation and cleaning (Pandas, NumPy)",
            "Understanding data visualization tools (Matplotlib, Seaborn, Tableau)",
            "Learning statistical analysis and hypothesis testing",
            "Exploring machine learning models and algorithms",
            "Working with big data technologies (Hadoop, Spark)"
          ]}
        />

        <CareerBox 
          imgSrc={Cloud} 
          title="Cloud Computing" 
          link="course.html" 
          briefDescription="Become proficient in managing cloud infrastructure and services..."
          details={[
            "Understanding cloud computing platforms (AWS, Azure, Google Cloud)",
            "Learning about virtualization and containerization (Docker, Kubernetes)",
            "Exploring cloud architecture and infrastructure management",
            "Mastering cloud storage, databases, and networking services",
            "Implementing cloud security best practices and compliance",
            "Understanding cost management and scalability in the cloud"
          ]}
        />

        <CareerBox 
          imgSrc={AIML} 
          title="Artificial Intelligence & Machine Learning" 
          link="course.html" 
          briefDescription="Dive deep into AI models and machine learning algorithms..."
          details={[
            "Understanding machine learning algorithms (supervised, unsupervised, reinforcement learning)",
            "Learning programming languages (Python, R) and libraries (TensorFlow, PyTorch)",
            "Exploring deep learning, neural networks, and computer vision",
            "Building AI models and working with big data",
            "Learning about natural language processing (NLP)"
          ]}
        />

        <CareerBox 
          imgSrc={Cyber}
          title="Cyber Security" 
          link="course.html" 
          briefDescription="Learn to protect systems and data from cyber threats..."
          details={[
            "Learning about network security and firewalls",
            "Understanding cryptography and encryption techniques",
            "Mastering ethical hacking and penetration testing",
            "Learning how to protect against malware and cyber-attacks",
            "Exploring security compliance, laws, and regulations (GDPR, HIPAA)"
          ]}
        />
      </div>

      
    </div>
    
    </>
  );
};

export default CareerPath;
