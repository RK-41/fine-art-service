import { Navbar } from './components/index';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className='font-inter'>
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
