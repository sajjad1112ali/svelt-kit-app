<script>
	import Heading2 from './Heading2.svelte';
	import Heading4 from './Heading4.svelte';
	import Paragraph from './Paragraph.svelte';

	const team = [
		{
			image: '/positivus/1.png',
			name: 'John Doe',
			designation: 'Lead Developer',
			description:
				'8+ years of experience in web development, leading frontend teams and architecture decisions.',
			linkedin: 'https://www.linkedin.com'
		},
		{
			image: '/positivus/2.png',
			name: 'Jane Doe',
			designation: 'Director of Operations',
			description:
				'7+ years of experience in project management and team leadership. Strong organizational and communication skills',
			linkedin: 'https://www.linkedin.com'
		},
		{
			image: '/positivus/3.png',
			name: 'Michael Brown',
			designation: 'Senior SEO Specialist',
			description:
				'5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
			linkedin: 'https://www.linkedin.com'
		},
		{
			image: '/positivus/4.png',
			name: 'Emily Johnson',
			designation: 'PPC Manager',
			description:
				'3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
			linkedin: 'https://www.linkedin.com'
		},
		{
			image: '/positivus/5.png',
			name: 'Brian Williams',
			designation: 'Social Media Specialist',
			description:
				'4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
			linkedin: 'https://www.linkedin.com'
		},
		{
			image: '/positivus/6.png',
			name: 'Sarah Kim',
			designation: 'Content Creator',
			description:
				'2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries',
			linkedin: 'https://www.linkedin.com'
		}
	];
</script>

<section class="px-6">
	<div class="flex flex-col items-center gap-4 sm:flex-row">
		<Heading2 text="Team" />
		<div class="max-w-xl">
			<Paragraph text="Meet the skilled and experienced team behind our successful digital marketing strategies" />
		</div>
	</div>
	<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-20">
		{#each team as member}
			<div
				class="flex flex-col rounded-4xl border border-black p-9 shadow-[0_3px_0_0_rgba(0,0,0,1)]"
			>
				<div class="relative flex items-end pb-6">
					<a
						href={member.linkedin}
						target="_blank"
						class="absolute top-0 right-0 rounded-full bg-[#B9FF66] p-3 text-black transition hover:bg-[#73ff66]"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="h-4 w-4"
							viewBox="0 0 24 24"
						>
							<path
								d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5C0 2.12 1.12 1 2.5 1S4.98 2.12 4.98 3.5zM.5 22h4V7H.5v15zM7.5 7h3.8v2.1h.05c.53-1 1.84-2.1 3.8-2.1 4.06 0 4.8 2.67 4.8 6.15V22h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V22h-4V7z"
							/>
						</svg>
					</a>

					<!-- User Image -->
					<img src={member.image} alt={member.name} class="h-26 w-26 rounded-full object-cover" />

					<div>
						<Heading4 text={member.name} />
						<Paragraph text={member.designation} />
					</div>
				</div>

				<div class="border-t border-gray-200 pt-6">
					<Paragraph text={member.description} />
				</div>
			</div>
		{/each}
	</div>
</section>
