<script setup>
    import { ContactUs } from './ContactUs.js'
</script>
<script>
    export default { mixins: [ContactUs] }
</script>

<template>
	<div :vue-com="name__" class="contactUs" id="contactUs">
		<div class="container">
			<div class="contact-title text-center">
				<h1 v-html="title"></h1>
				<p v-html="description"></p>
			</div>
			<div class="contact-content" v-html="content">
				
			</div>
		</div>
	</div>
</template>

<style>
</style>
