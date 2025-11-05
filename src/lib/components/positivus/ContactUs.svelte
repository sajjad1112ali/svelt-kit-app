<script>
	import Button from "./Button.svelte";
	import Paragraph from "./Paragraph.svelte";

</script>

<section class="">
	<div class="">
		<div
			class="relative grid grid-cols-1 items-center gap-12 overflow-hidden rounded-[60px]  md:grid-cols-3 py-15 bg-gray-300"
		>
			<form class="col-span-2 px-10 flex flex-col gap-10">
				<div class="flex gap-6">
					<label class="flex cursor-pointer items-center gap-2">
						<input type="radio" name="type" value="hi" required class="h-4 w-4 text-blue-600" />
						<Paragraph text="Say Hi" />
					</label>

					<label class="flex cursor-pointer items-center gap-2">
						<input type="radio" name="type" value="quote" required class="h-4 w-4 text-blue-600" />
						<Paragraph text="Get a Quote" />
					</label>
				</div>
				<div class="flex flex-col gap-8">
					<div class="">
						<input
							type="text"
							placeholder="Your Name"
							required
							class="w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none"
						/>
					</div>

					<div>
						<input
							type="email"
							placeholder="Your Email"
							required
							class="w-full rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none"
						/>
					</div>

					<div>
						<textarea
							rows="4"
							placeholder="Message"
							required
							class="w-full resize-none rounded-lg border border-gray-300 p-3 focus:border-black focus:outline-none"
						></textarea>
					</div>

					<Button text="Send Message"/>
				</div>
			</form>

			<div class="col-span-1 hidden md:block">
				<img
					src="/positivus/contact-us.png"
					alt="Contact Illustration"
					class=" pointer-events-none object-contain select-none h-[670px]"
				/>
			</div>
		</div>
	</div>
</section>
