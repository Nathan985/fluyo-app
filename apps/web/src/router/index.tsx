import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthPage, DashboardPage } from '@pages';
import RegisterPage from 'src/view/pages/register';
import { BaseLayot } from 'src/view/layout/base.layout';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<AuthPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route element={<BaseLayot />}>
					<Route path='*' element={<DashboardPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
