<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading3 from './Heading3.svelte';
	import VIdeo from './Video.svelte';
</script>

<div class="mt-32 pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col justify-between items-center gap-8 md:flex-row">
			<VIdeo />

			<div class="flex max-w-[470px] flex-col">
				<div>
					<Heading5 text="Video Reel" classes="text-[#EF6D58]" />
				</div>
				<div class="mt-5">
					<Heading3 text="Unlock The Greatest Value Possible" />
				</div>
				<div class="mt-[26px]">
					<Text
						text="Design, business understanding, ability to put themselves in the merchant's shoes meant to partner."
						classes="text-[#391400]/64"
					/>
				</div>
			</div>
		</div>
	</section>
</div>
