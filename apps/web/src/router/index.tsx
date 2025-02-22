import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthPage, DashboardPage } from '@pages';
import RegisterPage from 'src/view/pages/register';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<AuthPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='*' element={<DashboardPage />} />
			</Routes>
		</BrowserRouter>
	);
};
