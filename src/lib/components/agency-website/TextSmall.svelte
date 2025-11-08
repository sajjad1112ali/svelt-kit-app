<script lang="ts">
	let { text, classes }: { text: string; classes?: string } = $props();
</script>

<p
	class="epilogue text-sm font-medium leading-6 tracking-normal text-white {classes}"
>
	{text}
</p>
