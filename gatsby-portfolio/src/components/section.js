import React from "react";

export default function Section({ title, subtitle, image, id }) {
  return (
    <div className={"section"}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="image-div">
        <img
            src={image}
            className="logo-page"
            alt="Bienvenue"
          />
        </div>
      </div>
    </div>
  );
}