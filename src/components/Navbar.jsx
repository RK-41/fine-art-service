import { useState } from 'react';
import logo from '../assets/logo.png';
import track_order_logo from '../assets/track_order_logo.svg';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='w-full h-20 flex p-2 py-4'>
			<div className='flex-grow flex items-center justify-start px-2 max-w-[33%]'>
				<NavLink to='order'>
					<div className='flex justify-center items-center gap-1 w-[40px] sm:w-[200px] lg:w-full '>
						<p className='hidden sm:block text-[#292355] font-bold'>
							Track your order
						</p>
						<img
							src={track_order_logo}
							className='min-w-10'
							alt='Track Order Logo'
						/>
					</div>
				</NavLink>
			</div>

			<div className='flex-grow flex justify-center max-w-[33%] mx-4'>
				<NavLink to='/'>
					<img src={logo} className='h-full' alt='Logo' />
				</NavLink>
			</div>

			{/* <div>
					<NavLink
						to='/'
						className={({ isActive }) =>
							`${isActive ? 'text-green-600' : 'text-gray-500'}`
						}
					>
						Home
					</NavLink>
					<NavLink
						to='services'
						className={({ isActive }) =>
							`${isActive ? 'text-green-600' : 'text-gray-500'}`
						}
					>
						Services
					</NavLink>
					<NavLink
						to='about-us'
						className={({ isActive }) =>
							`${isActive ? 'text-green-600' : 'text-gray-500'}`
						}
					>
						About Us
					</NavLink>
					<NavLink
						to='login'
						className={({ isActive }) =>
							`${isActive ? 'text-green-600' : 'text-gray-500'}`
						}
					>
						Login
					</NavLink>
				</div> */}

			<nav className='flex-grow z-10 flex flex-row-reverse justify-start lg:justify-center items-center max-w-[33%]  bg-white'>
				<button
					onClick={toggleNavbar}
					className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
					aria-controls='navbar-default'
					aria-expanded={isOpen}
				>
					<span className='sr-only'>Open main menu</span>
					<Menu />
				</button>

				<div
					className={`${
						isOpen ? 'block' : 'hidden'
					} mt-20 lg:mt-0 z-20 w-max   lg:block lg:w-auto`}
					id='navbar-default'
				>
					<ul className='font-medium flex flex-col p-4 lg:p-0 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse mt-20 lg:mt-0 lg:border-0 lg:bg-white'>
						<li>
							<NavLink
								to='/'
								className={({ isActive }) =>
									`block py-2 px-1 rounded hover:text-[#527442] ${
										isActive ? 'text-[#527442]' : 'text-[#818181]'
									}`
								}
								aria-current='page'
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to='services'
								className={({ isActive }) =>
									`block py-2 px-1 rounded hover:text-[#527442] ${
										isActive ? 'text-[#527442]' : 'text-[#818181]'
									}`
								}
							>
								Services
							</NavLink>
						</li>
						<li>
							<NavLink
								to='about-us'
								className={({ isActive }) =>
									`block py-2 px-1 rounded hover:text-[#527442] ${
										isActive ? 'text-[#527442]' : 'text-[#818181]'
									}`
								}
							>
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink
								to='login'
								className={({ isActive }) =>
									`block py-2 px-1 rounded hover:text-[#527442] ${
										isActive ? 'text-[#527442]' : 'text-[#818181]'
									}`
								}
							>
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
