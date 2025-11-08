<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
</script>

<div class="pt-26 pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
			<img
				src="/agency-website/agency-design.png"
				class="h-[586px] w-[566px] object-cover"
				alt="Agency Design"
			/>
			<div class="flex max-w-[470px] flex-col">
				<div>
					<Heading5 text="Modern Studio" classes="text-[#EF6D58]" />
				</div>
				<div class="mt-5">
					<Heading2 text="An Experience Design Agency" />
				</div>
				<div class="mt-[26px]">
					<Text
						text="Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team."
						classes="text-[#391400]/64"
					/>
				</div>

				<div class="mt-[26px]">
					<Button text="About Us" classes="bg-white text-[#391400]" />
				</div>
			</div>
		</div>
	</section>
</div>
