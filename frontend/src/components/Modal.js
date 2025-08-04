import React, { useState } from "react";

const Modal = ({ course, closeModal }) => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="modal1">
      <div className="modal1-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h3>{course.title}</h3>

        {/* Tab Navigation */}
        <div className="tabs">
          {["overview", "youtube", "freeCourses", "downloads"].map((tab) => (
            <button
              key={tab}
              className={`tablinks ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.replace(/([A-Z])/g, " $1").trim()}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tabcontent">
          {activeTab === "overview" && (
            <div className="tab-panel">
              <p>{course.modalContent.overview}</p>
            </div>
          )}

          {activeTab === "youtube" && (
            <div className="tab-panel">
              {course.modalContent.youtube.map((url, index) => (
                <iframe
                  key={index}
                  width="100%"
                  height="315"
                  src={url}
                  title={`YouTube Video ${index + 1} for ${course.title}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              ))}
            </div>
          )}

          {activeTab === "freeCourses" && (
            <div className="tab-panel">
              <ul>
                {course.modalContent.freeCourses.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "downloads" && (
            <div className="tab-panel">
              <ul>
              {course.modalContent.downloads.map((item, index) => (
                <li>
                  <a key={index} href={item.link} className="resource-link">
                  {item.name}
                  </a>
                </li>  
              ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
