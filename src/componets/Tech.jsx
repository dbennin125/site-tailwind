import React from "react";

export const Tech = () => {
  return (
    <>
      <div className="h-screen center-content text-center" id="tech">
        <h1 className="font-mono text-4xl">
          Buzzwords
          <p className="text-2xl mt-3 mb-2">Tools</p>
          <p className="tech-font">
            Git, GitHub, Jest, Enzyme, QUnit, Heroku, Netlify, React Testing
            Library
          </p>
          <p className="text-2xl mt-3 mb-2">Languages</p>
          <p className="tech-font">JavaScript, Python, TypeScript, HTML/CSS</p>
          <p className="text-2xl mt-3 mb-2">Libraries/Frameworks</p>
          <p className="tech-font">
            React, Node.js, Express.js, Chakra, TypeORM, Next.js, Mongoose
          </p>
          <p className="text-2xl mt-3 mb-2">Databases</p>
          <p className="tech-font"> Postgres, MongoDB</p>
        </h1>
      </div>
    </>
  );
};
