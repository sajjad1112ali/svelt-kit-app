<script lang="ts">
  import Carousel from 'svelte-light-carousel';

  // 1. Define the slide data
  const slides = [
    { title: 'Slide 1', color: 'bg-red-500' },
    { title: 'Slide 2', color: 'bg-blue-500' },
    { title: 'Slide 3', color: 'bg-green-500' },
    { title: 'Slide 4', color: 'bg-yellow-500' },
    { title: 'Slide 5', color: 'bg-indigo-500' },
    { title: 'Slide 6', color: 'bg-purple-500' },
  ];

  // 2. Define props for the partial view
  // 'layout: 1' means 1 slide is the primary focus.
  // 'partialDelta: 100' means 100 pixels of the next slide are visible.
  // 'gap: 20' is the space between slides in pixels.
  const carouselConfig = {
    layout: 1,
    gap: 16,
    partialDelta: 100, // Make 100px of the next slide visible
  };
</script>

<div class="relative w-full max-w-4xl mx-auto py-10">
  <Carousel 
    slides={slides} 
    layout={{ default: carouselConfig.layout }} 
    gap={{ default: carouselConfig.gap }}
    partialDelta={{ default: carouselConfig.partialDelta }}
    containerClass="px-16" 
  >
    {#snippet slide({ slide, index })}
      <div 
        class="{slide.color} h-64 flex items-center justify-center 
               text-white text-3xl font-bold rounded-lg shadow-xl"
      >
        {slide.title}
      </div>
    {/snippet}

    {#snippet prev({ prev, canScrollPrev, prevA11y })}
      <button 
        on:click={prev}
        {...prevA11y}
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 
               p-3 rounded-full bg-black/50 text-white 
               hover:bg-black/75 transition 
               disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={!canScrollPrev}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
    {/snippet}

    {#snippet next({ next, canScrollNext, nextA11y })}
      <button 
        on:click={next}
        {...nextA11y}
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 
               p-3 rounded-full bg-black/50 text-white 
               hover:bg-black/75 transition 
               disabled:opacity-20 disabled:cursor-not-allowed"
        disabled={!canScrollNext}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    {/snippet}
  </Carousel>
</div>