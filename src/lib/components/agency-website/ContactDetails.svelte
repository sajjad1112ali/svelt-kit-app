<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import TextBig from './TextBig.svelte';
	import Heading3 from './Heading3.svelte';
	import IconContainer from './IconContainer.svelte';
	import Heading5 from './Heading5.svelte';
	const stats = [
		{
			count: 'Phone',
			icon: '/agency-website/phone.png',
			lebel: '+1 (234) 567-89-00'
		},
		{
			count: 'Email',
			icon: '/agency-website/email.png',
			lebel: 'info@agency.com'
		},
		{
			count: 'Address',
			icon: '/agency-website/address.png',
			lebel: '2247 Lunetta Street, TX 76301'
		}
	];
</script>

<div class="mt-20 pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div
			class="grid grid-cols-1 divide-y divide-[#F3D1BF] rounded-md border border-[#F3D1BF] md:grid-cols-3 md:divide-x md:divide-y-0"
		>
			{#each stats as stat}
				<div class="flex flex-col gap-6 py-8 pl-12">
					<div class="flex items-center gap-6">
						<IconContainer src={stat.icon} />
						<Heading5 text={stat.count} classes="text-[#EF6D58]" />
					</div>
					<TextBig text={stat.lebel} />
				</div>
			{/each}
		</div>
	</section>
</div>
