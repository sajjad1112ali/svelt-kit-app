<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Heading3 from './Heading3.svelte';
	import IconContainer from './IconContainer.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading4 from './Heading4.svelte';
	const menus = [
		{
			name: 'Menu',
			links: ['About', 'Services', 'Blog', 'Contact']
		},
		{
			name: 'Services',
			links: ['Design', 'Services', 'Marketing', 'See More']
		}
	];
	const socialIcons = [
		{
			icon: '/agency-website/facebook.png',
			link: '#',
			name: 'Facebook',
			dimenssion: 'h-4 w-2.5'
		},
		{
			icon: '/agency-website/twitter.png',
			link: '#',
			name: 'Twitter',
			dimenssion: 'h-3 w-4'
		},
		{
			icon: '/agency-website/instagram.png',
			link: '#',
			name: 'Instagram',
			dimenssion: 'h-4 w-4'
		}
	];
</script>

<div class="{AGENCY_WEBSITE_WIDTH_CLASS} mt-20 pb-40">
	<section>
		<div class="grid grid-cols-1 md:grid-cols-4">
			<div>
				<Heading4 text="Agency" />
			</div>
			{#each menus as menu}
				<div class="flex flex-col gap-5">
					<Heading5 text={menu.name} classes="text-[#EF6D58]" />
					<div>
						{#each menu.links as link}
							<div>
								<Text text={link} classes="text-[#391400]/64" />
							</div>
						{/each}
					</div>
				</div>
			{/each}
			<div class="flex justify-end gap-4">
				{#each socialIcons as social}
					<div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F26A4F]">
						<img src={social.icon} class={social.dimenssion} alt={social.name} />
					</div>
				{/each}
			</div>
		</div>
	</section>
	<div class="{AGENCY_WEBSITE_WIDTH_CLASS} mt-26 h-px bg-[#F3D1BF]"></div>
	<div class="flex justify-between pt-11 mb-20">
		<div>
			<Text text="Copyright © 2022 Laaqiq. All Rights Reserved." classes="text-[#391400]/64" />
		</div>
		<div class="flex gap-17">
			<Text text="Terms of Use" classes="text-[#391400]" />
			<Text text="Privacy Policy" classes="text-[#391400]" />
		</div>
	</div>
</div>