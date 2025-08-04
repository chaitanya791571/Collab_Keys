import React, { useState } from "react";
import Modal from "./Modal";

const ResourceCard = ({ course }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {

    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="resource-card">
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${course.progress}%` }}></div>
      </div>
      <span className={`badge ${course.badge.toLowerCase()}`}>{course.badge}</span>
      <h3>{course.title}</h3>
      <p className="short-description">{course.description}</p>
      <button className="quick-view-btn" onClick={openModal}>Quick View</button>

      {isModalOpen && <Modal course={course} closeModal={closeModal} />}
    </div>
  );
};

export default ResourceCard;
