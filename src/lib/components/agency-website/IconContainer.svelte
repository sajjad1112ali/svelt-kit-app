<script lang="ts">
	let { src }: { src: string } = $props();
</script>

<div class="flex h-20 w-20 items-center justify-center rounded-full bg-[#F26A4F]">
	<img src={src} class="h-8 w-8" alt={src} />
</div>
