<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	import IconContainer from './IconContainer.svelte';
	import Heading4 from './Heading4.svelte';
	import Heading1 from './Heading1.svelte';
	const testimonials = [
		{
			words:
				'A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
			image: '/agency-website/alan.png',
			name: 'Alan Martí',
			company: 'Meta Inc.'
		},
		{
			words:
				'Provide your business with a variety of digital solutions to promote your product or service online.',
			image: '/agency-website/richardo.png',
			name: 'Richardo Kann',
			company: 'Photogram'
		},
		{
			words:
				'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.',
			image: '/agency-website/graham.png',
			name: 'Graham Griffiths',
			company: 'Twitor'
		},
		{
			words:
				'Promote your product or service online and help you hit your marketing goals and grow your business.',
			image: '/agency-website/maria.png',
			name: 'Maria Trofimova',
			company: 'Whochat'
		}
	];
</script>

<div class="pt-31 pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col items-center gap-5">
			<Heading5 text="Testimonials" classes="text-[#EF6D58]" />
			<Heading2 text="What Our Clients Saying" classes="max-w-[394px] min-w-[394px] text-center" />
		</div>

		<div class="ap-0 mt-16 columns-1 space-y-0 [column-gap:0] md:columns-2">

			{#each testimonials as item}
				<div class="break-inside-avoid border border-[#E7D8CC] p-12">
					<div class="grid columns-1 gap-9">
						<div class="flex gap-1 text-yellow-500">★★★★★</div>

						<Text text={item.words} classes="text[#391400]/64" />

						<div class="flex items-center gap-6">
							<img src={item.image} class="h-20 w-20 object-cover" alt={item.name} />
							<div class="grid gap-1">
								<Heading4 text={item.name} />
								<Text text={item.company} classes="text[#391400]" />
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-16 text-center">
			<Button text="Explore" classes="bg-white text-[#391400]" />
		</div>
	</section>
</div>
