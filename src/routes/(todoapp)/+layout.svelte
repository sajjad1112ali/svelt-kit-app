<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import HomeLink from '$lib/components/HomeLink.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<div class="container mx-auto pt-10">
	<HomeLink />
	{@render children?.()}
</div>
