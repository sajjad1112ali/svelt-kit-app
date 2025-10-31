<script lang="ts">
	import { WIDTH_CLASS } from '$lib/components/positivus/utils/constants';
</script>

<header class="mt-[60px] mb-[70px] border-1 bg-white">
	<div
		class="
{WIDTH_CLASS} mx-auto flex flex-wrap items-center"
	>
		<div class="flex flex-1 items-center justify-between">
			<img src="/positivus/logo.png" alt="Positivus Company Logo" class="h-8 w-auto" />
		</div>

		<label for="menu-toggle" class="pointer-cursor block md:hidden">
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

		<div class="hidden w-full md:flex md:w-auto md:items-center" id="menu">
			<nav>
				<ul class="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
					<li><a class="grotesk block px-0 py-3 md:p-4" href="#">About us</a></li>
					<li><a class="grotesk block px-0 py-3 md:p-4" href="#">Services</a></li>
					<li><a class="grotesk block px-0 py-3 md:p-4" href="#">Use Cases</a></li>
					<li><a class="grotesk block px-0 py-3 md:mb-0 md:p-4" href="#">Pricing</a></li>
					<li><a class="grotesk mb-2 block px-0 py-3 md:mb-0 md:p-4" href="#">Blog</a></li>
				</ul>
			</nav>
		</div>
		<!-- Mobile Menu -->
		<div class="flex w-full md:hidden md:w-auto md:items-center" id="mobileMenu">
			<nav>
				<ul class="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
					<li><a class="grotesk block px-0 py-3 md:p-4" href="#">About us...</a></li>
					<li><a class="grotesk block px-0 py-3 md:p-4" href="#">Services</a></li>
					<li><a class="grotesk block px-0 py-3 md:p-4" href="#">Use Cases</a></li>
					<li><a class="mb-2 block px-0 py-3 md:mb-0 md:p-4" href="#">Pricing</a></li>
					<li><a class="mb-2 block px-0 py-3 md:mb-0 md:p-4" href="#">Blog</a></li>
				</ul>
			</nav>
		</div>
	</div>
</header>
