import './Summary.scss'

function Summary() {
    return (
      <div className="summary" id="summary">
        <div className="summary-header">
          <h1 className="summary-title">Summary</h1>
        </div>
        <div className="summary-description">
          <p>
            In this section you are able to select the section that you want to
            see
          </p>
        </div>
        <div className="summary-table-content">
          <ol className="summary-items">
            <li className="summary-item">
              <a href="./#header">Header</a>
            </li>
            <li className="summary-item">
              <a href="./#summary">Summary</a>
            </li>

            <li className="summary-item">
              <a href="./#about me">About me</a>
              <ol className="summary-sub-items" type="a">
                <li className="summary-sub-item">
                  <a href="./#skills">Skills</a>
                </li>
                <li className="summary-sub-item">
                  <a href="./#education">Education</a>
                </li>
                <li className="summary-sub-item">
                  <a href="./#certifications">Certifications</a>
                </li>
                <li className="summary-sub-item">
                  <a href="./#goals">Goals</a>
                </li>
              </ol>
            </li>
            <li className="summary-item">
              <a href="./#contact">Contact</a>
            </li>
            <ol className="summary-sub-items" type="a">
              <li className="summary-sub-item">
                <a href="./#email">Email</a>
              </li>
              <li className="summary-sub-item">
                <a href="./#whatsapp">Whatsapp</a>
              </li>
            </ol>
            <li className="summary-item">
              <a>Footer</a>
            </li>
          </ol>
        </div>
      </div>
    );
}

export default Summary;