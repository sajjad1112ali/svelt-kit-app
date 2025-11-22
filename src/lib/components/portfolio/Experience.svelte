<script lang="ts">
	let { title, duration }: { title: string; duration: string; } = $props();
</script>

<div class="pl-8 relative">
	<div class="absolute -ml-8 h-4 w-4 rounded-full bg-gradient-to-r from-[#a78bfa] to-[#7c3aed]"></div>
	<h4 class="font-semibold">{title}</h4>
	<p class="text-sm opacity-70">{duration}</p>
</div>
