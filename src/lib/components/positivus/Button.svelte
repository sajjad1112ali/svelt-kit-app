<script lang="ts">
	let { text, classes }: { text: string; classes?: string } = $props();
</script>

<button
	class="grotesk inline-block text-xl rounded-lg bg-black px-6 py-3 font-normal text-white transition hover:bg-gray-800 h-[68px] {classes}"
>
	{text}
</button>
