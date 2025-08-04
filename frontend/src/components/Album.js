import React, { useEffect, useRef } from 'react';
import '../styles/Stylex.css';
import IMG1 from '../img/Album/img1.jpg';
import IMG2 from '../img/Album/Home.jpg';
import IMG3 from '../img/Album/middle.jpg';
import IMG4 from '../img/Album/middle.jpeg';
import IMG5 from '../img/Album/last.jpg';


const Albums = () => {
  const slideRef = useRef(null);

  const next = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item');
      slideRef.current.appendChild(items[0]);
    }
  };

  const prev = () => {
    if (slideRef.current) {
      const items = slideRef.current.querySelectorAll('.item');
      slideRef.current.prepend(items[items.length - 1]);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="container">
      <div className="slide" ref={slideRef}>
        <div className="item" style={{ backgroundImage: `URL(${IMG2})` }}>
          <div className="content">
            
           {/* <div className="iname">Iceland</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur.</div>*/}
                      </div>
        </div>
        
        <div className="item" style={{ backgroundImage: `URL(${IMG1})` }}>
          <div className="content">
          <div className="iname">FreshersDay<br></br>2k23-2k24</div>
            <div className="des">Department of AI&DS</div>

          </div>
        </div>
        <div className="item" style={{ backgroundImage: `URL(${IMG3})` }}>
          <div className="content">
            <div className="iname">Sai Spurthi Institute of Technology</div>
            <div className="des"></div>
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `URL(${IMG4})` }}>
          <div className="content">
            {/* {<div className="iname">Netherlands</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur.</div>} */}
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `URL(${IMG5})` }}>
          <div className="content">
{/* {            <div className="iname">Ireland</div>
            <div className="des">Lorem ipsum dolor sit amet consectetur.</div> */}
          </div>
        </div>
      </div>

      <div className="button1">
        <button className="prev" onClick={prev}><i className="fa-solid fa-arrow-left"></i></button>
        <button className="next" onClick={next}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default Albums;
