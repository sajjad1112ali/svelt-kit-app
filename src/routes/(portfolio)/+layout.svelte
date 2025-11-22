<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
  let lenis: any = null;
  let rafId: number | null = null;

  const HEADER_SELECTOR = 'header';
  const ANCHOR_SELECTOR = 'a[href^="#"]';

  onMount(async () => {
    const { default: Lenis } = await import('lenis');

    const headerEl = document.querySelector(HEADER_SELECTOR) as HTMLElement | null;
    const headerHeight = headerEl ? headerEl.offsetHeight : 72;

    lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    document.documentElement.style.scrollBehavior = 'auto';

    const anchors = Array.from(document.querySelectorAll(ANCHOR_SELECTOR)) as HTMLAnchorElement[];
    const handlers: Array<() => void> = [];

    anchors.forEach(a => {
      const handler = (ev: Event) => {
        const href = a.getAttribute('href');
        if (!href || href === '#' || !href.startsWith('#')) return;
        ev.preventDefault();

        const id = href.slice(1);
        const target = document.getElementById(id);
        if (!target) return;

        lenis.scrollTo(target, { offset: -headerHeight - 8, immediate: false });
      };
      a.addEventListener('click', handler);
      handlers.push(() => a.removeEventListener('click', handler));
    });

    if (location.hash) {
      const target = document.querySelector(location.hash) as HTMLElement | null;
      if (target) {
        setTimeout(() => {
          lenis.scrollTo(target, { offset: -headerHeight - 8 });
        }, 50);
      }
    }

    onDestroy(() => {
      handlers.forEach(h => h());
    });
  });

  onDestroy(() => {
    if (rafId) cancelAnimationFrame(rafId);
    if (lenis && typeof lenis.destroy === 'function') {
      lenis.destroy();
    }
  });
	let { children } = $props();
</script>

<div>
	{@render children?.()}
</div>
