<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css';
	import TeamMemberCard from './TeamMemberCard.svelte';
	import Heading1 from './Heading1.svelte';

	const teamMembers = [
		{ name: 'Azah Anyeni', designation: 'Designer', image: '/agency-website/azah.png' },
		{
			name: 'Roelof Bekkenenks',
			designation: 'React Developer',
			image: '/agency-website/roleof.png'
		},
		{
			name: 'Leonardo Oliveira',
			designation: 'Illustrator',
			image: '/agency-website/leonardo.png'
		},
		{
			name: 'Izabella Tabakova',
			designation: 'Product Designer',
			image: '/agency-website/izabella.png'
		},
		{ name: 'Lily Mae', designation: 'Backend developer', image: '/agency-website/azah.png' },
		{ name: 'Ella Grace', designation: 'Fullstack developer', image: '/agency-website/roleof.png' }
	];

	const perPage = 4;
	const totalSlides = Math.ceil(teamMembers.length / perPage);

	let currentIndex = $state(1);
	let splide: any;

	function goNext() {
		splide.go('>');
	}

	function goPrev() {
		splide.go('<');
	}

	function goTo(index: number) {
		const move = index < currentIndex ? "<" : ">"  
		currentIndex = index;
		splide.go(move);
	}

	$effect(() => {
		if (!splide?.splide) return;
		const handler = (newIndex: number) => {
			console.log(`newIndex = ${newIndex}`)
			currentIndex = newIndex === 0 ? 1 : newIndex
		};
		splide?.splide.on('moved', handler);
		return () => splide?.splide.off('moved', handler);
	});
</script>

<div class="mt-16 px-2">
	<div class="flex justify-end">
		<div class="flex -translate-y-30 gap-8">
			<button
				onclick={goPrev}
				class="rounded-full border border-white/29 p-3 text-white transition hover:bg-white/20"
			>
				<img src="/positivus/dark-arrow.png" class="w-5 rotate-180" />
			</button>
			<button
				onclick={goNext}
				class="rounded-full border border-white/29 p-3 text-white transition hover:bg-white/20"
			>
				<img src="/positivus/dark-arrow.png" class="w-5" />
			</button>
		</div>
	</div>
	<Splide
		bind:this={splide}
		options={{
			type: 'slide',
			perPage: 4,
			perMove: 4,
			gap: '2rem',
			pagination: false,
			arrows: false,
			autoplay: true,
			rewind: true,
			breakpoints: {
				1280: { perPage: 3, perMove: 3, gap: '1.5rem' },
				1024: { perPage: 2, perMove: 2, gap: '1.25rem' },
				640: { perPage: 1, perMove: 1, gap: '0.75rem' }
			}
		}}
	>
		{#each teamMembers as member}
			<SplideSlide>
				<TeamMemberCard {...member} />
			</SplideSlide>
		{/each}
	</Splide>
	<div class="flex justify-center mt-13">
		<div class="flex items-center gap-6">
			<div class="flex justify-center gap-3">
				{#each Array(totalSlides) as _, i}
					<button
						onclick={() => goTo(i+1)}
						class={`h-3 rounded-full transition-all duration-300 ease-in-out w-3 ${
							currentIndex === i+1 ? 'bg-[#B9FF66]' : 'bg-white/30'
						}`}
					></button>
				{/each}
			</div>
		</div>
	</div>
</div>
