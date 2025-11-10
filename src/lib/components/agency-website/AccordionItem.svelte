<script lang="ts">
	import Heading4 from './Heading4.svelte';
	import Text from './Text.svelte';

	let { heading, content, index, isLast }: { heading: string; content: string; index: number, isLast: boolean } = $props();
	let isOpen = $state(index === 1);
</script>
<!-- ${index === 1 ? 'rounded-t-2xl' : '' } ${isLast ? 'rounded-b-2xl' : '' }  -->
<div
	class={`overflow-hidden transition duration-700 px-12 py-10 ${
		isOpen ? 'bg-white' : 'bg-[#fdf0e9]'
	}`}
>
	<button
		onclick={() => (isOpen = !isOpen)}
		class="flex w-full cursor-pointer items-center justify-between transition duration-300"
		class:text-black={isOpen}
	>
		<div class="flex items-center gap-6">
			<Heading4 text={heading} />
		</div>

		<span
			class="icon flex h-8 w-8 items-center justify-center rounded-full bg-[#EF6D58] text-4xl"
		>
		<img src="/agency-website/faq.png" alt="FQA icon" class={`w-2.5 h-2 ${isOpen ? '' : 'rotate-180'}`} />
			
		</span>
	</button>

	<section
		class="flex h-0 flex-col items-center overflow-hidden bg-white transition-all duration-500"
		class:h-[170px]={isOpen}
	>
		<Text text={content} classes="mt-6 text-[#391400]/64" />
	</section>
</div>
