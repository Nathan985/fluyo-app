import React from 'react';
import { AuthContext } from '../AuthContext';

export const useAtuhContext = () => {
	return React.useContext(AuthContext);
};
