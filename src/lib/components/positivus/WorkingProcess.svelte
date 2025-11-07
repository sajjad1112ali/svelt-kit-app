<script>
	import AccordionItem from './AccordionItem.svelte';
	import Heading2 from './Heading2.svelte';
	import Paragraph from './Paragraph.svelte';

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

<section class="px-4 py-20">
	<div class="flex flex-col items-center gap-4 sm:flex-row">
		<Heading2 text="Our Working Process" />
		<div class="w-80">
			<Paragraph text="Step-by-Step Guide to Achieving Your Business Goals" />
		</div>
	</div>

	<div class="space-y-4 pt-20">
		{#each accordionItems as item, i}
			<AccordionItem heading={item.title} content={item.content} index={i + 1} />
		{/each}
	</div>
</section>
