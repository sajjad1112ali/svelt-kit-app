<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="">
	<div class="flex h-screen flex-col container mx-auto">
		<div class="flex-1">
			{@render children?.()}
		</div>

		<div class="p-4">
			<p>Bottom Content...........</p>
		</div>
	</div>
</div>
