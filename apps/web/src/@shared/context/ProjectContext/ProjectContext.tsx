import React, { createContext, PropsWithChildren, useEffect, useState } from "react";
import { IProjectEntity } from "../../interfaces/entities/project.entity";
import { IProjectContext } from "./@types/project-context.types";

export const ProjectContext = createContext({} as IProjectContext);

export const ProjectContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentProject, setCurrentProject] = useState<IProjectEntity | undefined>();

  const setProject = (data?: IProjectEntity) => {
    setCurrentProject(data);
  }

  useEffect(() =>{
    console.log({ currentProject })
  },[currentProject])

  return (
    <ProjectContext.Provider
      value={{
        currentProject,
        setProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}