<script lang="ts">
	import AgencyDesign from '$lib/components/agency-website/AgencyDesign.svelte';
	import AgencyStats from '$lib/components/agency-website/AgencyStats.svelte';
	import Companies from '$lib/components/agency-website/Companies.svelte';
	import ContactDetails from '$lib/components/agency-website/ContactDetails.svelte';
	import ContactUs from '$lib/components/agency-website/ContactUs.svelte';
	import DigitalProducts from '$lib/components/agency-website/DigitalProducts.svelte';
	import FAQs from '$lib/components/agency-website/FAQs.svelte';
	import Features from '$lib/components/agency-website/Features.svelte';
	import FeatureTwo from '$lib/components/agency-website/FeatureTwo.svelte';
	import Footer from '$lib/components/agency-website/Footer.svelte';
	import FounderWords from '$lib/components/agency-website/FounderWords.svelte';
	import FutureConferences from '$lib/components/agency-website/FutureConferences.svelte';
	import GetInTouch from '$lib/components/agency-website/GetInTouch.svelte';
	import HelpingMethods from '$lib/components/agency-website/HelpingMethods.svelte';
	import Hero from '$lib/components/agency-website/Hero.svelte';
	import HowWeWork from '$lib/components/agency-website/HowWeWork.svelte';
	import LatestBlog from '$lib/components/agency-website/LatestBlog.svelte';
	import LatestWork from '$lib/components/agency-website/LatestWork.svelte';
	import NewsLetter from '$lib/components/agency-website/NewsLetter.svelte';
	import OurAwards from '$lib/components/agency-website/OurAwards.svelte';
	import PricingPlans from '$lib/components/agency-website/PricingPlans.svelte';
	import Team from '$lib/components/agency-website/Team.svelte';
	import Testimonials from '$lib/components/agency-website/Testimonials.svelte';
	import VideoReel from '$lib/components/agency-website/VideoReel.svelte';
	import YourDreamProject from '$lib/components/agency-website/YourDreamProject.svelte';
</script>

<Hero />
<div class="bg-[#fdf0e9]">
	<Companies />
	<AgencyDesign />
	<AgencyStats />
	<HowWeWork />
	<VideoReel />
	<Features />
	<FeatureTwo />
	<DigitalProducts />
	<HelpingMethods />
</div>
<div class="bg-[#28293e] md:h-auto">
	<LatestWork />
	<ContactUs />
	<FutureConferences />
	<Team />
	<FounderWords />
</div>
<div class="bg-[#fdf0e9]">
	<Testimonials />
	<PricingPlans />
	<FAQs />
	<OurAwards />
	<LatestBlog />
	<NewsLetter />
	<GetInTouch />
	<ContactDetails />
	<YourDreamProject />
	<Footer />
</div>


