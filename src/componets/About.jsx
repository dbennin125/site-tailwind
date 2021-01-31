import React from "react";

export const About = () => {
  return (
    <div className="h-screen center-content px-3" id="about">
      <p className="about-font mb-10">
        I’m a full stack software engineer with a knack for crafting clean,
        tested, and modular code. With a keen eye on the end goal, whether in a
        mob, pairs, or solo, I take pride in executing the task, solving
        problems along the way, and overall going above and beyond. Guiding the
        user experience through well written code and a thoughtfully built site
        is always the objective. I own a very cute dog who has been known to
        make appearances on Zoom calls.
      </p>
      <img className="h-1/3" src="/festiveGus.jpg" alt="Gus the dog" />
    </div>
  );
};
