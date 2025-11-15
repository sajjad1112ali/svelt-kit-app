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
	import TextBig from './TextBig.svelte';
	const testimonials = [
		{
			date: '25 Oct, 2021',
			image: '/agency-website/award.png',
			thumbnail: '/agency-website/bg2.png',
			name: 'SOFA',
			company: 'Awwwards.'
		},
		{
			date: '19 Oct, 2021',
			image: '/agency-website/css.png',
			thumbnail: '/agency-website/bg3.png',
			name: 'KeyBoard',
			company: 'CSS Design Awards.'
		},
		{
			date: '7 Oct, 2021',
			image: '/agency-website/fwa.png',
			thumbnail: '/agency-website/bg4.png',
			name: 'Work Media',
			company: 'The FWA.'
		}
	];
</script>

<div class="pt-31 pb-25">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<Heading2 text="Our Awards" classes="text-center" />
		
		<div class="mt-16 overflow-x-auto">
			<div class="{AGENCY_WEBSITE_WIDTH_CLASS} h-px bg-[#F3D1BF] mb-4"></div>
			{#each testimonials as item}
				<div class="flex justify-between">
					<div class="flex min-w-xs items-center gap-4">
						<img
							src={item.thumbnail}
							class="h-20 w-30 rounded-md object-cover"
							alt="Agency Design"
						/>
						<TextBig text={item.name} />
					</div>
					<div class="flex items-center">
						<Text text={item.date} classes="text-[#391400]/64" />
					</div>
					<div class="flex min-w-xs items-center justify-end">
						<div class="flex items-center">
							<Text text={item.company} classes="text-[#391400]" />
							<img src={item.image} class="h-12 w-12 rounded-md object-contain" alt={item.name} />
						</div>
					</div>
				</div>
			<div class="{AGENCY_WEBSITE_WIDTH_CLASS} h-px bg-[#F3D1BF] my-4"></div>

			{/each}
		</div>
		<div class="mt-15 flex justify-center">
			<div class="flex gap-1">
			<Text text="Want more awards?" classes="text-[#391400]/64" />
			<Text text="Explore Now" classes="text-[#391400]" />
		</div>
		</div>
	</section>
</div>
