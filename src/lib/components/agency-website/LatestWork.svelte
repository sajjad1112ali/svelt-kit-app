<script lang="ts">
	import Heading2 from './Heading2.svelte';
	import Heading5 from './Heading5.svelte';
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Heading3 from './Heading3.svelte';
	import Text from './Text.svelte';

	export const projects = [
		{
			id: 1,
			title: 'UX Website Redesign',
			category: 'Design',
			image: '/agency-website/bg1.png'
		},
		{
			id: 2,
			title: 'Brand Identity Pack',
			category: 'Branding',
			image: '/agency-website/bg2.png'
		},
		{
			id: 3,
			title: 'Character Mascot Art',
			category: 'Illustration',
			image: '/agency-website/bg3.png'
		},
		{
			id: 4,
			title: 'Product Motion Demo',
			category: 'Motion',
			image: '/agency-website/bg4.png'
		},
		{
			id: 5,
			title: 'Product Motion Demo 2',
			category: 'Motion',
			image: '/agency-website/bg1.png'
		},
		{
			id: 6,
			title: 'Character Mascot Art 2',
			category: 'Illustration',
			image: '/agency-website/bg2.png'
		},
		{
			id: 7,
			title: 'Product Motion Demo 3',
			category: 'Motion',
			image: '/agency-website/bg3.png'
		},
		{
			id: 8,
			title: 'Brand Identity Pack 2',
			category: 'Branding',
			image: '/agency-website/bg4.png'
		},
	];
	const tabs = ['Show All', 'Design', 'Branding', 'Illustration', 'Motion'];

	let selected = $state('Show All');

	let filtered = $derived(
		selected === 'Show All' ? projects : projects.filter((p) => p.category === selected)
	);

	const chunk = (arr: any[]) => {
		const result = [];
		for (let i = 0; i < arr.length; i += 2) result.push(arr.slice(i, i + 2));
		return result;
	};

	let rows = $derived(chunk(filtered));
	const getCount = (category: string) => projects.filter((p) => p.category === category).length;
</script>

<section class={`${AGENCY_WEBSITE_WIDTH_CLASS} py-20`}>
	<div class="flex flex-col items-center gap-5">
		<Heading5 text="Portfolio" classes="text-[#EF6D58]" />
		<Heading2 text="Latest Work" classes="text-white" />
	</div>
	<div class="mb-12 mt-9 text-center">
		<div class="inline-flex gap-6 font-medium text-[#391400]">
			{#each tabs as tab}
				<button
					class="epilogue border-b-2 border-transparent pb-1 text-base leading-8 font-normal tracking-normal transition
          {selected === tab ? 'text-white' : 'text-[#FFFFFF]/64'}"
					onclick={() => (selected = tab)}
				>
					{tab}
					<sup class="align-super text-sm epilogue">{tab === "Show All" ? projects.length : getCount(tab)}</sup>
				</button>
			{/each}
		</div>
	</div>

	{#each rows as row, rowIndex}
		<div class="mb-6 flex flex-col gap-6 md:flex-row">
			<div
				class={`group relative h-[416px] cursor-pointer overflow-hidden rounded-xl
        ${rowIndex % 2 === 0 ? 'md:w-1/3' : 'md:w-2/3'}`}
			>
				<img
					src={row[0].image}
					alt={row[0].title}
					class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
				/>

				<div class="absolute right-4 bottom-4 left-4">
					<span
						class="epilogue mb-2 inline-block rounded-[19px] bg-white px-4 py-1 text-base leading-8 font-normal tracking-normal"
					>
						{row[0].category}
					</span>
					<Heading3 text={row[0].title} classes="text-white" />
				</div>
			</div>

			{#if row[1]}
				<div
					class={`group relative h-[416px] cursor-pointer overflow-hidden rounded-xl
        ${rowIndex % 2 === 0 ? 'md:w-2/3' : 'md:w-1/3'}`}
				>
					<img
						src={row[1].image}
						alt={row[1].title}
						class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
					/>

					<div class="absolute right-4 bottom-4 left-4">
						<span
							class="epilogue mb-6 inline-block rounded-[19px] bg-white px-4 py-1 text-base leading-8 font-normal tracking-normal"
						>
							{row[1].category}
						</span>
						<Heading3 text={row[0].title} classes="text-white" />
					</div>
				</div>
			{/if}
		</div>
	{/each}
</section>
