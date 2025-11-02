<script>
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
</script>
<div class="bg-[#191A23] py-20 rounded-[60px]">

<Splide
	options={{
		type: 'loop',
		perPage: 1,
		gap: '3rem',
		focus: 'center',

		padding: '20rem',

			breakpoints: {
				1280: { padding: '16rem', perPage: 1, gap: '2rem' },
				1024: { padding: '10rem', perPage: 1, gap: '1.5rem' },
				768: { padding: '6rem', perPage: 1, gap: '1rem' },
				480: { padding: '3rem', perPage: 1, gap: '0.5rem' },
			}
	}}
>
	{#each testimonials as testimonial}
		<SplideSlide
			>
			<SplideTestimonialCard {...testimonial} />
			</SplideSlide
		>
	{/each}
</Splide>
</div>
