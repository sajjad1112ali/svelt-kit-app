<script lang="ts">
	let { text, classes = "text-[#FFFFFF]/64" }: { text: string; classes?: string } = $props();
</script>

<p
	class="epilogue text-base font-normal leading-8 tracking-normal {classes}"
>
	{text}
</p>
