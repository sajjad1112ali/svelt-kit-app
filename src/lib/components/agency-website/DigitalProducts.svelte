<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
</script>

<div class="pt-26 pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-8">
			<img
				src="/agency-website/digital-products.png"
				class="h-auto w-full lg:h-[586px] lg:w-[566px] object-cover"
				alt="Agency Design"
			/>
			<div class="flex max-w-[470px] flex-col">
				<div>
					<Heading5 text="Service" classes="text-[#EF6D58]" />
				</div>
				<div class="mt-5">
					<Heading2 text="Making Complex Digital Products" />
				</div>
				<div class="mt-[26px]">
					<Text
						text="Agency provides a full service range including technical skills, design, business."
						classes="text-[#391400]/64"
					/>
				</div>
				<div class="mt-[26px]">
					<div class="flex justify-center gap-4">
						<!-- Profile image circle -->
						<div class="flex items-end justify-center h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-[#F7CB47]">
							<img
								src="/agency-website/jennymurtaugh.png"
								class="h-[58px] w-[47px] object-cover object-bottom"
								alt="User"
							/>
						</div>

						<div class="max-w-sm">
							<Text
								text={"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."}
								classes="text-[#391400]/64"
							/>
							<Text text="Jenny Murtaugh" classes="text-[#391400]" />
						</div>
					</div>
				</div>
				<div class="mt-[26px]">
					<Button text="Explore" classes="bg-white text-[#391400]" />
				</div>
			</div>
		</div>
	</section>
</div>
