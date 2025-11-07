<script lang="ts">
	import Heading3 from './Heading3.svelte';

	let { title, image, bg, heading, arrowClass }: { title: string; image: string; bg: string; heading: string; arrowClass: string } =
		$props();
</script>

<div class={`overflow-hidden rounded-4xl p-12  border border-black shadow-[0_3px_0_0_rgba(0,0,0,1)] h-[360px] md:h-[310px] ${bg}`}>
	<div class="grid items-center gap-8 md:grid-cols-2">
		<div class="flex flex-col items-center md:items-start md:justify-between space-y-6 md:h-[210px]">
			<Heading3 text={title} classes={heading} />
			<div
				class="flex items-center gap-2"
			>
				<div class="{arrowClass} p-2 rounded-full rotate-10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2.5"
						stroke="currentColor"
						class="size-4"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
						/>
					</svg>
				</div>
				<span class="text-xl grotesk font-medium {bg === "bg-black" ? 'text-white' : ''}">Learn More</span>
			</div>
		</div>

		<div class="flex justify-center">
			<img src={image} alt={title} class="max-h-40 object-contain" />
		</div>
	</div>
</div>
