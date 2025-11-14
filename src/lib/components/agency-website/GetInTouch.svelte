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
</script>

<section
	class="relative bg-[url('https://maps.wikimedia.org/img/osm-intl,14,51.5074,-0.1276,1920x1080.png')] bg-cover bg-center bg-no-repeat py-29"
>
	<div class={`${AGENCY_WEBSITE_WIDTH_CLASS} flex max-w-5xl justify-start`}>
		<div class="w-full max-w-md rounded-xl bg-white p-8 shadow-xl">
			<Heading4 text="Get In Touch" />
			<form class="mt-4 space-y-4">
				<input
					type="email"
					placeholder="Your email"
					class="w-full rounded-lg border border-[#D9C7BD] px-4 py-3 text-[#391400] outline-none focus:ring-2 focus:ring-[#391400]"
				/>

				<select
					class="w-full rounded-lg border border-[#D9C7BD] px-4 py-3 text-[#391400] outline-none focus:ring-2 focus:ring-[#391400]"
				>
					<option value="">Subject</option>
					<option>Email Support</option>
					<option>Project Inquiry</option>
					<option>Collaboration</option>
				</select>

				<textarea
					rows="4"
					placeholder="Message"
					class="w-full rounded-lg border border-[#D9C7BD] px-4 py-3 text-[#391400] outline-none focus:ring-2 focus:ring-[#391400]"
				></textarea>

				<div class="text-right">
					<Button text="Submit Now" />
				</div>
			</form>
		</div>
	</div>
</section>
