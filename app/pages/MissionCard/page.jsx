import React from "react";

const MissionCard = ({ title, description }) => {
  return (
    <div className="mission-card flex flex-col items-start justify-start bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold text-blue-400">{title}</h2>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default MissionCard;
