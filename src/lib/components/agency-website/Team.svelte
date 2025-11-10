<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Heading5 from './Heading5.svelte';
	import Heading3 from './Heading3.svelte';
	import SplideTeamMembers from './SplideTeamMembers.svelte';
</script>

<div class="pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="grid grid-cols-1 gap-4">
			<Heading5 text="Our Team" classes="text-[#EF6D58]" />
			<Heading3 text="Team of Designers and Developers" classes="max-w-[531px] text-white" />
		</div>
		<SplideTeamMembers />
	</section>
</div>
