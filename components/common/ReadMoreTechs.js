import React, { useState, useEffect } from 'react';

const ReadMoreTechs = ({ techs }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      <ul>
        {isExpanded
          ? techs.map((tech, index) => <li key={index}>{tech}</li>)
          : techs.slice(0, 3).map((tech, index) => <li key={index}>{tech}</li>)}
      </ul>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ReadMoreTechs;