// import React from 'react';
// import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import track_order_logo from '../assets/track_order_logo.svg';

function Navbar() {
	return (
		<div className='flex justify-between pt-5'>
			<div className='flex justify-center items-center gap-1 w-[180px] ml-10 bg-slate-500'>
				<p>Track you order</p>
				<img src={track_order_logo} className='w-10' />
			</div>
			<img src={logo} alt='logo' />

			<div className='flex gap-3 mr-10'>
				<p>Home</p>
				<p>Services</p>
				<p>About Us</p>
				<p>Login</p>
			</div>
			{/* <div>
				<NavLink
					to='/Home'
					className={({ isActive }) =>
						`${isActive ? 'text-green-600' : 'text-gray-500'}`
					}
				>
					Home
				</NavLink>
			</div> */}
		</div>
	);
}

export default Navbar;
