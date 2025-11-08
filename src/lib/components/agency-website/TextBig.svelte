<script lang="ts">
	let { text, classes }: { text: string; classes?: string } = $props();
</script>

<p
	class="epilogue text-xl text-[#391400] font-normal leading-8 tracking-normal {classes}"
>
	{text}
</p>
