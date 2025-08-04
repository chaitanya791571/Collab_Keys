import React from "react";
import { useState,useEffect } from "react";

const ProfileCard = ({ imgSrc, name, title, description,Link1,Link2,Link3,Link4,Link5,Link6}) => {
  const [emailHref1, setEmailHref1] = useState("");
  const [emailHref2, setEmailHref2] = useState("");
  const [emailHref3, setEmailHref3] = useState("");
  const [emailHref4, setEmailHref4] = useState("");
  const[linkedin1,setLinkedin1]=useState("");
  const[linkedin2,setLinkedin2]=useState("");
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobileMailLink = "mailto:veeru38@gmail.com";
    const desktopMailLink = "https://mail.google.com/mail/?view=cm&to=veeru38@gmail.com&su=&body=";

    setEmailHref1(isMobile ? mobileMailLink : desktopMailLink);
  }, []);
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobileMailLink = "mailto:vnnaresh2019@gmail.com";
    const desktopMailLink = "https://mail.google.com/mail/?view=cm&to=vnnaresh2019@gmail.com&su=&body=";

    setEmailHref2(isMobile ? mobileMailLink : desktopMailLink);
  }, []);
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobileMailLink = "mailto:jaladanishasank@gmail.com";
    const desktopMailLink = "https://mail.google.com/mail/?view=cm&to=jaladanishasank@gmail.com&su=&body=";

    setEmailHref3(isMobile ? mobileMailLink : desktopMailLink);
  }, []);
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mobileMailLink = "mailto:chaitanyamamilla47@gmail.com";
    const desktopMailLink = "https://mail.google.com/mail/?view=cm&to=chaitanyamamilla47@gmail.com&su=&body=";

    setEmailHref4(isMobile ? mobileMailLink : desktopMailLink);
  }, []);
  useEffect(() => {
    const desktopLink = "https://www.linkedin.com/in/shiva-shasank-jaladani-65a45b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    setLinkedin1(desktopLink);
  }, []);
  useEffect(() => {
    const desktopLink = "https://www.linkedin.com/in/sivachaitanya-mamilla-95b4b3279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    setLinkedin2(desktopLink);
  }, []);

  return (
    <div className="profile">
      <img src={imgSrc} alt={`${name} Image`} />
      <h3>{name}</h3>
      <p>{title}</p>
      <p>{description}</p>
      <a href={emailHref1} target="_blank" rel="noopener noreferrer">{Link1}</a>
      <a href={emailHref2} target="_blank" rel="noopener noreferrer">{Link2}</a>
      <a href={emailHref3} target="_blank" rel="noopener noreferrer">{Link3}</a>
      <a href={emailHref4} target="_blank" rel="noopener noreferrer">{Link4}</a>
      <a href={linkedin1} target="_blank" rel="noopener noreferrer">{Link5}</a>
      <a href={linkedin2} target="_blank" rel="noopener noreferrer">{Link6}</a>
    </div>
  );
};

export default ProfileCard;
