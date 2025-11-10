<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import TextBig from './TextBig.svelte';
	const features = [
		'Range including technical skills',
		'Business understanding',
		'Partner on the long run'
	];
</script>

<div class="pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
			<div class="flex max-w-[470px] flex-col">
				<div>
					<Heading5 text="Features" classes="text-[#EF6D58]" />
				</div>
				<div class="mt-5 w-[397px]">
					<Heading2 text="Give Your Site A New Look" />
				</div>
				<div class="mt-[26px]">
					<TextBig
						text="Service range including technical skills, design, business understanding."
					/>
				</div>

				<div class="mt-[26px] grid gap-y-6">
					{#each features as feature}
						<div class="flex gap-4">
							<img src="/agency-website/check.png" class="h-8 w-8 object-cover" alt="Check icon" />
							<Text text={feature} classes="text-[#391400]/64" />
						</div>
					{/each}
				</div>
			</div>
			<img
				src="/agency-website/features.png"
				class="h-[586px] w-[566px] object-cover"
				alt="Agency Design"
			/>
		</div>
	</section>
</div>
