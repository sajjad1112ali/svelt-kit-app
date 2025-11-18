<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import TextBig from './TextBig.svelte';
</script>

<div class="pb-40">
	<section class={`${AGENCY_WEBSITE_WIDTH_CLASS} bg-[#EF6D58] rounded-md px-25 pt-9.5 pb-17`}>
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
			</div>
			<img
				src="/agency-website/dream-project.png"
				class="h-[432px] w-[444px] object-cover"
				alt="Agency Design"
			/>
		</div>
	</section>
</div>
