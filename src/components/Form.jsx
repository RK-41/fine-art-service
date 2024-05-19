function Form() {
	const domesticCities = [
		'Mumbai',
		'Delhi',
		'Bangalore',
		'Hyderabad',
		'Ahmedabad',
		'Chennai',
		'Kolkata',
		'Surat',
		'Pune',
		'Jaipur',
		'Lucknow',
		'Kanpur',
		'Nagpur',
		'Indore',
		'Thane',
		'Bhopal',
		'Visakhapatnam',
		'Pimpri-Chinchwad',
		'Patna',
		'Vadodara',
		'Ghaziabad',
		'Ludhiana',
		'Agra',
		'Nashik',
		'Faridabad',
		'Meerut',
		'Rajkot',
		'Kalyan-Dombivli',
		'Vasai-Virar',
		'Varanasi',
		'Srinagar',
		'Aurangabad',
		'Dhanbad',
		'Amritsar',
		'Navi Mumbai',
		'Allahabad',
		'Ranchi',
		'Howrah',
		'Coimbatore',
		'Jabalpur',
		'Gwalior',
		'Vijayawada',
		'Jodhpur',
		'Madurai',
		'Raipur',
		'Kota',
		'Guwahati',
		'Chandigarh',
		'Solapur',
		'Hubballi-Dharwad',
		'Bareilly',
		'Mysore',
		'Tiruchirappalli',
		'Tiruppur',
		'Salem',
		'Aligarh',
		'Gurgaon',
		'Jalandhar',
		'Bhubaneswar',
		'Moradabad',
		'Jamshedpur',
		'Tirunelveli',
		'Warangal',
		'Mira-Bhayandar',
		'Guntur',
		'Bhiwandi',
		'Saharanpur',
		'Gorakhpur',
		'Bikaner',
		'Amravati',
		'Noida',
		'Jamshedpur',
		'Bhilai',
		'Cuttack',
		'Firozabad',
		'Kochi',
		'Nellore',
		'Bhavnagar',
		'Dehradun',
		'Durgapur',
		'Asansol',
		'Rourkela',
		'Nanded',
		'Kolhapur',
		'Ajmer',
		'Akola',
		'Gulbarga',
		'Jamnagar',
		'Ujjain',
		'Loni',
		'Siliguri',
		'Jhansi',
		'Ulhasnagar',
		'Jammu',
		'Sangli-Miraj & Kupwad',
		'Mangalore',
		'Erode',
		'Belgaum',
		'Ambattur',
		'Tirunelveli',
		'Malegaon',
		'Gaya',
		'Jalgaon',
		'Udaipur',
		'Maheshtala',
		'Davanagere',
		'Kozhikode',
		'Kurnool',
		'Rajpur Sonarpur',
		'Rajahmundry',
		'Bokaro',
		'South Dumdum',
		'Bellary',
		'Patiala',
		'Gopalpur',
		'Agartala',
		'Bhagalpur',
		'Muzaffarnagar',
		'Bhatpara',
		'Panihati',
		'Latur',
		'Dhule',
		'Tirupati',
		'Rohtak',
		'Korba',
		'Bhilwara',
		'Berhampur',
		'Muzaffarpur',
		'Ahmednagar',
		'Mathura',
		'Kollam',
		'Avadi',
		'Kadapa',
		'Kamarhati',
		'Sambalpur',
		'Bilaspur',
		'Shahjahanpur',
		'Satara',
		'Bijapur',
		'Rampur',
		'Shivamogga',
		'Chandrapur',
		'Junagadh',
		'Thrissur',
		'Alwar',
		'Bardhaman',
		'Kulti',
		'Kakinada',
		'Nizamabad',
		'Parbhani',
		'Tumkur',
		'Khammam',
		'Ozhukarai',
		'Bihar Sharif',
		'Panipat',
		'Darbhanga',
		'Bally',
		'Aizawl',
		'Dewas',
		'Ichalkaranji',
		'Karnal',
		'Bathinda',
		'Jalna',
		'Eluru',
		'Kirari Suleman Nagar',
		'Barasat',
		'Purnia',
		'Satna',
		'Mau',
		'Sonipat',
		'Farrukhabad',
		'Sagar',
		'Rourkela',
		'Durg',
		'Imphal',
		'Ratlam',
		'Hapur',
		'Arrah',
		'Karimnagar',
		'Anantapur',
		'Etawah',
		'Ambernath',
		'North Dumdum',
		'Bharatpur',
		'Begusarai',
		'New Delhi',
		'Gandhidham',
		'Baranagar',
		'Tiruvottiyur',
		'Puducherry',
		'Sikar',
		'Thoothukudi',
		'Rewa',
		'Mirzapur',
		'Raichur',
		'Pali',
		'Ramagundam',
		'Haridwar',
		'Vijayanagaram',
		'Katihar',
		'Nagarcoil',
	];

	const internationalCities = [
		'Paris',
		'Bangkok',
		'London',
		'Dubai',
		'Singapore',
		'Kuala Lumpur',
		'New York',
		'Istanbul',
		'Tokyo',
		'Antalya',
		'Hong Kong',
		'Rome',
		'Seoul',
		'Phuket',
		'Barcelona',
		'Milan',
		'Amsterdam',
		'Vienna',
		'Venice',
		'Madrid',
		'Dublin',
		'Florence',
		'Lisbon',
		'Brussels',
		'Berlin',
		'Prague',
		'Budapest',
		'Munich',
		'Zurich',
		'Frankfurt',
		'Stockholm',
		'Copenhagen',
		'Oslo',
		'Reykjavik',
		'Helsinki',
		'Edinburgh',
		'Manchester',
		'Liverpool',
		'Glasgow',
		'Birmingham',
		'Nice',
		'Lyon',
		'Marseille',
		'Bordeaux',
		'Toulouse',
		'Strasbourg',
		'Geneva',
		'Lausanne',
		'Basel',
		'St. Moritz',
		'Warsaw',
		'Krakow',
		'Gdansk',
		'Sopot',
		'Sofia',
		'Bucharest',
		'Belgrade',
		'Zagreb',
		'Ljubljana',
		'Sarajevo',
		'Athens',
		'Thessaloniki',
		'Santorini',
		'Mykonos',
		'Heraklion',
		'Corfu',
		'Nicosia',
		'Larnaca',
		'Limassol',
		'Paphos',
		'Jerusalem',
		'Tel Aviv',
		'Haifa',
		'Beirut',
		'Dubai',
		'Abu Dhabi',
		'Doha',
		'Manama',
		'Muscat',
		'Kuwait City',
		'Riyadh',
		'Jeddah',
		'Amman',
		'Cairo',
		'Alexandria',
		'Luxor',
		'Sharm El Sheikh',
		'Hurghada',
		'Casablanca',
		'Marrakech',
		'Fes',
		'Rabat',
		'Tangier',
		'Agadir',
		'Tunis',
		'Algiers',
		'Oran',
		'Dakar',
		'Abidjan',
		'Lagos',
		'Johannesburg',
		'Cape Town',
		'Durban',
		'Nairobi',
		'Mombasa',
		'Kigali',
		'Addis Ababa',
		'Lusaka',
		'Harare',
		'Dar es Salaam',
		'Maputo',
		'Antananarivo',
		'Victoria',
		'Port Louis',
		'Male',
		'Colombo',
		'Kathmandu',
		'Dhaka',
		'Islamabad',
		'Karachi',
		'Lahore',
		'Kabul',
		'Tashkent',
		'Almaty',
		'Bishkek',
		'Dushanbe',
		'Ashgabat',
		'Tehran',
		'Mashhad',
		'Isfahan',
		'Shiraz',
		'Tabriz',
		'Baghdad',
		'Basra',
		'Kuwait City',
		'Doha',
		'Manama',
		'Muscat',
		'Dubai',
		'Abu Dhabi',
		'Riyadh',
		'Jeddah',
		'Mecca',
		'Medina',
		'Amman',
		'Jerusalem',
		'Damascus',
		'Beirut',
		'Cairo',
		'Alexandria',
		'Istanbul',
		'Ankara',
		'Izmir',
		'Bursa',
		'Antalya',
		'Athens',
		'Thessaloniki',
		'Bucharest',
		'Budapest',
		'Belgrade',
		'Sofia',
		'Zagreb',
		'Ljubljana',
		'Sarajevo',
		'Skopje',
		'Pristina',
		'Podgorica',
		'Tirana',
		'Tirana',
		'Valletta',
		'Rome',
		'Milan',
		'Venice',
		'Florence',
		'Naples',
		'Turin',
		'Bologna',
		'Genoa',
		'Verona',
		'Palermo',
		'Catania',
		'Messina',
		'Syracuse',
		'Athens',
		'Heraklion',
		'Chania',
		'Rhodes',
		'Patras',
		'Thessaloniki',
		'Larissa',
		'Volos',
		'Kavala',
		'Ioannina',
		'Chania',
		'Trikala',
		'Corfu',
		'Rethymno',
		'Agrinio',
		'Nafplio',
		'Tripoli',
	];

	return (
		<div>
			<select name='selectCity' id='selectCity'>
				{domesticCities.map((city) => (
					<option value={city} key={city}>
						{city}
					</option>
				))}
			</select>

			<select name='selectCity' id='selectCity'>
				{internationalCities.map((city) => (
					<option value={city} key={city}>
						{city}
					</option>
				))}
			</select>

			<div className='w-full h-full bg-[#F2F2F29E]'>Form</div>
		</div>
	);
}

export default Form;