<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	import IconContainer from './IconContainer.svelte';
	import Heading4 from './Heading4.svelte';
	import TextBig from './TextBig.svelte';
	const blogs = [
		{
			image: '/agency-website/blog1.png',
			title: 'Agency is a business you hire to outsource',
			date: '5 Nov, 2021',
			category: 'Stories'
		},
		{
			image: '/agency-website/blog2.png',
			title: 'Outsource your digital marketing efforts',
			date: '29 Oct, 2021',
			category: 'Design'
		},
		{
			image: '/agency-website/blog3.png',
			title: 'Your business with a variety of digital',
			date: '21 Oct, 2021',
			category: 'Marketing'
		}
	];
</script>

<div class="pb-20">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex gap-4">
			<div class="grid flex-1 grid-cols-1 gap-4">
				<Heading5 text="Our Blog" classes="text-[#EF6D58]" />
				<Heading2 text="Latest Blog Articles" classes="max-w-[336px] text-[#391400]" />
			</div>
			<div class="flex items-end justify-end">
				<Button text="Discover All" classes="flex-1 bg-white text-[#391400]" />
			</div>
		</div>
		<div class="mt-16 grid grid-cols-1 gap-6 rounded-md md:grid-cols-3">
			{#each blogs as item}
				<div class="">
					<img src={item.image} class="w-full object-cover" alt={item.title} />
					<TextBig text={item.category} classes="pt-6 pb-4" />

					<Heading4 text={item.title} classes="text-[#391400]" />

					<Text text={item.date} classes="text-[#391400]/64 pt-4" />
				</div>
			{/each}
		</div>
	</section>
	<div class="{AGENCY_WEBSITE_WIDTH_CLASS} mt-26 h-px bg-[#F3D1BF]"></div>
</div>
