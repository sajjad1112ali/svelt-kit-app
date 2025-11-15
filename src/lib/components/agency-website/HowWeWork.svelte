<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	import Heading1 from './Heading1.svelte';
	import Heading4 from './Heading4.svelte';
	const howWeWork = [
		{count: "1", label: "Full service range including"},
		{count: "2", label: "Technical skills, design, business"},
		{count: "3", label: "Themselves in the merchant's"},
	]
</script>

<div class="pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
			<div class="flex max-w-[448px] flex-col">
				<Heading5 text="How we work" classes="text-[#EF6D58]" />
				<div class="mt-5">
					<Heading3 text="Making Your Projects Look Awesome" />
				</div>
				<div class="mt-[26px]">
					<Text
						text="Technical skills, design, business understanding, ability to put themselves in the merchant's shoes."
						classes="text-[#391400]/64"
					/>
				</div>

				<div class="mt-[26px]">
					<Text text="Read more" classes="text-[#391400]" />
				</div>
			</div>
			<div class="grid gap-y-8">
				{#each howWeWork as item }
				<div class="flex gap-16 items-center">
					<Heading1 text={item.count} classes="text-[#391400]" />
					<Heading4 text={item.label} />
				</div>
				{/each}
			</div>
		</div>
	</section>
</div>
<div class="{AGENCY_WEBSITE_WIDTH_CLASS} h-px bg-[#F3D1BF]"></div>

