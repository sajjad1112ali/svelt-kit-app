<script lang="ts">
	import Heading2 from './Heading2.svelte';
	import Paragraph from './Paragraph.svelte';
</script>

<section class="pt-[70px]">
	<div class="flex flex-col items-center gap-4 sm:flex-row">
		<Heading2 text="Case Studies" />
		<div class="max-w-md sm:max-w-2xl">
			<Paragraph
				text="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
			/>
		</div>
	</div>
	<div
		class="mt-[80px]
    rounded-[60px] bg-black p-[30px] md:p-[30px] xl:p-[30px] 2xl:p-[60px] text-white
    lg:grid
	space-y-8
	md:grid-cols-[auto_350px_auto]
    lg:grid-cols-[auto_330px_auto]
    xl:grid-cols-[auto_414px_auto]
"
	>
		<div
			class="
        flex justify-center
    "
		>
			<div class="flex max-w-[286px] flex-col gap-4">
				<Paragraph
					text="For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
					classes="text-white"
				/>
				<div class="flex gap-4">
					<Paragraph text="Learn more" classes="text-[#B9FF66]" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="3.5"
						stroke="currentColor"
						class="size-6 text-[#B9FF66]"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</div>
			</div>
		</div>

		<div
			class="
        flex justify-center border-y
        border-gray-700 py-8 lg:py-0 lg:border-x
        lg:border-y-0 lg:border-gray-700
    "
		>
			<div
				class="
             w-full max-w-[286px] flex flex-col gap-4
        "
			>
				<Paragraph
					text="For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
					classes="text-white"
				/>
				<div class="flex gap-4">
					<Paragraph text="Learn more" classes="text-[#B9FF66]" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="3.5"
						stroke="currentColor"
						class="size-6 text-[#B9FF66]"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</div>
			</div>
		</div>

		<div
			class="
        flex justify-center lg:justify-end
    "
		>
			<div class="flex max-w-[286px] flex-col gap-4">
				<Paragraph
					text="For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
					classes="text-white"
				/>
				<div class="flex gap-4">
					<Paragraph text="Learn more" classes="text-[#B9FF66]" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="3.5"
						stroke="currentColor"
						class="size-6 text-[#B9FF66]"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</section>
