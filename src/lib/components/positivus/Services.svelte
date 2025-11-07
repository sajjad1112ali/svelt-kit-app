<script lang="ts">
	import Heading2 from './Heading2.svelte';
	import Paragraph from './Paragraph.svelte';
	import ServiceCard from './ServiceCard.svelte.svelte';
	const services = [
		{
			title: 'Search engine optimization',
			image: '/positivus/search-engine.png',
			bg: 'bg-white',
			heading: 'bg-[#B9FF66] text-black',
			arrowClass: 'bg-black text-[#B9FF66]'
		},
		{
			title: 'Pay-per-click advertising',
			image: '/positivus/pay-per-click.png',
			bg: 'bg-[#B9FF66]',
			heading: 'bg-white text-black',
			arrowClass: 'bg-black text-[#B9FF66]'
		},
		{
			title: 'Social Media Marketing',
			image: '/positivus/social-media.png',
			bg: 'bg-black',
			heading: 'bg-white text-black',
			arrowClass: 'bg-white text-black'
		},
		{
			title: 'Email Marketing',
			image: '/positivus/email-marketing.png',
			bg: 'bg-white',
			heading: 'bg-[#B9FF66] text-black',
			arrowClass: 'bg-black text-[#B9FF66]'
		},
		{
			title: 'Content Creation',
			image: '/positivus/content-creator.png',
			bg: 'bg-[#B9FF66]',
			heading: 'bg-white text-black',
			arrowClass: 'bg-black text-[#B9FF66]'
		},
		{
			title: 'Analytics and Tracking',
			image: '/positivus/analytics.png',
			bg: 'bg-black',
			heading: 'bg-[#B9FF66] text-black',
			arrowClass: 'bg-white text-black'
		}
	];
</script>

<section class="pt-[70px]">
	<div class="flex flex-col sm:flex-row items-center gap-4">
		<Heading2 text="Services" classes="bg-[#B9FF66]" />
		<div class="max-w-md sm:max-w-2xl">
			<Paragraph
				text="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
			/>
		</div>
	</div>
	<div class="mt-[80px] grid grid-cols-1 gap-10 md:grid-cols-2">
		{#each services as item}
			<ServiceCard {...item} />
		{/each}
	</div>
</section>
