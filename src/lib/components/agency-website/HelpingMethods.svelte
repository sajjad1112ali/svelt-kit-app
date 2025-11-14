<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	import IconContainer from './IconContainer.svelte';
	import Heading4 from './Heading4.svelte';
	const helpingMethods = [
		{
			image: '/agency-website/design.png',
			title: 'Design',
			description: 'Agency provides a full service range including technical skills, design.',
			ctaLabel: 'Learn More'
		},
		{
			image: '/agency-website/development.png',
			title: 'Development',
			description: 'Full service range including technical skills, design, business.',
			ctaLabel: 'Discover More'
		},
		{
			image: '/agency-website/marketing.png',
			title: 'Marketing',
			description: 'Technical skills, design, business understanding, ability.',
			ctaLabel: 'Explore Now'
		}
	];
</script>

<div class="pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="grid grid-cols-1 gap-4">
			<Heading5 text="Service" classes="text-[#EF6D58]" />
			<Heading3 text="How Our Agency Can Help" classes="max-w-[336px]" />
		</div>
		<div
			class="grid mt-9 grid-cols-1 divide-y divide-[#F3D1BF] rounded-md border border-[#F3D1BF] md:grid-cols-3 md:divide-x md:divide-y-0"
		>
			{#each helpingMethods as item}
				<div class="py-12 pr-4 pl-12">
					<IconContainer src={item.image} />
					<div class="mt-11 mb-5">
						<Heading4 text={item.title} />
					</div>

					<Text text={item.description} classes="text-[#391400]/64 mb-5" />
					<Text text={item.ctaLabel} classes="text-[#391400]" />
				</div>
			{/each}
		</div>
	</section>
</div>
