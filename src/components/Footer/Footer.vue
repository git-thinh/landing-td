<script setup>
	import {
		Footer
	} from './Footer.js'
</script>
<script>
	export default {
		mixins: [Footer]
	}
</script>

<template>
	<div :vue-com="name__" class="footer bg-black text-white" style="margin-top: 100px;">
		<div class="container text-center py-5">
			<div class="footer-title d-flex flex-column" style="font-size: 12px;" v-html="content">
				
			</div>
			<ul class="footer-content nav mt-3 d-flex justify-content-center">
				<li class="nav-item" v-for="(item,index) in items" :key="index">
					<a class="nav-link" href="#">
						<i style="font-size: 14px;color: white" :class="item.icon"></i></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<style>
</style>
