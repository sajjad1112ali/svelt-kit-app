<script lang="ts">
	let { text, classes, href }: { text: string; classes?: string; href: string } = $props();
</script>

<a class="{classes} grotesk block px-0 py-3 text-base md:p-4 md:text-lg lg:text-lg" {href}>{text}</a>
