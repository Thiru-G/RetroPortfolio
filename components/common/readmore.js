import React, { useState, useEffect } from "react";

const ReadMore = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure the component runs only on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Ensure no rendering occurs until on the client
  }

  return (
    <div>
      <p>
        {isExpanded ? description : `${description.substring(0, 150)}...`}
      </p>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;