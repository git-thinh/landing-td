<template>
	<div class="product-content" id="products" style="margin: 100px 0 50px;">
		<div class="-title d-flex my-5 flex-column justify-content-center align-items-center">
			<h2 class="fw-bold">Mainstream Products</h2>
			<h6>We provide what you need.</h6>
		</div>
		<div class="container">
			<div class="row d-flex justify-content-center text-align-center text-center"  >

				<div class="col-12 col-md-6 col-lg-4" v-for="(item,index) in json" :key="index">
					<div class="box d-flex justify-content-center flex-column">
						<div class="box-icon fs-1 ">
							<i :class="item.icon"></i>
						</div>
						<div class="box-title fw-bold">
							<p>{{ item.title }}</p>
						</div>
						<div class="box-content text-center text-secondary fst-normal" style="font-size: 15px;">
							<p>{{ item.content }}</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import json from "../../data/dataFocus.json"
	export default{
		data(){
			return{
				json
			}
		}
	}
</script>

<style>
</style>
