<template>
	<div class="row fs-3 w-100 m-0" style="height: 100px;">
		<div v-for="(item,index) in Json" :key="index" :class="item.nameClass">
			<i :class="item.icon"></i>
			<span>{{ item.textSpan }}</span>
		</div>
		<!-- <div class="col-sm-6 col-12 gap-3 px-5 bg-warning d-flex align-items-center flex-sm-row-reverse">
			<i class="fa-solid fa-laptop-code"></i>
			<span>We Build Your Dream</span>
		</div> -->
		<!-- <div class="col-sm-6 col-12 px-5 bg-primary gap-3 text-white d-flex align-items-center">
			<i class="fa-solid fa-code"></i>
			<span>Excellent Code Quality</span>
		</div> -->
	</div>
</template>

<script>
	import Json from "../../data/dataFeature.json"
	export default {
        
		data() {
			return {
				Json
			}
		},
		created() {
			console.log(this.JSON);
		}
	}
</script>

<style>
</style>
