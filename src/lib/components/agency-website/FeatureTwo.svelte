<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Text from './Text.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	import Heading1 from './Heading1.svelte';
	import Heading4 from './Heading4.svelte';
	import TextBig from './TextBig.svelte';
	import IconContainer from './IconContainer.svelte';
</script>

<div class="pb-40">
	<section class={AGENCY_WEBSITE_WIDTH_CLASS}>
		<div class="flex flex-col items-center justify-between gap-8 md:flex-row">
			<div class="flex max-w-[448px] flex-col">
				<Heading5 text="Features" classes="text-[#EF6D58]" />
				<div class="mt-5">
					<TextBig text="Long run, and work as an extension of the merchant's team." />
				</div>
				<div class="mt-[26px]">
					<Text
						text="Technical skills, design, business understanding, ability to put themselves in the merchant's shoes."
						classes="text-[#391400]/64"
					/>
				</div>

				<div class="mt-[26px]">
					<Text text="Read more" classes="text-[#391400]" />
				</div>
			</div>
			<div class="">
				<div class="flex flex-col overflow-hidden md:flex-row">
					<div
						class="flex min-h-[336px] w-full flex-col justify-center rounded-t-md border border-[#EEDDD3] bg-white pr-4 pl-12 md:w-1/2 md:rounded-tl-md md:rounded-tr-md md:rounded-bl-md"
					>
						<IconContainer src="/agency-website/professional.png" />

						<div class="mt-11 mb-5">
							<Heading4 text="Professional" />
						</div>
						<Text
							text="Full service range including technical skills, design."
							classes="text-[#391400]/64"
						/>
					</div>

					<!-- RIGHT COLUMN -->
					<div class="flex w-full flex-col justify-end bg-[#FCEFEA] md:w-1/2">
						<div
							class="flex min-h-[272px] flex-col justify-center rounded-b-md border border-t-0 border-[#EEDDD3] pr-4
						pl-12 md:rounded-tr-md md:rounded-br-md md:rounded-bl-none md:border-t-1 md:border-l-0"
						>
							<div class="mt-11 mb-5">
								<Heading4 text="Accessibility" />
							</div>
							<Text
								text="Business understanding, ability to put themselves."
								classes="text-[#391400]/64"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
<div class="{AGENCY_WEBSITE_WIDTH_CLASS} h-px bg-[#F3D1BF]"></div>
