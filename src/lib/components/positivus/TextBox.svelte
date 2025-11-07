<script lang="ts">
	let { placeholder, classes }: { placeholder: string; classes?: string } = $props();
</script>

<input 
  type="text" 
  placeholder={placeholder}
  class="{classes} w-full text-white px-7 py-5 border border-gray-300 rounded-2xl text-lg placeholder-gray-400 focus:outline-none focus:border-gray-400"
/>

