import React, { createContext, useState } from "react";
export const SelectedProjectContext = createContext();

export function SelectedProjectContextProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState("Plenary");
  const [data, setData] = React.useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    situation: "I bought a New House and it needs some love!",
    room: "Whole House",
    description: "",
    sharedFile: "",
    budget: "Not sure!",
    contractor: "",
    heardAboutUs: "",
  });
  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject, data, setData }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
}
