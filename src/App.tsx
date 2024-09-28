import React from 'react';
import Overview from './components/character/characTer2';

// const MainPage = lazy(() =>
// 	import('./pages/Main/Main.page').then((module) => ({
// 		default: module.MainPage
// 	}))
// );

// export const App: React.FC = () => {
// 	return (
// 		<div className='relative w-screen h-screen bg-bg'>
// 			<Suspense fallback={<Loader />}>
// 				<Routes>
// 					<Route path='/' element={<MainPage />} />
// 					<Route path='settings' element={<SettingsPage />} />
// 				</Routes>
// 			</Suspense>
// 		</div>
// 	);
// };

export const App: React.FC = () => {
	return (
		<div>
			<Overview />
		</div>
	);
};
