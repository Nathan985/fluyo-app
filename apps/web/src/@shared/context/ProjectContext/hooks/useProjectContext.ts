import React from 'react';
import { ProjectContext } from '../ProjectContext';

export const useProjectContext = () => {
	return React.useContext(ProjectContext);
};
