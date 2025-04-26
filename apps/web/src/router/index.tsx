import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthPage, DashboardPage, ProjectsPage, BacklogPage } from '@pages';
import RegisterPage from 'src/view/pages/register';
import { BaseLayout } from 'src/view/layout/base.layout';

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<AuthPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route element={<BaseLayout />}>
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/backlog' element={<BacklogPage />} />
					<Route path='*' element={<DashboardPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
