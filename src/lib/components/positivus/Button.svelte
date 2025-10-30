<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<button
	class="grotesk inline-block rounded-lg bg-black px-6 py-3 font-normal text-white transition hover:bg-gray-800"
>
	{text}
</button>
