import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Section({ title, subtitle, image, icon, id, classname, alt }) {
  return (
    <div className={"section"} id={id}>
      <div className="section-content">
        <h2>{title} <FontAwesomeIcon icon={icon} size="1x" /></h2>
        <p>{subtitle}</p>
        <div className="image-div">
          <img
              src={image}
              className={classname}
              alt={alt}
            />
          </div>
      </div>
    </div>
  );
}