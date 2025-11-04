<script>
	import Button from './Button.svelte';
	import Heading1 from './Heading1.svelte';
	import Paragraph from './Paragraph.svelte';
</script>

<section>
	<div class="grid items-center justify-center gap-12 md:grid-cols-2">
		<div class="space-y-3 md:space-y-5 xl:space-y-9">
			<div class="max-w-xl">
				<Heading1 text="Navigating the digital landscape for success" />
			</div>
			<div class="max-w-[498px]">
				<Paragraph
					text="Our digital marketing agency helps businesses grow and succeed online through a range of
				services including SEO, PPC, social media marketing, and content creation."
				/>
			</div>

			<Button text="Book a consultation" />
		</div>

		<div class="flex justify-center md:justify-end">
			<img
				src="/positivus/header.png"
				alt="Hero"
				class="w-full max-w-md object-contain md:max-w-full"
			/>
		</div>
	</div>
</section>
