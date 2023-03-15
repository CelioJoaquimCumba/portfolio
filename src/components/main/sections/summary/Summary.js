import './Summary.scss'

function Summary() {
    return (
      <div className="summary">
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
            <li className="summary-item">Header</li>
            <li className="summary-item">Summary</li>
            <li className="summary-item">
              About me
              <ol className="summary-sub-items" type="a">
                <li className="summary-sub-item">Skills</li>
                <li className="summary-sub-item">Education</li>
                <li className="summary-sub-item">Certifications</li>
                <li className="summary-sub-item">Goals</li>
              </ol>
            </li>
            <li className="summary-item">Contact</li>
              <ol className="summary-sub-items" type="a">
                <li className="summary-sub-item">Email</li>
                <li className="summary-sub-item">Whatsapp</li>
              </ol>
            <li className="summary-item">Footer</li>
          </ol>
        </div>
      </div>
    );
}

export default Summary;