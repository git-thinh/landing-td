<script setup>
	import {
		Parallax
	} from './Parallax.js'
</script>
<script>
	export default {
		mixins: [Parallax]
	}
</script>

<template>
	<div :vue-com="name__" class="parallax d-flex justify-content-center text-white align-items-center" style="">
		<h3 v-html="title"></h3>
	</div>
</template>

<style>
	.parallax {
		height: 300px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url('@/components/Parallax/motorcycle-6471109_1280.jpg') no-repeat 0 -150px/cover;
	}
</style>
