<script lang="ts">
	import { onMount } from "svelte";

	let video: HTMLVideoElement;
	let playing = false;
	let displayTime: string = "0:00"; // This now shows *remaining* time

	function formatTime(seconds: number): string {
		const m = Math.floor(seconds / 60);
		const s = Math.floor(seconds % 60).toString().padStart(2, "0");
		return `${m}:${s}`;
	}

	onMount(() => {
		// Once metadata loads, show total duration (initial state)
		video.addEventListener("loadedmetadata", () => {
			displayTime = formatTime(video.duration);
		});

		// While playing, show remaining time
		video.addEventListener("timeupdate", () => {
			const remaining = video.duration - video.currentTime;
			displayTime = formatTime(remaining);
		});

		// When video ends, reset
		video.addEventListener("ended", () => {
			playing = false;
			video.currentTime = 0;
			displayTime = formatTime(video.duration); // Reset to full duration
		});
	});

	function playVideo(): void {
		video.play();
		playing = true;
	}

	function toggleVideo(): void {
		if (playing) {
			video.pause();
			playing = false;
		} else {
			video.play();
			playing = true;
		}
	}
</script>

<div class="relative w-full max-w-[570px]">

	<video
		bind:this={video}
		src="https://www.w3schools.com/html/mov_bbb.mp4"
		class="w-full rounded-md cursor-pointer"
		preload="metadata"
		on:click={toggleVideo}
	></video>

	{#if !playing}
		<button
			on:click={playVideo}
			class="absolute inset-0 flex items-center justify-center rounded-xl bg-black/30 transition hover:bg-black/40"
		>
			<div class="flex h-16 w-16 items-center justify-center rounded-full border border-white shadow-lg">
				<svg class="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
					<path d="M4 4l12 6-12 6z" />
				</svg>
			</div>
		</button>
	{/if}

	<!-- Countdown Timer -->
	<div class="absolute bottom-4 right-4 bg-black/60 text-white text-sm px-2 py-1 rounded-md">
		{displayTime}
	</div>
</div>
