<script lang="ts">
	import { AGENCY_WEBSITE_WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import Button from './Button.svelte';
	import Heading5 from './Heading5.svelte';
	import Heading1 from './Heading1.svelte';
	import Text from './Text.svelte';
</script>

<div class="bg-[#28293e]">
	<section class="{AGENCY_WEBSITE_WIDTH_CLASS} py-16">
		<div class="flex flex-col-reverse justify-between lg:flex-row items-center lg:gap-[81px]
">
			<div class="flex flex-col gap-4 md:w-[513px]">
				<Heading5 text="Modern Studio" classes="text-[#EF6D58]" />
				<Heading1 text="We’re Help To Build Your Dream Project" />
                <Text text="Agency provides a full service range including technical skills, design, business understanding." />
				<div class="flex gap-4">
					<Button text="How We Work" />
					<Button text="Contact us" classes="bg-transparent font-normal text-white" />
				</div>
				<div class="flex items-center gap-4">
                    <div class="h-12 w-12 flex items-end justify-center rounded-full bg-[#B550F6]">
                        <img src="/agency-website/user.png" class="h-[43px] w-[38px] object-cover" alt="User" />
                    </div>
					<div>
						<Text text={"Put themselves in the merchant's shoes"} />
						<Text text="Meta Inc." />
					</div>
				</div>
			</div>

			<!-- RIGHT IMAGE -->
			<div class="mb-8 md:mb-0 md:w-[570px]">
				<img src="/agency-website/hero-image.png" class="h-auto w-full object-cover" alt="Hero" />
			</div>
		</div>
	</section>
</div>
