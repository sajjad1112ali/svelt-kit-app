<script lang="ts">
	let { text, classes }: { text: string; classes?: string } = $props();
</script>

<h2 class="grotesk text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug">
  <span class="{classes} rounded-b-md box-decoration-clone px-2 py-0.5">
    {text}
  </span>
</h2>