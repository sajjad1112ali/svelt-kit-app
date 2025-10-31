<script lang="ts">
	import Navbar from '$lib/components/positivus/Navbar.svelte';
import { WIDTH_CLASS } from '$lib/components/positivus/utils/constants';

	let { children } = $props();
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>
<div class="flex h-screen flex-col">
	<div class="flex-1">
		<Navbar />
		<div class=" {WIDTH_CLASS} mx-auto">
			{@render children?.()}
		</div>
	</div>

	<div class="p-4">
		<p>Generally </p>
	</div>
</div>
