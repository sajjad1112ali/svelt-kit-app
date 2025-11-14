<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	const plans = [
		{
			heading: 'Consultation',
			price: 'Free',
			isPopular: false,
			description: 'Your digital marketing efforts, instead of handling in-house.',
			perks: [
				{
					name: 'Brand Design',
					available: true
				},
				{
					name: 'Market Analysis',
					available: false
				},
				{
					name: 'Production',
					available: false
				}
			]
		},
		{
			heading: 'Design',
			price: '$1500',
			description: 'Provide your business with a variety of digital solutions to promote.',
			isPopular: true,
			perks: [
				{
					name: 'Brand Design',
					available: true
				},
				{
					name: 'Market Analysis',
					available: true
				},
				{
					name: 'Production',
					available: false
				}
			]
		},
		{
			heading: 'Design+Code',
			price: '$2900',
			description: 'Help you hit your marketing goals and grow your business.',
			isPopular: false,
			perks: [
				{
					name: 'Brand Design',
					available: true
				},
				{
					name: 'Market Analysis',
					available: true
				},
				{
					name: 'Production',
					available: true
				}
			]
		}
	];
</script>

<div class="pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="grid grid-cols-1 gap-4">
			<Heading5 text="Pricing" classes="text-[#EF6D58]" />
			<Heading3 text="Check Our Pricing Plans" classes="max-w-[358px]" />
		</div>
		<div class="flex flex-col items-end justify-center md:flex-row">
			{#each plans as item}
				<div class={`w-full rounded-sm border border-gray-300 px-12  md:w-1/3 ${item.isPopular ? "py-8 bg-white shadow-lg " : "py-11" }`}>
					{#if item.isPopular}
						<Button text="Popular" classes="bg-[#EF6D58] text-white mb-5.5 !rounded-full" />
					{/if}
					<Heading5 text={item.heading} classes="text-[#EF6D58]" />
					<Heading3 text={item.price} classes="mt-4.5" />
					<Text text={item.description} classes="text-[#391400] mt-4" />

					<div class="mt-7 flex flex-col gap-8">
						{#each item.perks as perk}
							<div class="flex items-center gap-3">
								<div
									class="flex h-4 w-4 items-center justify-center rounded-full bg-[#EF6D58] text-white"
								>
									<span>+</span>
								</div>
								<Text text={perk.name} classes="text-[#391400]" />
							</div>
						{/each}
					</div>

					<Button text="Contact Us" classes={!item.isPopular ? "text-black bg-white mt-9" : "bg-[#EF6D58] text-white mt-9"} />
				</div>
			{/each}

			<!-- Plan 2 (Highlighted & Lifted) -->
			<!-- <div class="-mt-6 w-full border border-gray-300 p-8 text-center shadow-lg md:w-1/3">
			</div> -->
		</div>
	</section>
</div>
