<script lang="ts">
	let { text, classes="text-black" }: { text: string; classes?: string } = $props();
</script>

<p class="grotesk text-base md:text-lg lg:text-lg leading-6 tracking-wide {classes}">
	{text}
</p>
