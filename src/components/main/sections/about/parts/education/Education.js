import './Education.scss';
function Education() {
    return (
      <div className="education-section">
        <div className="education-heading-container">
          <h1 className="education-heading">Education</h1>
        </div>
        <div className="education-options-container">
          <ul className="education-options">
            <li className="education-option education-option-selected">
              <div className="education-option-container">field1</div>
            </li>
            <li className="education-option">
              <div className="education-option-container">field2</div>
            </li>
            <li className="education-option">
              <div className="education-option-container">field3</div>
            </li>
            <li className="education-option ">
              <div className="education-option-container">field4</div>
            </li>
            <li className="education-option">
              <div className="education-option-container">field5</div>
            </li>
          </ul>
        </div>
        <div className="education-container">
          <div className="education-header-container">
            <h1 className="education-header">
              header<b className="education-highlight">@entity</b>
            </h1>
            <p className="education-caption">start_date-end_date2</p>
          </div>
          <div className="education-description-container">
            <p className="education-detail">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate consequatur dolorem suscipit debitis unde, magnam ipsum,
              perferendis delectus nostrum ab, impedit cupiditate! Error
              deleniti labore ullam nisi ut id excepturi.
            </p>
            <p className="education-detail">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis officia, ipsum consequatur quaerat tenetur ipsa dolor
              alias pariatur amet doloribus voluptate dolores atque neque,
              necessitatibus architecto nobis asperiores sit corporis?
            </p>
            <p className="education-detail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              culpa cupiditate nisi pariatur dignissimos. Veritatis, corrupti
              nostrum nihil obcaecati non vel reprehenderit doloremque excepturi
              libero facere nobis quibusdam eius tempore?
            </p>
          </div>
          <div className="education-button-container">
            <button className="education-button">Show Certificate</button>
          </div>
        </div>
      </div>
    );
}

export default Education;