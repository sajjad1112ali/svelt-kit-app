<script lang="ts">
	import { WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
	import GetQuoteBtn from './GetQuoteBtn.svelte';
	import Link from './Link.svelte';
	const links = [
		{
			text: 'About us',
			href: '#',
			classes: ''
		},
		{
			text: 'Services',
			href: '#',
			classes: ''
		},
		{
			text: 'Use Cases',
			href: '#',
			classes: ''
		},
		{
			text: 'Pricing',
			href: '#',
			classes: ''
		},
		{
			text: 'Blog',
			href: '#',
			classes: 'mb-2 md:mb-0'
		}
	];
</script>

<header class="mt-[60px] mb-[70px] bg-white">
	<div
		class="
{WIDTH_CLASS} flex flex-wrap items-center"
	>
		<div class="flex flex-1 items-center justify-between">
			<img src="/positivus/logo.png" alt="Positivus Company Logo" class="h-8 w-auto" />
		</div>

		<label for="menu-toggle" class="pointer-cursor block lg:hidden">
			<svg
				class="fill-current text-gray-900"
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 20 20"
			>
				<title>menu</title>
				<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
			</svg>
		</label>
		<input class="hidden" type="checkbox" id="menu-toggle" />

		<div class="hidden w-full lg:flex lg:w-auto lg:items-center" id="menu">
			<nav>
				<ul class="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
					{#each links as link}
						<li><Link {...link} /></li>
					{/each}
					<GetQuoteBtn />
				</ul>
			</nav>
		</div>
		<div class="flex w-full lg:hidden lg:w-auto lg:items-center" id="mobileMenu">
			<nav>
				<ul class="items-center justify-between pt-4 text-base text-gray-700 lg:flex md:pt-0">
					{#each links as link}
						<li><Link {...link} /></li>
					{/each}
					<GetQuoteBtn />
				</ul>
			</nav>
		</div>
	</div>
</header>
