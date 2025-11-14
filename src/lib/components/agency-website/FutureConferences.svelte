<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	import IconContainer from './IconContainer.svelte';
	import Heading4 from './Heading4.svelte';
	import Heading1 from './Heading1.svelte';
	const conferences = [
		{
			date: '3',
			monthYear: 'November 2021',
			time: '9:00 am – 3:00 pm',
			title: 'Design Weeks',
			description: 'Digital agency is a business you hire to outsource your digital.',
			url: 'Explore Now'
		},
		{
			date: '15',
			monthYear: 'November 2021',
			time: '1:00 pm – 8:00 pm',
			title: 'Interior Design',
			description: 'Marketing efforts, instead of handling in-house.',
			url: 'Explore Now'
		},
		{
			date: '2',
			monthYear: 'December 2021',
			time: '10:00 am – 2:00 pm',
			title: 'The F design events',
			description: 'Provide your business with a variety of digital solutions to promote.',
			url: 'Explore Now'
		}
	];
</script>

<div class="pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col items-center gap-5">
			<Heading5 text="Events" classes="text-[#EF6D58]" />
			<Heading2
				text="Explore Future Conferences"
				classes="text-white  max-w-[427px] min-w-[427px] text-center"
			/>
		</div>
		<div class="mt-11 grid grid-cols-1 md:grid-cols-3 gap-9">
			{#each conferences as item}
				<div class="border border-[#3A3C56] py-12 px-11 rounded-md">
					<div class="flex flex-col gap-5">
						<div class="flex items-center gap-3">
							<Heading1 text={item.date} />
							<Heading4 text={item.monthYear} classes="text-white w-32" />
						</div>
						<div class="flex items-center gap-2">
							<img src="/agency-website/time.png" alt="time icon" class="w-4 h-4" />
							<Text text={item.time} classes="text-white" />
						</div>
					</div>
					<div class="h-px bg-[#3A3C56] mt-9 mb-10"></div>
					<div class="mt-11 mb-5">
						<Heading4 text={item.title} classes="text-white" />
					</div>

					<Text text={item.description} classes="text-[#FFFFFF]/64 mb-5" />
					<Text text={item.url} classes="text-white" />
				</div>
			{/each}
		</div>
		<div class="text-center">
			<Button text="Explore More" classes="bg-transparent border border-white/29 text-white mt-16" />
		</div>
	</section>
</div>
