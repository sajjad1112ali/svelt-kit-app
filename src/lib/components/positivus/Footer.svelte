<script>
	import Button from './Button.svelte';
	import Heading4 from './Heading4.svelte';
	import Paragraph from './Paragraph.svelte';
	import TextBox from './TextBox.svelte';
</script>

<footer class="mt-32 rounded-t-[60px] bg-black pt-12 pb-8 text-white">
	<div class="flex flex-col items-center justify-between gap-6 px-12 md:flex-row">
		<div class="text-2xl font-bold">
			<img src="/positivus/footer-logo.png" alt="Positivus Company Logo" class="h-8 w-auto" />
		</div>

		<nav class="flex gap-8 text-sm">
			<a href="#" class="grotesk hover:text-gray-300">Home</a>
			<a href="#" class="grotesk hover:text-gray-300">About</a>
			<a href="#" class="grotesk hover:text-gray-300">Services</a>
			<a href="#" class="grotesk hover:text-gray-300">Contact</a>
		</nav>

		<!-- Social Icons -->
		<div class="flex items-center gap-3">
			<a
				href="#"
				class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 448 512"
					class="h-5 w-5"
					fill="currentColor"
					><path
						d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"
					/></svg
				>
			</a>
			<a
				href="#"
				class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-white hover:bg-gray-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					class="h-6 w-6"
					fill="currentColor"
				>
					<path
						d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"
					/>
				</svg>
			</a>
			<a
				href="#"
				class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					class="h-6 w-6"
					fill="currentColor"
					><path
						d="M523.4 215.7C523.7 220.2 523.7 224.8 523.7 229.3C523.7 368 418.1 527.9 225.1 527.9C165.6 527.9 110.4 510.7 64 480.8C72.4 481.8 80.6 482.1 89.3 482.1C138.4 482.1 183.5 465.5 219.6 437.3C173.5 436.3 134.8 406.1 121.5 364.5C128 365.5 134.5 366.1 141.3 366.1C150.7 366.1 160.1 364.8 168.9 362.5C120.8 352.8 84.8 310.5 84.8 259.5L84.8 258.2C98.8 266 115 270.9 132.2 271.5C103.9 252.7 85.4 220.5 85.4 184.1C85.4 164.6 90.6 146.7 99.7 131.1C151.4 194.8 229 236.4 316.1 240.9C314.5 233.1 313.5 225 313.5 216.9C313.5 159.1 360.3 112 418.4 112C448.6 112 475.9 124.7 495.1 145.1C518.8 140.6 541.6 131.8 561.7 119.8C553.9 144.2 537.3 164.6 515.6 177.6C536.7 175.3 557.2 169.5 576 161.4C561.7 182.2 543.8 200.7 523.4 215.7z"
					/></svg
				>
			</a>
		</div>
	</div>

	<div
		class="mt-12 flex flex-col items-center gap-8 px-12 md:flex-row md:gap-10 lg:gap-15 xl:gap-20 2xl:gap-30"
	>
		<div class="flex w-[332px] flex-col gap-7">
			<div>
				<Heading4 text="Contact Us:" classes="bg-[#B9FF66] inline-block" />
			</div>
			<Paragraph classes="text-white" text="Email: info@positivus.com" />
			<Paragraph classes="text-white" text="Phone: 555-567-8901" />
			<Paragraph
				classes="text-white"
				text="Address: 1234 Main St
Moonstone City, Stardust State 12345"
			/>
		</div>

		<div
			class="flex flex-1 items-center gap-3 rounded-xl border border-gray-700 bg-gray-800 p-10 md:p-4"
		>
			<div class="flex flex-1 flex-col items-center gap-6 lg:flex-row lg:justify-between">
				<div>
					<TextBox placeholder="Email" />
				</div>
				<div>
					<Button text="Subscribe to news" />
				</div>
			</div>
		</div>
	</div>

	<div
		class="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-700 px-12 pt-6 text-sm md:flex-row"
	>
		<p class="text-gray-400">© 2025 Your Company. All rights reserved.</p>
		<a href="#" class="text-gray-400 hover:text-gray-200">Privacy Policy</a>
	</div>
</footer>
