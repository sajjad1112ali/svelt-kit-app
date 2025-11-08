<script lang="ts">
	let { text, classes }: { text: string; classes?: string } = $props();
</script>

<h5
	class="epilogue text-base font-medium leading-8 tracking-[3px] {classes}"
>
	{text}
</h5>
