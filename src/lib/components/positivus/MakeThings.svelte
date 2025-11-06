<script>
	import Button from './Button.svelte';
	import Heading3 from './Heading3.svelte';
	import Paragraph from './Paragraph.svelte';
</script>

<section class="py-12 pt-[100px]">
	<div
		class="relative flex justify-center overflow-visible rounded-[45px] bg-[#F3F3F3] p-5 md:h-[347px] md:justify-start md:p-12"
	>
		<div class="grid gap-6 md:grid-cols-2">
			<div class="flex flex-col items-center justify-center gap-3 md:items-start lg:gap-6">
				<Heading3 classes="" text="Let’s make things happen" />
				<div class="md:max-w-lgs max-w-lg">
					<Paragraph
						text="Contact us today to learn more about how our digital marketing services can help your business grow and succeed online."
					/>
				</div>

				<div class="mt-6 md:mt-0">
					<Button text="Get your free proposal" />
				</div>
			</div>

			<div class="hidden md:block"></div>
			<img
				src="/positivus/make-things.png"
				alt="decorative illustration"
				class="mx-auto block w-[220px] md:hidden md:w-[320px]
         lg:w-[380px]"
			/>
		</div>

		<div
			aria-hidden="true"
			class="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 md:block md:translate-x-0"
			style="transform-origin:center;"
		>
			<img
				src="/positivus/make-things.png"
				alt="decorative illustration"
				class="block w-[220px] max-w-none md:w-[350px] lg:w-[380px]"
			/>
		</div>
	</div>
</section>
