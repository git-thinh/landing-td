<template>
	<div class="section-partners bg-light my-5" id="partners">
		<div class="partnert-title border-bottom py-4 text-center">
			<h3>Our Loyal Customers</h3>
		</div>
		<div class="partnert-content">
			<div class="container">
				<div class="tech row fs-1 m-5 text-center">
					<div class="col-2" v-for="(item,index) in top" :key="index">
						<i :class="item"></i>
					</div>
				</div>
			</div>
			<div class="detail text-white">
				<div class="container row m-auto h-100 text-center">
					<div
						class="col-12 col-md-6 col-lg-3 d-flex flex-column justify-content-center align-items-center gap-3"
						v-for="(item,index) in bottom" :key="index">
						<span class="rounded-circle bg-warning" style="width: 75px;height: 75px;font-size:50px">
							<i :class="item.icon"></i>
						</span>
						<div>{{ item.value }}</div>
						<div>{{ item.title }}</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import json from "../../data/dataPartners.json"
	export default {
        data(){
			return{
				top:json.partnertTop,
				bottom:json.partnertBottom
			}
		}
	}
</script>

<style>
	.detail {
		height: 400px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url('../assets/kawasaki-ninja-h2r-6190254_1280.jpg') no-repeat center/cover;
	}
</style>
