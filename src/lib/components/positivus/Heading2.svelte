<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<h2 class="grotesk text-4xl md:text-[40px] font-bold leading-snug">
  <span class="bg-[#B9FF66] rounded-b-md box-decoration-clone px-2 py-0.5">
    {text}
  </span>
</h2>