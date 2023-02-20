import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Appbar from './AppBar/AppBar';


const HomePage = lazy(() =>
	import('../pages/HomePage/HomePage')
);

const MoviesPage = lazy(() =>
	import('../pages/MoviesPage/MoviesPage')
);
const DetalisPage = lazy(() =>
	import('../pages/DetalisPage/DetalisPage')
);
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
	return (
		<>
			<Appbar />

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route index element={<HomePage />}></Route>
					<Route path="/movies" element={<MoviesPage />}></Route>
					<Route path="/movies/:movieId/" element={<DetalisPage />}>
						<Route path="/movies/:movieId/reviews" element={<Reviews />} />
						<Route path="/movies/:movieId/cast" element={<Cast />} />
					</Route>


					<Route path="*" element={<HomePage />} />
				</Routes>
			</Suspense>
		</>
	);
};