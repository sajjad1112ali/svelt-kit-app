<script lang="ts">
	import { text } from "@sveltejs/kit";
import Heading4 from "./Heading4.svelte";
import Paragraph from "./Paragraph.svelte";

  let { quote, author, title }: { quote: string; author: string; title:string } = $props();
</script>

<div
  class="min-h-[335px] flex flex-col justify-between border border-amber-400"
>
  <div
    class="flex justify-center flex-grow pt-10 px-8 rounded-4xl bg-center bg-no-repeat bg-contain"
    style="background-image: url('/positivus/testimonial-bg.png');"
  >
    <Paragraph text={`"${quote}"`} classes="text-white w-[500px]" />
  </div>

  <div class="pl-12 mt-5">
    <Heading4 text={author} classes="text-[#B9FF66]" />
    <Paragraph text={title} classes="text-white px-2" />
  </div>
</div>
