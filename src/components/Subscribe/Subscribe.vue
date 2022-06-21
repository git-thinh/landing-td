<script setup>
    import { Subscribe } from './Subscribe.js'
</script>
<script>
    export default { mixins: [Subscribe] }
</script>

<template>
	<div :vue-com="name__" class="-subscribe d-flex align-items-center my-5">
		<div class="container">
			<form action=""
				class="form-subscribe row d-flex justify-content-center align-items-center bg-white text-center justify-content-lg-between py-5 m-auto w-75"
				style="height: 50%;" >
				<h6 v-html="title"></h6>
				<div class="form-group col-12 col-md-5 col-lg-3 p-1" v-for="(item,index) in items" :key="index">
					<input :type="item.type" :placeholder="item.placeholder" :class="item.nameClassInput">
					<label for="" v-html="item.label" :class="item.showLabel"></label>
					<span></span>
				</div>
			</form>
		</div>
	</div>
</template>

<style>
	.-subscribe{
		height: 400px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url('@/components/Subscribe/multistrada-4864742_1280.jpg') no-repeat center/cover;
	}
</style>
