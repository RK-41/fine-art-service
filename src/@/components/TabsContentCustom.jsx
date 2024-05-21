/* eslint-disable react/prop-types */

('use client');

import { TabsContent } from './ui/tabs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { format } from 'date-fns';

import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { Input } from './ui/input';
import { toast } from './ui/use-toast';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarDaysIcon } from 'lucide-react';
import { Calendar } from './ui/calendar';
// import { cn } from '../lib/utils';
import { useState } from 'react';

const FormSchema = z.object({
	pickUpLocation: z.string(),
	dropUpLocation: z.string(),
	contact: z.string().min(10, {
		message: 'Contact must be at least 10 digits.',
	}),
	shippingDate: z.date(),
});

function TabsContentCustom({ value }) {
	const [popoverOpen, setPopoverOpen] = useState(false);

	const form = useForm({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			pickUpLocation: '',
			dropUpLocation: '',
			contact: '',
			shippingDate: '',
		},
	});

	function onSubmit(data) {
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}
	return (
		<>
			<TabsContent value={value}>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='w-max space-y-6 ml-5 mt-10 text-[#444444] font-bold'
					>
						<div className='mb-20 h-max space-y-5 pr-4'>
							<FormField
								control={form.control}
								name='pick-up-location'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Pick up location</FormLabel>
										<FormControl>
											<Input
												placeholder=''
												{...field}
												className='w-[320px] sm:w-[420px]'
											/>
										</FormControl>
										{/* <FormMessage /> */}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='drop-up-location'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Drop up location</FormLabel>
										<FormControl>
											<Input
												placeholder=''
												{...field}
												className='w-[320px] sm:w-[420px]'
											/>
										</FormControl>
										{/* <FormMessage /> */}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='contact'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Contact</FormLabel>
										<FormControl>
											<Input
												type='tel'
												placeholder=''
												{...field}
												className='w-[180px]'
											/>
										</FormControl>
										{/* <FormMessage /> */}
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='shippingDate'
								render={({ field }) => (
									<FormItem className='flex flex-col'>
										<FormLabel>Shipping Date</FormLabel>
										<Popover
											isOpen={popoverOpen}
											onDismiss={() => setPopoverOpen(false)}
										>
											<PopoverTrigger asChild>
												<FormControl>
													<div className='inline-flex items-center gap-3'>
														<button
															type='button'
															className={`w-[180px] h-10 justify-start font-normal bg-white rounded-[8.5px] border-[#DADADA] ${
																!field.value && 'text-muted-foreground'
															}`}
															onClick={() => setPopoverOpen(!popoverOpen)}
														>
															{field.value ? (
																format(new Date(field.value), 'PPP')
															) : (
																<span></span>
															)}
														</button>
														<CalendarDaysIcon className='w-6 opacity-70 cursor-pointer' />
													</div>
												</FormControl>
											</PopoverTrigger>
											<PopoverContent
												className='w-auto p-0 bg-white/95 h-[350px] rounded-3xl'
												align='start'
											>
												<Calendar
													mode='single'
													selected={field.value}
													onSelect={field.onChange}
													onChange={(date) => {
														field.onChange(date);
														setPopoverOpen(false);
													}}
													disabled={(date) => date <= new Date()}
													initialFocus
												/>
											</PopoverContent>
										</Popover>
										{/* <FormMessage /> */}
									</FormItem>
								)}
							/>
						</div>

						<div className='flex justify-end h-10 px-1 mr-3'>
							<Button
								type='submit'
								className='w-[180px] text-white bg-[#004019] rounded-xl'
							>
								Get estimate{' '}
							</Button>
						</div>
					</form>
				</Form>
			</TabsContent>
		</>
	);
}

export default TabsContentCustom;
