import React, { useState } from "react";

const CareerBox = ({ imgSrc, title, briefDescription, details }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="career-box">
      <div className="career-content">
        <img src={imgSrc} alt={title} className="career-icon" />
        <h3><u>{title}</u></h3>
        <p className="brief-description">{briefDescription}</p>

        {isExpanded && (
          <div className="hidden-content">
            <p>This roadmap includes:</p>
            <ul>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
        
        <button className="read-more-btn" onClick={toggleContent}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default CareerBox;
