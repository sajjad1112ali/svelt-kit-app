<script lang="ts">
	let { text, classes = "" }: { text: string; classes?: string } = $props();
</script>

<h1
	class="rounded-md box-decoration-clone grotesk px-2 text-xl md:text-2xl lg:text-2xl font-medium {classes}"
>
	{text}
</h1>
