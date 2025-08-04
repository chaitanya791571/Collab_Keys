import React from 'react';
import '../styles/Team.css'; // Ensure this CSS file contains your original styles
import Teja from "../img/Team members/Teja.jpg";
import Navya from "../img/Team members/Navya.jpg";
import Deepak from "../img/Team members/Deepak.jpg";
import Srinadh from "../img/Team members/Srinadh.jpg";
import Chaitanya from "../img/Team members/Chaitanya1.jpg";
import Mounika from "../img/Team members/Mounika.jpg";
import Shasank from "../img/Team members/Shasank.jpg";
import Dinesh from "../img/Team members/Dinesh.jpg";
import Kishore from "../img/Team members/Kishore.jpg";
import Lokesh from "../img/Team members/Lokesh.jpg";
import Venky from "../img/Team members/Venky1.jpg";
import Naishitha from "../img/Team members/Naishitha.jpg";
import Saranya from "../img/Team members/Saranya.jpg";

const teamMembers = [
  {
    name: 'Teja Sri',
    image: Teja,
    description: 'Hi, I\'m Teja Sri from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: 'mailto:pandititejasri3207@gmail.com',
      Linkedin: '#'
    }
  },
  {
    name: 'Navya',
    image: Navya,
    description: 'Hi, I\'m Navya from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: 'mailto:navyareddyregalla@gmail.com',
      Linkedin: '#'
    }
  },
  {
    name: 'Deepak',
    image: Deepak,
    description: 'Hi, I\'m Deepak from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: 'mailto:deepakmallisetti@gmail.com',
      Linkedin: '#'
    }
  },
  {
    name: 'Lokesh',
    image: Lokesh,
    description: 'Hi, I\'m Lokesh from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: '#',
      Linkedin: '#'
    }
  },
  
  
  {
    name: 'Kishore',
    image: Kishore,
    description: 'Hi, I\'m Kishore from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: 'mailto:reddykishore342@gmail.com',
      Linkedin: 'https://www.linkedin.com/in/kishore-reddy-7508a822a/'
    }
  },
  {
    name: 'Mounika',
    image: Mounika,
    description: 'Hi, I\'m Mounika from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: 'mailto:mounikadevarapu09@gmail.com',
      Linkedin: 'https://www.linkedin.com/in/d-mounika-3316ab351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  },
  
  {
    name: 'Shiva Shasank',
    image: Shasank,
    description: 'Hi, I\'m Shiva Shasank from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: "mailto:jaladanishasank@gmail.com",
      Linkedin: 'https://www.linkedin.com/in/shiva-shasank-jaladani-65a45b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    }
  },
  
  {
    name: 'Srinadh',
    image: Srinadh,
    description: 'Hi, I\'m Srinadh from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: 'mailto:srinadhpennada1308@gmail.com',
      Linkedin: 'https://www.linkedin.com/in/srinadh-pennada-81a521341/'
    }
  },
  {
    name: 'Chiatanya',
    image: Chaitanya,
    description: 'Hi, I\'m Chiatanya from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: 'mailto:chaitanyamamilla47@gmail.com',
      Linkedin: 'https://www.linkedin.com/in/sivachaitanya-mamilla-95b4b3279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }
  },
  {
    name: 'Naishitha',
    image: Naishitha,
    description: 'Hi, I\'m Naishitha from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: '#',
      Linkedin: '#'
    }
  },
{
    name: 'Dinesh',
    image: Dinesh,
    description: 'Hi, I\'m Dinesh from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: 'mailto:dineshpadamati7@gmail.com',
      Linkedin: 'https://www.linkedin.com/in/dinesh-padamati-a2ba4330b/'
    }
  },
  
  {
    name: 'Saranya',
    image: Saranya,
    description: 'Hi, I\'m Saranya from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: '#',
      Linkedin: '#'
    }
  },
  {
    name: 'Venky',
    image: Venky,
    description: 'Hi, I\'m Venky from Telangana. Pursuing Computer Science and Engineering in AI&DS.',
    social: {
      Mail: '#',
      Linkedin: '#'
    }
  },
 
  // Repeat for all 13 members with different images and details
  
];

const TeamPage = () => {
  return (
  <>
  <div className="text">
    <h1 style={{ fontWeight: 'bold' }}>TEAM MEMBERS<br></br>OF COLLABKEYS</h1>
  </div>
   <main className='main'>
    <section className="team" style={{ marginRight: '100px' }}>
        <div className="polygon-container">
          <div className="row1">
            {teamMembers.slice(0, 2).map((member, index) => (
              <div className="polygon" key={index} style={{ backgroundImage: `url(${member.image})` }}>
                <div className="overlay1">
                  <div className="name">{member.name}</div>
                  <div className="dsc">
                    {member.description}<br/>
                    <div className="social-icons">
                      <a href={member.social.Linkedin}><i class="fa-brands fa-linkedin"></i></a>
                      <a href={member.social.Mail}><i className="fa-solid fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row2">
            {teamMembers.slice(2, 5).map((member, index) => (
              <div className="polygon" key={index} style={{ backgroundImage: `url(${member.image})` }}>
                <div className="overlay1">
                  <div className="name">{member.name}</div>
                  <div className="dsc">
                    {member.description}<br/>
                    <div className="social-icons">
                    <a href={member.social.Linkedin}><i class="fa-brands fa-linkedin"></i></a>
                    <a href={member.social.Mail}><i className="fa-solid fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row3">
            {teamMembers.slice(5,8).map((member, index) => (
              <div className="polygon" key={index} style={{ backgroundImage: `url(${member.image})` }}>
                <div className="overlay1">
                  <div className="name">{member.name}</div>
                  <div className="dsc">
                    {member.description}<br/>
                    <div className="social-icons">
                    <a href={member.social.Linkedin}><i class="fa-brands fa-linkedin"></i></a>
                    <a href={member.social.Mail}><i className="fa-solid fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row4">
            {teamMembers.slice(8, 11).map((member, index) => (
              <div className="polygon" key={index} style={{ backgroundImage: `url(${member.image})` }}>
                <div className="overlay1">
                  <div className="name">{member.name}</div>
                  <div className="dsc">
                    {member.description}<br/>
                    <div className="social-icons">
                    <a href={member.social.Linkedin}><i class="fa-brands fa-linkedin"></i></a>
                      <a href={member.social.Mail}><i className="fa-solid fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row5">
            {teamMembers.slice(11, 13).map((member, index) => (
              <div className="polygon" key={index} style={{ backgroundImage: `url(${member.image})` }}>
                <div className="overlay1">
                  <div className="name">{member.name}</div>
                  <div className="dsc">
                    {member.description}<br/>
                    <div className="social-icons">
                    <a href={member.social.Linkedin}><i class="fa-brands fa-linkedin"></i></a>
                    <a href={member.social.Mail}><i className="fa-solid fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default TeamPage;
