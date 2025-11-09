<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading3 from './Heading3.svelte';
	import TextBig from './TextBig.svelte';
	import TextSmall from './TextSmall.svelte';
</script>

<div class="mt-32 pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
			<img
				src="/agency-website/founder.png"
				class="h-[448px] w-[570px] object-contain"
				alt="Agency Design"
			/>

			<div class="flex max-w-[470px] flex-col">
				<div>
					<Heading5 text="Video Reel" classes="text-[#EF6D58]" />
				</div>
				<div class="relative mt-8">
					<img
						src="/agency-website/quote.png"
						class="absolute -top-12 right-20 z-0 h-20 w-20 opacity-80"
						alt="quote"
					/>

					<Heading3
						text="Digital agency is a business you hire to outsource your digital marketing efforts"
						classes="relative z-10 text-white"
					/>

					<TextBig text="Ren Delan" classes="relative z-10 text-white mt-11" />

					<TextSmall text="Founder" classes="relative z-10 mt-2.5" />
				</div>
			</div>
		</div>
	</section>
</div>
