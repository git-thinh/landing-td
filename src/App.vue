<script setup>
	import NavFixedTop from '@/components/NavMenu/NavFixedTop.vue';
	import Slide from '@/components/Slides/CarouselWithCaptions.vue';
	import Feature from '@/components/Feature/Feature.vue';
	import Focus from '@/components/Focus/FocusProduct.vue';
	import Parallax from '@/components/Parallax/Parallax.vue';
	import AboutUs from '@/components/AboutUs/AboutUs.vue';
	import Partnes from '@/components/Partners/Partners.vue';
	import Projects from '@/components/Projects/Project.vue';
	import Subscribe from '@/components/Subscribe/Subscribe.vue';
	import ContactUs from '@/components/ContactUs/ContactUs.vue';
	import Footer from '@/components/Footer/Footer.vue';
</script>

<template>
	<div id="app" data-bs-spy="scroll" data-bs-target=".navbar">
		<NavFixedTop />
		<Slide />
		<Feature />
		<Focus />
		<Parallax />
		<AboutUs />
		<Partnes />
		<Projects />
		<Subscribe />
		<ContactUs />
		<Footer />
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
	#app {
		font-family: 'Poppins', sans-serif;
		width: 100%;
		margin: 0;
		padding: 0;
	}
</style>
