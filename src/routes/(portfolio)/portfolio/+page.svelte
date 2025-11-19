<script lang="ts">
	import Experience from '$lib/components/portfolio/Experience.svelte';

	export let name = 'Sajjad Ali';
	export let title = 'Fullstack Developer';
	export let intro = 'I create scalable web applications with delightful UI experiences.';
	export let skills = [
		'Laravel',
		'Node.js',
		'SvelteKit',
		'React',
		'Vue',
		'NextJs',
		'TailwindCSS',
		'MongoDB',
		'MySQL'
	];

	export let projects = [
		{
			id: 1,
			title: 'Realtime Chat App',
			desc: 'SvelteKit + Websockets + MongoDB',
			tech: ['SvelteKit', 'Socket.io', 'MongoDB'],
			link: '#'
		},
		{
			id: 2,
			title: 'E-commerce Admin',
			desc: 'Headless commerce dashboard',
			tech: ['SvelteKit', 'Node.js', 'Postgres'],
			link: '#'
		},
		{
			id: 3,
			title: 'Design System',
			desc: 'UI component library with Tailwind',
			tech: ['TailwindCSS', 'Storybook'],
			link: '#'
		}
	];
	const experience = [
		{
			title: 'Fullstack developer — Upwork',
			duration: '2024 — present • Building scalable APIs and dashboards'
		},
		{
			title: 'Software Engineer — Arpatech',
			duration: '2022 — 2024 • Building scalable APIs and dashboards'
		},
		{
			title: 'Backend Engineer — Abtech',
			duration: '2020 — 2022 • Real-time systems and data pipelines'
		},
		{
			title: 'Fullstack developer — Celeritas Solutions',
			duration: '2014 — 2020 • building scalable APIs, dashboards and responsive designs'
		}
	];
</script>

<div
	class="font-['Inter',system-ui,-apple-system,'Segoe UI',Roboto,'Helvetica Neue'] min-h-screen bg-gradient-to-b from-[#07060b] via-[#0f0b1a] to-[#150d2a] text-white antialiased"
