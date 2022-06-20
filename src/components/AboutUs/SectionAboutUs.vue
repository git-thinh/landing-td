<template>
	<div class="section-about" id="aboutUs" style="margin-top: 100px;">
		<div class="container">
			<div class="about-title d-flex flex-column justify-content-center text-center mb-5">
				<h1>About Us</h1>
				<p>Never stop learning and improving our procedure. That is the strength which allows us to meet the
					increasing quality demands from customers.</p>
			</div>
			<div class="about-content d-flex flex-column gap-5 flex-lg-row justify-content-between">
				<div class="col-lg-7 col-12 p-3">
					<h3 class="mb-4">ABCSOFT has been developing quality products since 2012</h3>
					<p class="mb-3">Abcsoft is determined to become a quality solution software company with
						innovative
						organizational and corporate culture. Abcsoft leverages outsourcing as the foundation,
						developing core people, and building breakthrough-opportunity products.</p>
					<p class="mb-3">Teamwork and Positive corporate culture are the efforts that we are working on
						to
						create an open, equal, fair, and respectful working environment.</p>
					<p class="mb-5">With years of experience in building solutions for major enterprises, our
						products
						and services are always highly appreciated by the customers. In addition, educating and
						developing the capability of our contigent of members are one of the many goals that we
						focus
						on.</p>
				</div>
				<div class="col-lg-5 col-12 p-3">
					<div class="box-progress mb-4 position-relative" v-for="(item,index) in json" :key="index">
						<small>{{ item.name }}</small>
						<div class="progress mt-1 w-100" style="height:10px">
							<div class="progress-bar bg-warning" :style="{width:item.widthProgressBar+'%'}"
								style="height: 10px;"></div>
						</div>
						<span class="position-absolute bottom-50 bg-warning text-center p-1 rounded"
							:style="{left:(item.widthProgressBar-5)+'%'}"
							>{{ item.widthProgressBar }}%
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

<script>
	import json from "../../data/dataAboutUs"
	export default {
		data() {
			return {
				json
			}
		},
		created() {


		}
	}
</script>

<style>
</style>
