<script lang="ts">
	let { text, classes="text-black" }: { text: string; classes?: string } = $props();
</script>

<p class="grotesk text-base font-normal leading-6 tracking-wide md:text-xl {classes}">
	{text}
</p>
