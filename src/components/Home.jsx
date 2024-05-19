// import React from 'react'
import art_bg from '../assets/art_bg.jpeg';
import Form from './Form';

function Home() {
	const transportation = [
		'Transportation by road should be in fully closed hard walled secured trucks, equipped with a mobile phone and an internal strapping system.  A supply of clean PU Foam, bubble wrap and acid free tissue should be carried.',
		'The cargo area of the truck should be clean and free of any loose objects/particles.',
		'Works should be crated for transportation, as per Museum specifications.',
		'Crates should be strapped or wedged so that they cannot move about when in transit.',
		'There should be a minimum of two UAPL staff with the works in transit, at all times, other than when the shipments are on board vessel or on the aircraft or accompanied by a courier designated by the lender/Museum/Art Gallery/Organiser.',
		'Loading/Unloading of works into the trucks in strong wind or rain is to be avoided, unless required in an emergency.',
	];

	const airportSupervision = [
		'To handle successful fine art consignment is to have maximum control on the consignment starting from packing, handling, transportation and handover to airlines.',
		'The key is to go one step more and oversee the handling at airport, witnessing the palletizing / de-palletizing of the consignment.',
		'Permissions for overseeing the handling at airport can be obtained at the time of filing the documents at Customs (depending on the security situation at each city).',
		'Professional Art handlers for examination & x-ray handling of crates.',
	];

	return (
		<div className='flex justify-between'>
			<div>
				<div className='w-full max-w-[654px] h-[320px] sm:h-[360px] md:h-[408px] m-1.5 overflow-hidden relative rounded-[5.44px] font-bold'>
					<img
						src={art_bg}
						alt='art bg'
						className='w-full absolute top-[50%] translate-y-[-50%] opacity-30'
					/>

					<div className='w-full h-full translate-x-0'>
						<div className='w-[320px] sm:w-[360px] md:w-[460px] h-[90px] sm:h-[100px] md:h-[118px] mt-[18px] bg-[#EBE9FF9E]/[62%] rounded-r-[30px] flex flex-col justify-center items-center'>
							<p className='text-md sm:text-xl md:text-[26px] text-[#292355]'>
								BOOK YOUR SERVICE NOW
							</p>
							<p className='text-3xl sm:text-4xl md:text-5xl text-[#646464] '>
								Fine art service
							</p>
						</div>

						<div className='flex flex-col gap-7 m-5 text-3xl sm:text-4xl md:text-5xl text-[#292355]'>
							<p
								style={{
									WebkitTextStroke: '1px black',
								}}
							>
								ON TIME DELIVERY
							</p>
							<p>ECONOMICAL PRICE</p>
							<p>ZERO DAMAGE POLICY</p>
						</div>
					</div>
				</div>

				<div className='flex flex-col md:flex-row ml-5 sm:ml-10'>
					<div className='w-[388px] h-full rounded-xl bg-[#D9D9D95E]/30 my-3 mr-3 p-3 text-[#292355] '>
						<h3 className='text-center font-bold text-xl '>Transportation</h3>

						<ul className='list-disc list-outisde mx-3 p-4'>
							{transportation.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>

					<div className='w-[388px] h-full rounded-xl bg-[#D9D9D95E]/30 my-3 mr-3 p-3 text-[#292355]'>
						<h3 className='text-center font-bold text-xl'>
							Airport Supervision
						</h3>

						<ul className='list-disc list-outisde mx-3 p-4'>
							{airportSupervision.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className='w-full ml-20'>
				<Form />
			</div>
		</div>
	);
}

export default Home;
