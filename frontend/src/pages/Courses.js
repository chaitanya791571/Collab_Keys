import React, { useState } from "react";
import ResourceCard from "../components/ResourceCard";
import "../styles/Courses.css"; // Include your CSS styles here

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const courses = [
    {
      id: "software-development",
      title: "Software Development",
      description: "Master software development principles with hands-on projects.",
      progress: 70,
      badge: "Intermediate",
      modalContent: {
        overview: "Learn the fundamentals of software development, including coding best practices, algorithms, and version control.",
        youtube: [
          "https://www.youtube.com/embed/nKIu9yen5nc",
          "https://www.youtube.com/embed/zOjov-2OZ0E",
        ],
        freeCourses: [
          { name: "Software Development - Udacity", link: "https://www.udacity.com/course/software-development--cs253" },
          { name: "Software Development - Coursera", link: "https://www.coursera.org/specializations/software-development" },
        ],
        downloads: [
          { name: "Download Software Dev Cheatsheet", link: "#" },
          { name: "Software Project Ideas", link: "#" },
        ],
      },
    },
    {
      id: "data-science",
      title: "Data Science & Analytics",
      description: "Learn data science with Python, statistics, and machine learning.",
      progress: 50,
      badge: "Advanced",
      modalContent: {
        overview: "Learn data analysis, visualization, and machine learning using Python and R.",
        youtube: [
          "https://www.youtube.com/embed/GjKQ6V_ViQE",
          "https://www.youtube.com/embed/Jh3Adk1Yuow",
        ],
        freeCourses: [
          { name: "Python for Data Science - Udemy", link: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" },
          { name: "Data Science Specialization - Coursera", link: "https://www.coursera.org/specializations/data-science-python" },
        ],
        downloads: [
          { name: "Download Data Science Cheatsheet", link: "#" },
          { name: "Data Science Project Ideas", link: "#" },
        ],
      },
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      description: "Learn the fundamentals of cloud computing with hands-on labs.",
      progress: 60,
      badge: "Beginner",
      modalContent: {
        overview: "Explore cloud computing services such as AWS, Azure, and Google Cloud with practical exercises.",
        youtube: [
          "https://www.youtube.com/embed/XGn1NtFJCXE",
          "https://www.youtube.com/embed/WfLh1VRU5C8",
        ],
        freeCourses: [
          { name: "AWS Cloud Practitioner - Udemy", link: "https://www.udemy.com/course/aws-certified-cloud-practitioner/" },
          { name: "Google Cloud Specialization - Coursera", link: "https://www.coursera.org/specializations/google-cloud" },
        ],
        downloads: [
          { name: "Download Cloud Computing Cheatsheet", link: "#" },
          { name: "Cloud Project Ideas", link: "#" },
        ],
      },
    },
    {
      id: "ai-ml",
      title: "Artificial Intelligence & Machine Learning",
      description: "Master the concepts of AI and ML with real-world case studies and projects.",
      progress: 80,
      badge: "Advanced",
      modalContent: {
        overview: "Learn AI and ML, including algorithms, data preprocessing, and neural networks.",
        youtube: [
          "https://www.youtube.com/embed/ukzFI9rgwfU",
          "https://www.youtube.com/embed/aircAruvnKk",
        ],
        freeCourses: [
          { name: "Machine Learning - Coursera", link: "https://www.coursera.org/learn/machine-learning" },
          { name: "AI Fundamentals - Udemy", link: "https://www.udemy.com/course/artificial-intelligence/" },
        ],
        downloads: [
          { name: "Download AI/ML Cheatsheet", link: "#" },
          { name: "AI Project Ideas", link: "#" },
        ],
      },
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      description: "Explore ethical hacking, network security, and risk management.",
      progress: 40,
      badge: "Intermediate",
      modalContent: {
        overview: "Learn about system security, vulnerabilities, and how to protect against cyber threats.",
        youtube: [
          "https://www.youtube.com/embed/pD2MStu1jmc",
          "https://www.youtube.com/embed/bPVaOlJ6ln0",
        ],
        freeCourses: [
          { name: "Ethical Hacking - Udemy", link: "https://www.udemy.com/course/learn-ethical-hacking-from-scratch/" },
          { name: "IT Security Specialization - Coursera", link: "https://www.coursera.org/specializations/it-security" },
        ],
        downloads: [
          { name: "Download Cybersecurity Cheatsheet", link: "#" },
          { name: "Cybersecurity Project Ideas", link: "#" },
        ],
      },
      
    },
    {
      id: "python",
      title: "Python",
      description: "Learn Python programming, from basics to advanced concepts.",
      progress: 60,
      badge: "Beginner",
      modalContent: {
        overview: "Master Python programming, covering topics like loops, functions, data structures, and OOP.",
        youtube: [
          "https://www.youtube.com/embed/_uQrJ0TkZlc",
          "https://www.youtube.com/embed/rfscVS0vtbw"
        ],
        freeCourses: [
          { title: "Python for Beginners - Udemy", link: "https://www.udemy.com/course/pythonforbeginners/" },
          { title: "Python Specialization - Coursera", link: "https://www.coursera.org/specializations/python" }
        ],
        downloads: [
          { title: "Python Cheatsheet", link: "https://www.pythoncheatsheet.org/" },
          { title: "Python Projects", link: "https://github.com/python/cpython" }
        ]
      }
    },
    {
      id: "java",
      title: "Java",
      description: "Master the Java programming language, from basic syntax to advanced topics.",
      progress: 70,
      badge: "Intermediate",
      modalContent: {
        overview: "Learn Java programming, including OOP, concurrency, and networking.",
        youtube: [
          "https://www.youtube.com/embed/grEKMHGYyns",
          "https://www.youtube.com/embed/hBh_CC5y8-s"
        ],
        freeCourses: [
          { title: "Java Developer Course - Udemy", link: "https://www.udemy.com/course/java-the-complete-java-developer-course/" },
          { title: "Java Courses - Coursera", link: "https://www.coursera.org/courses?query=java" }
        ],
        downloads: [
          { title: "Java Cheatsheet", link: "https://cheatography.com/davechild/cheat-sheets/java/" },
          { title: "Java Design Patterns", link: "https://github.com/iluwatar/java-design-patterns" }
        ]
      }
    },
    {
      id: "cpp",
      title: "C++",
      description: "Learn C++ from basics to advanced concepts like memory management.",
      progress: 50,
      badge: "Intermediate",
      modalContent: {
        overview: "Master C++ for system programming, game development, and embedded systems.",
        youtube: [
          "https://www.youtube.com/embed/vLnPwxZdW4Y",
          "https://www.youtube.com/embed/Rub-JsjMhWY"
        ],
        freeCourses: [
          { title: "Learn C++ - Udemy", link: "https://www.udemy.com/course/free-learn-c-plus-plus-from-beginner-to-advanced/" },
          { title: "C++ Courses - Coursera", link: "https://www.coursera.org/courses?query=c%2B%2B" }
        ],
        downloads: [
          { title: "C++ Algorithms Repository", link: "https://github.com/TheAlgorithms/C-Plus-Plus" },
          { title: "C++ Cheatsheet", link: "https://cheatography.com/garrett/cheat-sheets/c-plus-plus/" }
        ]
      }
    },
    {
      id: "javascript",
      title: "JavaScript",
      description: "Learn how to build dynamic websites using JavaScript.",
      progress: 65,
      badge: "Beginner",
      modalContent: {
        overview: "Learn JavaScript from scratch, covering fundamentals, DOM manipulation, and asynchronous programming.",
        youtube: [
          "https://www.youtube.com/embed/W6NZfCO5SIk",
          "https://www.youtube.com/embed/PkZNo7MFNFg"
        ],
        freeCourses: [
          { title: "JavaScript Complete Guide - Udemy", link: "https://www.udemy.com/course/javascript-the-complete-guide/" },
          { title: "JavaScript Courses - Coursera", link: "https://www.coursera.org/courses?query=javascript" }
        ],
        downloads: [
          { title: "JavaScript Cheatsheet", link: "#" },
          { title: "JavaScript Projects", link: "#" }
        ]
      }
    },
    {
      id: "devops",
      title: "DevOps",
      description: "Explore DevOps tools and practices for efficient development and deployment.",
      progress: 80,
      badge: "Advanced",
      modalContent: {
        overview: "Learn DevOps practices, including CI/CD pipelines, Docker, and Kubernetes.",
        youtube: [
          "https://www.youtube.com/embed/O7dYbF_Fcnk",
          "https://www.youtube.com/embed/W7sh4RAEJjs"
        ],
        freeCourses: [
          { title: "DevOps with Kubernetes - Udemy", link: "https://www.udemy.com/course/learn-devops-the-complete-kubernetes-course/" },
          { title: "DevOps Specialization - Coursera", link: "https://www.coursera.org/specializations/devops" }
        ],
        downloads: [
          { title: "DevOps Cheatsheet", link: "#" },
          { title: "DevOps Workflow Examples", link: "#" }
        ]
      }
    },
    {
      id: "dbms",
      title: "DBMS",
      description: "Learn database management systems (DBMS), including SQL and NoSQL databases.",
      progress: 75,
      badge: "Intermediate",
      modalContent: {
        overview: "Master the concepts of DBMS, including relational databases, SQL queries, and data modeling.",
        youtube: [
          "https://www.youtube.com/embed/z2kbsG8zsLM",
          "https://www.youtube.com/embed/9ylj9NR0Lcg"
        ],
        freeCourses: [
          { title: "DBMS and SQL - Udemy", link: "https://www.udemy.com/course/sql-and-database-management-system-simplified-for-you/" },
          { title: "DBMS Courses - Coursera", link: "https://www.coursera.org/courses?query=dbms" }
        ],
        downloads: [
          { title: "DBMS Resources", link: "https://github.com/csn/awesome-dbms" },
          { title: "SQL Queries Cheatsheet", link: "#" }
        ]
      }
    },
    {
      id: "r",
      title: "R Programming",
      description: "Learn R for statistical computing and data analysis.",
      progress: 60,
      badge: "Beginner",
      modalContent: {
        overview: "Learn R for data manipulation, statistical analysis, and data visualization.",
        youtube: [
          "https://www.youtube.com/embed/YrEe2TLr3MI",
          "https://www.youtube.com/embed/_V8eKsto3Ug",
        ],
        freeCourses: [
          { name: "R Programming - Educative", link: "https://www.educative.io/courses/learn-r" },
          { name: "Introduction to R Programming - DataCamp", link: "https://www.datacamp.com/courses/free-introduction-to-r" },
        ],
        downloads: [
          // Add download links here if available
        ]
      }
    }
  ];
  
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <i className="fa fa-search"></i>
      </div>

      <div className="resources-container">
        {filteredCourses.map((course) => (
          <ResourceCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default App;
