<script lang="ts">
	import Heading1 from './Heading1.svelte';
	import Heading2 from './Heading2.svelte';
	import Heading3 from './Heading3.svelte';
	import Heading4 from './Heading4.svelte';
	import Paragraph from './Paragraph.svelte';

	let { heading, content, index }: { heading: string; content: string; index: number } = $props();
	let isOpen = $state(index === 1);
</script>

<div
	class={`overflow-hidden rounded-2xl border border-black transition duration-700 px-15 py-10 ${
		isOpen ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'
	}`}
>
	<button
		onclick={() => (isOpen = !isOpen)}
		class="flex w-full cursor-pointer items-center justify-between transition duration-300"
		class:text-black={isOpen}
	>
		<div class="flex items-center gap-6">
			<div class="hidden lg:block">
                <Heading1 text={`${index > 9 ? index : '0' + index}`} />
            </div>
			<Heading2 text={heading} />
		</div>

		<span
			class="icon flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-4xl"
		>
			{#if isOpen}
				–
			{:else}
				+
			{/if}
		</span>
	</button>

	<section
		class="flex h-0 flex-col items-center overflow-hidden bg-[#B9FF66] transition-all duration-500"
		class:h-[170px]={isOpen}
	>
		<Paragraph text={content} classes="border-t border-[#191A23] pt-6 mt-6" />
	</section>
</div>
