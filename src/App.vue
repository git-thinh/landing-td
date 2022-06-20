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
	import NavFixedTop from './components/NavMenu/NavFixedTop.vue';
	import Slide from './components/Slides/CarouselWithCaptions.vue';
	import Feature from './components/Feature/SectionFeature.vue';
	import Focus from './components/Focus/FocusProduct.vue';
	import Parallax from './components/Parallax/SectionParallax.vue';
	import AboutUs from './components/AboutUs/SectionAboutUs.vue';
	import Partnes from './components/Partners/SectionPartners.vue';
	import Projects from './components/Projects/SectionProject.vue';
	import Subscribe from './components/Subscribe/SectionSubscribe.vue';
	import ContactUs from './components/ContactUs/SectionContactUs.vue';
	import Footer from './components/Footer/SectionFooter.vue';
	
	export default {
		name: 'App',
		components: {
			NavFixedTop,
			Slide,
			Feature,
			Focus,
			Parallax,
			AboutUs,
			Partnes,
			Projects,
			Subscribe,
			ContactUs,
			Footer
		}
	}
</script>

<style>
	@import './components/assets/fontawesome/css/all.css';
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	#app {
		font-family: 'Poppins', sans-serif;
		width: 100%;
		margin: 0;
		padding: 0;	
	}
</style>
