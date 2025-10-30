<script lang="ts">
	let { text, classes }: { text: string, classes: string } = $props();
</script>

<h3 class="grotesk text-[26px] md:text-[30px] font-bold leading-snug">
  <span class="{classes} rounded-b-md box-decoration-clone px-2 py-0.5">
    {text}
  </span>
</h3>