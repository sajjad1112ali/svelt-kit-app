<script lang="ts">
	let { text, classes="text-white" }: { text: string; classes?: string } = $props();
</script>

<h1
	class="epilogue text-7xl font-extrabold leading-20 tracking-[-2px] {classes}"
>
	{text}
</h1>
