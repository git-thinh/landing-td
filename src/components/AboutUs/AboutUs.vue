<script setup>
    import { AboutUs } from './AboutUs.js'
</script>
<script>
    export default { mixins: [AboutUs] }
</script>

<template>
	<div :vue-com="name__" class="-about" id="aboutUs" style="margin-top: 100px;">
		<div class="container">
			<div class="about-title d-flex flex-column justify-content-center text-center mb-5">
				<h1 v-html="title"></h1>
				<p v-html="description"></p>
			</div>
			<div class="about-content d-flex flex-column gap-5 flex-lg-row justify-content-between">
				<div class="col-lg-7 col-12 p-3" v-html="content"></div>
				<div class="col-lg-5 col-12 p-3">
					<div class="box-progress mb-4 position-relative" v-for="(item,index) in items" :key="index">
						<small>{{ item.name }}</small>
						<div class="progress mt-1 w-100" style="height:10px">
							<div class="progress-bar bg-warning" :style="{width:item.widthProgressBar+'%'}"
								style="height: 10px;"></div>
						</div>
						<span class="position-absolute bottom-50 bg-warning text-center p-1 rounded"
							:style="{left:(item.widthProgressBar-5)+'%'}">{{ item.widthProgressBar }}%
							<svg width="1em" height="1em" viewBox="0 0 16 16"
								class="position-absolute text-warning top-100 start-50 translate-middle"
								style="margin-top: 3px;" fill="#ffc107" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
							</svg>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
</style>
