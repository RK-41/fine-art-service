import { Input } from '../@/components/ui/input';
import { Label } from '../@/components/ui/label';
import { useState } from 'react';

const ShippingDatePicker = () => {
	const [selectedDate, setSelectedDate] = useState('');

	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
	};

	return (
		<div className='space-y-1 w-[180px]'>
			<Label htmlFor='shipping-date'>Shipping Date</Label>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Input
					type='text'
					id='shipping-date-display'
					value={selectedDate}
					readOnly // Make the display input read-only
					className='appearance-none placeholder-transparent'
					style={{
						WebkitAppearance: 'none',
						MozAppearance: 'none',
						appearance: 'none',
						marginRight: '8px', // Add some space between the display input and the button
					}}
				/>
				<input
					type='date'
					id='shipping-date'
					value={selectedDate}
					onChange={handleDateChange}
					className='sr-only' // Hide the actual input visually
				/>
				<button
					type='button'
					onClick={() => {
						const datePicker = document.getElementById('shipping-date');
						if (datePicker) {
							datePicker.click(); // Trigger the date picker when the button is clicked
						}
					}}
				>
					Select Date
				</button>
			</div>
		</div>
	);
};

export default ShippingDatePicker;
