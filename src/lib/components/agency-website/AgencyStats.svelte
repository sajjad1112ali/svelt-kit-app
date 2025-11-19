<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import TextBig from './TextBig.svelte';
	import Heading3 from './Heading3.svelte';
	const stats = [
		{
			count: '42',
			lebel: 'Years of experience'
		},
		{
			count: '73+',
			lebel: 'Agency members'
		},
		{
			count: '5,000',
			lebel: 'Projects complete'
		}
	];
</script>

<div class="pb-40">
	<section class="{AGENCY_WEBSITE_WIDTH_CLASS} flex justify-center">
		<div
			class="grid grid-cols-1 divide-y divide-[#F3D1BF] rounded-md border border-[#F3D1BF] md:grid-cols-3 md:divide-x md:divide-y-0 w-80 md:w-full
"
		>
			{#each stats as stat}
				<div class="flex flex-col gap-3 py-11 pl-12">
					<Heading3 text={stat.count} />
				<TextBig text={stat.lebel}/>
			</div>
			{/each}
		</div>
	</section>
</div>