>
	<header
		class="fixed top-0 left-0 z-40 w-full border-b border-white/5 bg-gradient-to-b from-[#0f0b1a]/85 to-[#0f0b1a]/30 shadow-lg backdrop-blur-md"
	>
		<nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
			<div class="flex items-center gap-3">
				<div
					class="glow flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#a78bfa]"
				>
					<span class="font-bold">SA</span>
				</div>
				<div class="hidden sm:block">
					<p class="text-sm font-medium opacity-90">{name}</p>
					<p class="text-xs opacity-60">{title}</p>
				</div>
			</div>

			<div class="flex items-center gap-2">
				<a href="#projects" class="rounded-lg px-4 py-2 text-sm transition hover:bg-white/6"
					>Projects</a
				>
				<a
					href="#contact"
					class="rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] px-4 py-2 text-sm text-white shadow-sm transition hover:brightness-110"
					>Contact</a
				>
			</div>
		</nav>
	</header>

	<!-- HERO -->
	<main class="pt-28">
		<section class="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 lg:flex-row">
			<div class="flex-1">
				<div class="mb-6 inline-flex items-center gap-3">
					<span class="rounded-full bg-white/6 px-3 py-1 text-xs">Fullstack</span>
					<span class="rounded-full bg-white/4 px-3 py-1 text-xs">Open to work</span>
				</div>

				<h1 class="text-4xl leading-tight font-extrabold tracking-tight md:text-6xl">
					<span
						class="block bg-gradient-to-r from-[#b794f4] to-[#7c3aed] bg-clip-text text-transparent"
						>{name}</span
					>
					<span class="mt-2 block text-2xl font-medium opacity-80 md:text-3xl">{intro}</span>
				</h1>

				<p class="mt-6 max-w-xl text-lg opacity-70">
					I specialize in building distributed backends and polished frontends using modern tools —
					performance-led, accessible, and easy to maintain.
				</p>

				<div class="mt-8 flex items-center gap-4">
					<a
						href="#projects"
						class="transform rounded-lg bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] px-6 py-3 font-semibold shadow-md transition hover:scale-105"
						>See my work</a
					>
					<a
						href="#contact"
						class="rounded-lg border border-white/10 px-6 py-3 transition hover:bg-white/4"
						>Hire me</a
					>
				</div>

				<div class="mt-10 flex max-w-2xl flex-wrap items-center gap-x-3 gap-y-2">
					{#each skills as s}
						<div
							class="floaty transform rounded-md bg-white/4 px-2 py-2 opacity-90 backdrop-blur-sm transition hover:scale-105"
						>
							{s}
						</div>
					{/each}
				</div>
			</div>

			<div class="flex-1">
				<div
					class="glow mx-auto w-full max-w-md rounded-2xl border border-transparent bg-gradient-to-b from-[#0b0913]/40 to-[#150d2a]/50 p-6 transition hover:shadow-xl"
				>
					<div class="rounded-xl bg-[#0f0b18]/60 p-4">
						<div
							class="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-[#24123f] to-[#2b1450]"
						>
							<p class="opacity-60">Project mockup / screenshot</p>
						</div>

						<div class="mt-4">
							<h3 class="text-lg font-semibold">Example Project</h3>
							<p class="mt-1 text-sm opacity-70">
								A polished web app with realtime features and great DX.
							</p>
							<div class="mt-3 flex gap-2 text-xs opacity-80">
								<span class="rounded bg-white/6 px-2 py-1">SvelteKit</span>
								<span class="rounded bg-white/6 px-2 py-1">Node.js</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- SKILLS -->
		<section id="skills" class="mx-auto max-w-6xl px-6 py-12">
			<h2 class="mb-6 text-2xl font-bold">Skills</h2>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
				{#each skills as s}
					<div
						class="glow transform rounded-xl border border-white/6 bg-gradient-to-br from-[#0c0720] to-[#120925] p-4 transition hover:scale-105"
					>
						<p class="font-semibold">{s}</p>
						<p class="mt-1 text-xs opacity-70">
							Experienced — building production apps and libraries with {s}.
						</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- PROJECTS -->
		<section id="projects" class="mx-auto max-w-6xl px-6 py-12">
			<h2 class="mb-6 text-2xl font-bold">Projects</h2>
			<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
				{#each projects as p}
					<a
						href={p.link}
						class="group block transform rounded-2xl border border-white/6 bg-[#0d0820] p-4 transition hover:scale-105"
					>
						<div
							class="flex h-40 items-center justify-center rounded-lg bg-gradient-to-br from-[#1a0b2b] to-[#2a1242]"
						>
							Screenshot
						</div>
						<h3 class="mt-4 text-lg font-semibold group-hover:text-[#c4b5fd]">{p.title}</h3>
						<p class="mt-1 text-sm opacity-70">{p.desc}</p>
						<div class="mt-3 flex gap-2 text-xs opacity-80">
							{#each p.tech as t}
								<span class="rounded bg-white/6 px-2 py-1">{t}</span>
							{/each}
						</div>
					</a>
				{/each}
			</div>
		</section>

		<!-- EXPERIENCE TIMELINE -->
		<section id="experience" class="mx-auto max-w-6xl px-6 py-12">
			<h2 class="mb-6 text-2xl font-bold">Experience</h2>
			<div class="relative ml-4">
				<div
					class="absolute top-0 bottom-0 left-2 w-0.5 bg-gradient-to-b from-[#7c3aed] to-[#4c1d95]"
				></div>

				<div class="space-y-8">
					{#each experience as exp}
						<Experience {...exp} />
					{/each}
				</div>
			</div>
		</section>

		<!-- CONTACT -->
		<section id="contact" class="mx-auto max-w-6xl px-6 py-12">
			<h2 class="mb-6 text-2xl font-bold">Contact</h2>
			<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
				<form class="rounded-2xl border border-white/6 bg-[#0b0814] p-6">
					<label class="block text-sm opacity-80">Your name</label>
					<input
						class="mt-2 w-full rounded border border-white/8 bg-transparent p-3 outline-none"
						placeholder="Your name"
					/>

					<label class="mt-4 block text-sm opacity-80">Email</label>
					<input
						class="mt-2 w-full rounded border border-white/8 bg-transparent p-3 outline-none"
						placeholder="you@company.com"
					/>

					<label class="mt-4 block text-sm opacity-80">Message</label>
					<textarea
						class="mt-2 w-full rounded border border-white/8 bg-transparent p-3 outline-none"
						rows="5"
						placeholder="Let's build something great"
					></textarea>

					<div class="mt-4 flex items-center gap-3">
						<button
							class="rounded-lg bg-gradient-to-r from-[#a78bfa] to-[#7c3aed] px-5 py-3 font-semibold"
							>Send message</button
						>
						<p class="text-xs opacity-60">
							Or email me at <span class="font-medium">hello@yourdomain.com</span>
						</p>
					</div>
				</form>

				<div class="rounded-2xl border border-white/6 bg-[#0b0814] p-6">
					<h3 class="font-semibold">Location</h3>
					<p class="mt-2 text-sm opacity-70">Karachi, Pakistan</p>

					<h3 class="mt-6 font-semibold">Availability</h3>
					<p class="mt-2 text-sm opacity-70">Open for freelance & remote roles</p>

					<h3 class="mt-6 font-semibold">Social</h3>
					<div class="mt-2 flex gap-3">
						<a href="#" class="rounded bg-white/6 px-3 py-2 text-sm">GitHub</a>
						<a href="#" class="rounded bg-white/6 px-3 py-2 text-sm">LinkedIn</a>
					</div>
				</div>
			</div>
		</section>

		<footer class="mx-auto max-w-6xl px-6 py-8 text-center text-sm opacity-70">
			© {new Date().getFullYear()}
			{name} — Built with SvelteKit & Tailwind
		</footer>
	</main>
</div>
