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
	<section class={`${AGENCY_WEBSITE_WIDTH_CLASS} bg-[#FDF0E9] h-[885px] md:h-auto`}>
		<div class="mt-9 grid grid-cols-1 md:grid-cols-3">
			<div class="relative py-10 md:py-12 pr-4 pl-12">
				<img src="/agency-website/star.png" class="absolute h-37 w-37 -top-15" alt="Star" />
				<div class="mt-11 mb-4 md:mb-5">
					<Heading5 text="Get Started" classes="text-[#EF6D58]" />
				</div>

				<div class="min-w-[248px] max-w-[248px]">
					<Heading4 text="We Help Companies Move Faster" />
				</div>
				<div class="mt-3 md:mt-6">
					<Button text="How We Work" />
				</div>
			</div>
			<div class="flex justify-center items-center">
				<img src="/agency-website/contact.png" class="h-[192px] w-[338px]" alt="Contact" />
			</div>
			<div class="relative h-full flex justify-center items-center ">
				<img src="/agency-website/art.png" class="absolute h-[242px] w-[283px] top-26 left-36 sm:left-48 sm:top-26  md:-left-2 md:top-11 lg:left-5 lg:top-8" alt="Star" />

				<img src="/agency-website/girl.png" class="absolute max-h-sm max-w-sm top-0 md:-top-17 object-cover" alt="Girl" />
			</div>
		</div>
	</section>
</div>
