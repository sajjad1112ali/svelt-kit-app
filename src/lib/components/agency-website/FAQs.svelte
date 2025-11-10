<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import AccordionItem from './AccordionItem.svelte';

	// Data structure for your accordion items
	const accordionItems = [
		{
			id: 1,
			title: 'Consultation',
			content:
				'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
		},
		{
			id: 2,
			title: 'Research and Strategy Development',
			content:
				'We begin by understanding your business goals, audience, and current market landscape. This involves analyzing data, identifying opportunities, and defining clear objectives. Based on these insights, we create a tailored strategy designed to deliver measurable impact.'
		},
		{
			id: 3,
			title: 'Implementation',
			content:
				'Once the strategy is finalized, we execute each step with precision. This may include design, development, content creation, or campaign setup depending on your project. Our focus is on delivering high-quality work that aligns with your brand and goals.'
		},
		{
			id: 4,
			title: 'Monitoring and Optimization',
			content:
				'After launch, we continuously track performance to ensure results are on target. We evaluate what’s working and identify areas for improvement. Based on real-time data, we adjust and refine elements to maximize effectiveness.'
		},
		{
			id: 5,
			title: 'Reporting and Communication',
			content:
				'We believe in transparent collaboration, so you’re always informed. Regular updates and reports highlight progress, insights, and performance outcomes. This keeps everyone aligned and allows for informed decisions moving forward.'
		},
		{
			id: 6,
			title: 'Continual Improvement',
			content:
				'Our process doesn’t stop at delivery. We keep enhancing, refining, and scaling the strategy based on evolving needs and new insights. This long-term approach ensures sustained growth and ongoing success.'
		}
	];
</script>

<div class="pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col justify-between gap-8 md:flex-row">
			<div class="flex max-w-[470px] flex-col">
				<div>
					<Heading5 text="Faq" classes="text-[#EF6D58]" />
				</div>
				<div class="mt-5">
					<Heading2 text="Frequently Asked Questions" />
				</div>
				<div class="mt-[26px]">
					<Text
						text="A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house."
						classes="text-[#391400]/64"
					/>
				</div>
				<div class="mt-[26px]">
					<Text text="Contact Us" classes="text-[#391400]" />
				</div>
			</div>	
			<div class="grid grid-cols-1 border border-[#F3D1BF] divide-y max-w-[570px]">
				{#each accordionItems as item, i}
					<AccordionItem heading={item.title} content={item.content} index={i + 1} isLast={accordionItems.length - 1 === i}/>
				{/each}
			</div>
		</div>
	</section>
</div>
