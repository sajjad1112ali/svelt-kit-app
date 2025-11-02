<script lang="ts">
	import { text } from '@sveltejs/kit';
	import Heading4 from './Heading4.svelte';
	import Paragraph from './Paragraph.svelte';

	let { quote, author, title }: { quote: string; author: string; title: string } = $props();
</script>
<div class="grid grid-rows-[1fr_auto] h-full">
	<div class="relative rounded-4xl border border-[#B9FF66] p-6">
		<Paragraph text={`"${quote}"`} classes="text-white" />
		<div class="absolute -bottom-4.5 left-10 h-9 w-9 rotate-315 border-b border-l border-[#B9FF66] bg-[#191A23]"></div>
	</div>

	<div class="pl-8 mt-10">
		<Heading4 text={author} classes="text-[#B9FF66]" />
		<Paragraph text={title} classes="text-white px-2" />
	</div>
</div>
