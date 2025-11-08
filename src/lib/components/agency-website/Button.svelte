<script lang="ts">
	let { text, classes="bg-[#EF6D58] text-white" }: { text: string; classes?: string } = $props();
</script>

<button
	class="grotesk inline-block text-sm rounded-md px-6 py-3 font-black transition h-[48px] {classes}"
>
	{text}
</button>
