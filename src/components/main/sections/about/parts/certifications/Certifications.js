import './Certifications.scss';
import {TbCertificate, TbExternalLink} from 'react-icons/tb'
import { useState } from 'react';
function Certifications() {
    const certifications = [
      {
        id: 0,
        name: "Machine learning",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, culpa blanditiis quo maxime nulla eos harum quis numquam, ducimus laborum ea quaerat eligendi ratione repellat, saepe consectetur provident possimus architecto.",
        certificateUrl: "",
      },
      {
        id: 1,
        name: "certification 2",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, culpa blanditiis quo maxime nulla eos harum quis numquam, ducimus laborum ea quaerat eligendi ratione repellat, saepe consectetur provident possimus architecto.",
        certificateUrl: "",
      },
      {
        id: 2,
        name: "certification 3",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, culpa blanditiis quo maxime nulla eos harum quis numquam, ducimus laborum ea quaerat eligendi ratione repellat, saepe consectetur provident possimus architecto.",
        certificateUrl: "",
      },
      {
        id: 3,
        name: "certification 4",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, culpa blanditiis quo maxime nulla eos harum quis numquam, ducimus laborum ea quaerat eligendi ratione repellat, saepe consectetur provident possimus architecto.",
        certificateUrl: "",
      },
      {
        id: 4,
        name: "certification 5",
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, culpa blanditiis quo maxime nulla eos harum quis numquam, ducimus laborum ea quaerat eligendi ratione repellat, saepe consectetur provident possimus architecto.",
        certificateUrl: "",
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
                <a key={certification.id} href={certification.certificateUrl}>
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