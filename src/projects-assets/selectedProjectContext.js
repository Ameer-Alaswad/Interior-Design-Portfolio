import React, { createContext, useState } from "react";
export const SelectedProjectContext = createContext();

export function SelectedProjectContextProvider({ children }) {
  const [selectedProject, setSelectedProject] = useState("Plenary");
  return (
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSelectedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
}
