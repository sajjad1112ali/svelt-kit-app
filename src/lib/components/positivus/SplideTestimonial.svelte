<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/css';
	import SplideTestimonialCard from './SplideTestimonialCard.svelte';
	const testimonials = [
		{
			quote:
				'Working with Positivus has been great. They are professional, responsive, and truly care about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
			author: 'John Smith',
			title: 'Marketing Director at XYZ Corp'
		},
		{
			quote:
				'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
			author: 'Jane Doe',
			title: 'CEO at Alpha Solutions'
		},
		{
			quote:
				'The team at Positivus delivered outstanding results. Their tailored strategies led to a remarkable improvement in our SEO ranking in just a few months. Highly satisfied with their dedication and expertise.',
			author: 'Michael Brown',
			title: 'Founder of Beta Ventures'
		},
		// Add more slides for the slider to work effectively
		{
			quote:
				'Positivus has been a game-changer for our digital marketing. Their collaborative approach and deep understanding of the market made the whole process smooth and highly rewarding.',
			author: 'Emily Clark',
			title: 'Digital Manager at Gamma Inc.'
		},
		{
			quote:
				'Excellent communication and even better results! Positivus is a reliable partner that truly values client relationships. We look forward to continuing our partnership.',
			author: 'Chris Davis',
			title: 'Operations Lead at Delta Co.'
		}
	];
	let currentIndex = $state(1);

	let splide: any;

	function goNext() {
		splide.go('+1');
	}

	function goPrev() {
		splide.go('-1');
	}

	function goTo(index: number) {
		console.log(`index = ${index}`);
		currentIndex = index;
		splide.go(index);
	}
	$effect(() => {
		if (!splide?.splide) return;
		const handler = (newIndex: number) => {
			currentIndex = newIndex;
		};

		splide?.splide.on('moved', handler);

		return () => {
			splide?.splide.off('moved', handler);
		};
	});
</script>

<div class="my-20 space-y-8 rounded-[60px] bg-[#191A23] py-20">
	<Splide
		bind:this={splide}
		options={{
			type: 'loop',
			autoplay: true,
			perPage: 1,
			gap: '3rem',
			focus: 'center',
			pagination: false,
			arrows: false,
			padding: '20rem',

			breakpoints: {
				1280: { padding: '16rem', perPage: 1, gap: '2rem' },
				1024: { padding: '10rem', perPage: 1, gap: '1.5rem' },
				768: { padding: '.5rem', perPage: 1, gap: '0.5rem' }
			}
		}}
	>
		{#each testimonials as testimonial}
			<SplideSlide>
				<SplideTestimonialCard {...testimonial} />
			</SplideSlide>
		{/each}
	</Splide>
	<div class="flex justify-center">
		<div class="flex w-lg items-center justify-between px-8">
			<div>
				<button
					onclick={goPrev}
					class="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
				>
					<img src="/positivus/dark-arrow.png" class="w-5 rotate-180" />
				</button>
			</div>
			<div class="flex justify-center gap-3">
				{#each testimonials as _, i}
					<button
						onclick={() => goTo(i)}
						class={`h-3 w-3 rounded-full transition-all duration-300 ease-in-out ${currentIndex === i ? 'w-6 bg-[#B9FF66]' : 'bg-white/30'}`}
					>
					</button>
				{/each}
			</div>
			<div>
				<button
					onclick={goNext}
					class="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
				>
					<img src="/positivus/dark-arrow.png" class="w-5" />
				</button>
			</div>
		</div>
	</div>
</div>
