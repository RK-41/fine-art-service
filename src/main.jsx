import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { AboutUs, Home, Login, Services, Order } from './components/index.js';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route path='' element={<Home />} />
			<Route path='about-us' element={<AboutUs />} />
			<Route path='services' element={<Services />} />
			<Route path='login' element={<Login />} />
			<Route path='order' element={<Order />} />
		</Route>
	)
);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
