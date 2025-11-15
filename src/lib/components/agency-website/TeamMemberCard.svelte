<script lang="ts">
	import { text } from '@sveltejs/kit';
	import Heading4 from './Heading4.svelte';

	let { name, image, designation }: { name: string; image: string; designation: string } = $props();
</script>
<div class="flex flex-col items-center text-center">
	<div class="relative h-68 w-66 rounded-2xl border border-white/20 bg-white/5 overflow-hidden flex items-end justify-center">
		<img
			src={image}
			alt={name}
			class="h-58 w-auto object-contain"
		/>
	</div>

	<h3 class="mt-4 text-lg font-semibold text-white">{name}</h3>
	<p class="text-sm text-white/60">{designation}</p>
</div>
