/* eslint-disable no-mixed-spaces-and-tabs */
import { Tabs, TabsList, TabsTrigger } from '../@/components/ui/tabs';

import TabsContentCustom from '../@/components/TabsContentCustom';
import { useState } from 'react';

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../@/components/ui/select';

function Form() {
	const [cityType, setCityType] = useState('domestic');
	const [domesticCity, setDomesticCity] = useState('Delhi');
	const [internationalCity, setInternationalCity] = useState('Paris');

	const domesticCities = [
		'Agra',
		'Ahmedabad',
		'Ajmer',
		'Allahabad',
		'Aligarh',
		'Amravati',
		'Amritsar',
		'Asansol',
		'Aurangabad',
		'Bareilly',
		'Belgaum',
		'Bengaluru',
		'Bhiwandi',
		'Bhopal',
		'Bhubaneswar',
		'Bikaner',
		'Chandigarh',
		'Chennai',
		'Coimbatore',
		'Cuttack',
		'Dehradun',
		'Delhi',
		'Dhanbad',
		'Durgapur',
		'Faridabad',
		'Firozabad',
		'Ghaziabad',
		'Gorakhpur',
		'Gulbarga',
		'Guntur',
		'Gurgaon',
		'Guwahati',
		'Gwalior',
		'Howrah',
		'Hubballi-Dharwad',
		'Hyderabad',
		'Indore',
		'Jabalpur',
		'Jaipur',
		'Jalandhar',
		'Jammu',
		'Jamnagar',
		'Jamshedpur',
		'Jhansi',
		'Jodhpur',
		'Kanpur',
		'Kalyan-Dombivli',
		'Kochi',
		'Kolhapur',
		'Kolkata',
		'Kota',
		'Lucknow',
		'Ludhiana',
		'Madurai',
		'Maheshtala',
		'Malegaon',
		'Mangalore',
		'Meerut',
		'Moradabad',
		'Mumbai',
		'Mysuru',
		'Nagpur',
		'Nanded',
		'Navi Mumbai',
		'Noida',
		'Patna',
		'Pimpri-Chinchwad',
		'Pune',
		'Raipur',
		'Rajkot',
		'Ranchi',
		'Salem',
		'Sangli',
		'Saharanpur',
		'Siliguri',
		'Solapur',
		'Srinagar',
		'Surat',
		'Thane',
		'Thiruvananthapuram',
		'Tiruchirappalli',
		'Tirunelveli',
		'Tiruppur',
		'Ujjain',
		'Ulhasnagar',
		'Vadodara',
		'Varanasi',
		'Vasai-Virar',
		'Vijayawada',
		'Visakhapatnam',
		'Warangal',
	];

	const internationalCities = [
		'Adelaide',
		'Athens',
		'Bangkok',
		'Barcelona',
		'Beijing',
		'Berlin',
		'Birmingham',
		'Bogota',
		'Boston',
		'Brasilia',
		'Brisbane',
		'Brussels',
		'Buenos Aires',
		'Cairo',
		'Calgary',
		'Cape Town',
		'Caracas',
		'Chengdu',
		'Chicago',
		'Chongqing',
		'Copenhagen',
		'Dallas',
		'Dhaka',
		'Dubai',
		'Dublin',
		'Durban',
		'Edinburgh',
		'Frankfurt',
		'Guadalajara',
		'Guangzhou',
		'Hamburg',
		'Hanoi',
		'Ho Chi Minh City',
		'Hong Kong',
		'Houston',
		'Istanbul',
		'Jakarta',
		'Johannesburg',
		'Kuala Lumpur',
		'Kyiv',
		'Kyoto',
		'Lagos',
		'Lima',
		'Lisbon',
		'London',
		'Los Angeles',
		'Madrid',
		'Manila',
		'Melbourne',
		'Mexico City',
		'Miami',
		'Milan',
		'Montreal',
		'Moscow',
		'Munich',
		'Nairobi',
		'New York',
		'Osaka',
		'Paris',
		'Perth',
		'Philadelphia',
		'Phoenix',
		'Rio de Janeiro',
		'Riyadh',
		'Rome',
		'San Diego',
		'San Francisco',
		'San Jose',
		'Santiago',
		'Sao Paulo',
		'Seattle',
		'Seoul',
		'Shanghai',
		'Shenzhen',
		'Singapore',
		'St. Petersburg',
		'Stockholm',
		'Sydney',
		'Taipei',
		'Tehran',
		'Tel Aviv',
		'Tokyo',
		'Toronto',
		'Vancouver',
		'Vienna',
		'Warsaw',
		'Washington, D.C.',
		'Wellington',
		'Zurich',
	];

	return (
		<div>
			<Select>
				<SelectTrigger className='w-max ml-6 px-3 font-bold'>
					<SelectValue
						placeholder={
							cityType == 'domestic' ? domesticCity : internationalCity
						}
					/>
				</SelectTrigger>
				<SelectContent className='bg-white/95'>
					{cityType == 'domestic'
						? domesticCities.map((city) => (
								<SelectItem
									value={city}
									key={city}
									onClick={() => setDomesticCity(() => city)}
								>
									{city}
								</SelectItem>
						  ))
						: internationalCities.map((city) => (
								<SelectItem
									value={city}
									key={city}
									onClick={() => setInternationalCity(() => city)}
								>
									{city}
								</SelectItem>
						  ))}
				</SelectContent>
			</Select>

			<div className='w-full sm:w-[480px] h-max xl:h-[1040px] bg-[#F2F2F29E] rounded-l-[30px] flex flex-col'>
				<Tabs defaultValue='domestic' className='w-full p-5 pr-0'>
					<TabsList className='flex gap-6 justify-start ml-5 '>
						<TabsTrigger
							value='domestic'
							onClick={() => setCityType(() => 'domestic')}
							className='w-max px-3 text-[#808080] data-[state=active]:text-[#FFFFFF] bg-[#ECECEC] data-[state=active]:bg-[#a6a2b7] rounded-[14px] font-bold'
						>
							Domestic
						</TabsTrigger>
						<TabsTrigger
							value='international'
							onClick={() => setCityType(() => 'international')}
							className='w-max px-2 text-[#808080] data-[state=active]:text-[#FFFFFF] bg-[#ECECEC] data-[state=active]:bg-[#a6a2b7] rounded-[14px] font-bold'
						>
							International
						</TabsTrigger>
					</TabsList>

					<TabsContentCustom value='domestic' />
					<TabsContentCustom value='international' />
				</Tabs>

				<div className='mx-auto font-bold flex items-end h-full'>
					<span>Step 1/4</span>
				</div>
			</div>
		</div>
	);
}

export default Form;
