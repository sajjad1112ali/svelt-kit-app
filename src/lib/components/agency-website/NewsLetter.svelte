<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	import IconContainer from './IconContainer.svelte';
	import Heading4 from './Heading4.svelte';
	import TextBig from './TextBig.svelte';
	const blogs = [
		{
			image: '/agency-website/blog1.png',
			title: 'Agency is a business you hire to outsource',
			date: '5 Nov, 2021',
			category: 'Stories'
		},
		{
			image: '/agency-website/blog2.png',
			title: 'Outsource your digital marketing efforts',
			date: '29 Oct, 2021',
			category: 'Design'
		},
		{
			image: '/agency-website/blog3.png',
			title: 'Your business with a variety of digital',
			date: '21 Oct, 2021',
			category: 'Marketing'
		}
	];
</script>

<div class="pb-31">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col items-center gap-4 px-4 md:flex-row">
			<Heading3 text="News Letter" classes="text-[#391400] flex-shrink-0 w-72" />

			<div class="flex w-full items-center justify-end gap-6">
				<input
					type="email"
					placeholder="Your email"
					class="flex-shrink-0 min-w-[370px] rounded-lg border border-[#D9C7BD] bg-white px-4 py-3 text-[#391400] outline-none focus:ring-2 focus:ring-[#391400] "
				/>
				<div>
					<Button text="Subscribe All" classes="bg-white text-[#391400]" />
				</div>
			</div>
		</div>
	</section>
</div>
