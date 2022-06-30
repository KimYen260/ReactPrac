import React from "react";
import MainContent from "./MainContent";
// initial "rafce"
const App = () => {
  let works = [
      {ProName: "residence", location: "Taichung", sqft: "86,041"},
      {ProName: "commercial", location: "Tainan", sqft: "86,041"},
      {ProName: "hospitality", location: "Hualiam", sqft: "86,041"}
  ];
  return (
      <div>
          <p>The works are:</p>
          {works.map((project) => (
              <MainContent ProName={project.ProName} location={project.location} sqft={project.sqft} />
          ))}
      </div>
  );
};

export default App;