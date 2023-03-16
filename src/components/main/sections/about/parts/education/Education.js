import './Education.scss';
import  {useState} from 'react';
function Education() {
  const educations = [
    {
      course: "Bachelor degree",
      institution: "Instituto Superior de Transportes e Comunicações",
      startDate: "feb 2020",
      endDate: "present",
      description: [
        "ISUTC, or the Instituto Superior de Transportes e Comunicações, is a higher education institution in Mozambique that offers a degree program in Informatics Engineering.",
        "Informatics Engineering is a multidisciplinary field that combines computer science, software engineering, and electrical engineering to develop and design software, hardware, and systems that meet the needs of individuals and organizations. The curriculum at ISUTC is designed to provide students with a comprehensive education in these areas, as well as a strong foundation in mathematics and physics.",
        "The program covers a range of topics, including programming languages, algorithms, data structures, databases, computer networks, operating systems, computer architecture, digital circuits, software engineering, and project management. Students are also exposed to emerging technologies, such as artificial intelligence, machine learning, and cybersecurity.",
      ],
      certificateUrl: "",
    },
    {
      course: "Front-end development",
      institution: "Coursera - Meta",
      startDate: "feb 2023",
      endDate: "present",
      description: [
        "The Meta Front-End Development course on Coursera is designed to teach students the fundamental concepts and tools used in modern web development. The course covers topics such as HTML, CSS, JavaScript, responsive web design, and version control using Git. ",
        "Upon completion of the course, students will have the skills and knowledge necessary to start a career in front-end web development or continue their studies in a related field.",
      ],
      certificateUrl: "",
    },
    {
      course: "Data analysis",
      institution: "Coursera - Google",
      startDate: "dec 2022",
      endDate: "feb 2023",
      description: [
        "The Google Data Analyst course on Coursera is designed to teach students the foundational skills and knowledge needed to become a data analyst. The course covers a wide range of topics, including data collection, data cleaning, data analysis, and data visualization.",
        "Students will learn how to use Google Sheets and SQL to manage, manipulate, and analyze data, as well as how to use data visualization tools like Google Data Studio to create visual representations of data.",
      ],
      certificateUrl: "",
    },
  ];
  const [current, setCurrent] = useState(educations[0])
  const handleCurrent = (index) => {
      setCurrent(educations[index])
  }
    return (
      <div className="education-section">
        <div className="education-heading-container">
          <h1 className="education-heading">Education</h1>
        </div>
        <div className="education-options-container">
          <ul className="education-options">
            {educations.map(({course}, index) => {
              return (
                <div
                  key={course}
                  className={`education-option ${
                    course === current.course ? "education-option-selected" : ""
                  }`}
                  onClick={()=>handleCurrent(index)} 
                >
                  <div className={`education-option-container `}>
                    {course} - {current.course}
                  </div>
                </div>
              );
            })
            }
          </ul>
        </div>
        <div className="education-container">
          <div className="education-header-container">
            <h1 className="education-header">
              {current.course}<b className="education-highlight">@{current.institution}</b>
            </h1>
            <p className="education-caption">{current.startDate}-{current.endDate}</p>
          </div>
          <div className="education-description-container">
            {current.description.map((description, index) => {
              return(
              <p key={index} className="education-detail">
                {description}
              </p>
              )
            })}
          </div>
          <div className="education-button-container">
            <button  className={`education-button ${current.certificateUrl.trim() === '' ? 'education-button-disabled' : ''}`}>Show Certificate</button>
          </div>
        </div>
      </div>
    );
}

export default Education;