import './Certifications.scss';
import {TbCertificate, TbExternalLink} from 'react-icons/tb'
import { useState } from 'react';
function Certifications() {
    const certifications = [
      {
        id: 1,
        name: "Introduction to Front-end Development",
        description:
          "Coursera Meta's Introduction to Front-end Development course is a beginner-friendly introduction to building web applications. Students will learn about HTML, CSS, and JavaScript, as well as responsive design, accessibility, and web performance. Through hands-on exercises and projects, students will gain practical experience creating their own web pages and user interfaces.",
        certificateUrl:
          "https://www.coursera.org/account/accomplishments/certificate/R45Z8JSCSTZ2",
      },
      {
        id: 2,
        name: "Programming with JavaScript",
        description:
          "Coursera Meta's Programming with JavaScript course is an in-depth exploration of the JavaScript language. Students will learn about data types, control structures, functions, and more. Through a series of coding challenges and projects, students will build their coding skills and gain experience creating complex applications with JavaScript.",
        certificateUrl:
          "https://www.coursera.org/account/accomplishments/certificate/5DH7844LCZ8B",
      },
      {
        id: 3,
        name: "Version Control",
        description:
          "Coursera Meta's Version Control course teaches students how to use Git, a powerful version control system for tracking changes to code and documents. Through practical exercises and projects, students will learn how to collaborate with others, track changes over time, and manage conflicts. By the end of the course, students will be able to use Git to manage their own projects effectively.",
        certificateUrl:
          "https://www.coursera.org/account/accomplishments/certificate/Q9W2MZHPJ9LG",
      },
      {
        id: 4,
        name: "Learn HTML and CSS in Depth",
        description:
          "Coursera Meta's Learn HTML and CSS in Depth course is a comprehensive introduction to these fundamental web development technologies. Students will learn about HTML tags, CSS selectors, layout techniques, and more. Through a series of interactive exercises and projects, students will gain practical experience creating beautiful and responsive web pages.",
        certificateUrl:
          "https://www.coursera.org/account/accomplishments/certificate/UATNJSTXTBZB",
      },
      {
        id: 5,
        name: "React Basics",
        description:
          "Coursera Meta's React Basics course teaches the fundamentals of building web applications with React, a popular JavaScript library. Through hands-on exercises and projects, students will learn about component structure, JSX syntax, state management, and more. By the end of the course, students will have a strong foundation in React development and be able to create dynamic and responsive user interfaces.",
        certificateUrl:
          "https://www.coursera.org/account/accomplishments/certificate/XPAVNHDAAAGB",
      },
      {
        id: 6,
        name: "Machine Learning",
        description:
          "Coursera Meta's Machine Learning course is an introduction to the field of machine learning, including topics such as linear regression, logistic regression, neural networks, and more. Students will gain practical experience with real-world datasets and learn how to train and evaluate machine learning models. By the end of the course, students will have a strong foundation in machine learning and be able to apply these techniques to their own projects.",
        certificateUrl:
          "https://www.coursera.org/account/accomplishments/certificate/MRMTWL2SJAQN",
      },
    ];
    const [visibleCertificates, setVisibleCertificates] = useState(4);
    const numberOfMoreVisibleCertificates = 4;
    return (
      <div className="certifications-section">
        <div className="certifications-heading-container">
          <h1 className="certifications-heading">certifications</h1>
        </div>
        <div className="certifications-container" id="certifications">
          {certifications.map((certification, index) => {
            if (index < visibleCertificates) {
              return (
                <a
                  key={certification.id}
                  href={certification.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="certification">
                    <div className="certification-icons">
                      <TbCertificate size={30} className="certification-icon" />
                      <TbExternalLink
                        size={30}
                        className="certification-icon"
                      />
                    </div>
                    <div className="certification-header-container">
                      <h2 className="certification-header">
                        {certification.name}
                      </h2>
                    </div>
                    <div className="certification-description-container">
                      <p className="certification-description">
                        {certification.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            }
            return null;
          })}
        </div>
        <div className="certifications-button-container">
          {certifications.length > visibleCertificates ? (
            <button className="certifications-button" onClick={()=> setVisibleCertificates(prev => prev+ numberOfMoreVisibleCertificates)}>show more</button>
          ) : 
            ""}
        </div>
      </div>
    );
}

export default Certifications;