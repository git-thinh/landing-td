<script setup>
	import {
		Projects
	} from './Projects.js'
</script>
<script>
	export default {
		mixins: [Projects]
	}
</script>

<template>
	<div :vue-com="name__" class="-project my-5" id="projects">
		<div class="project-title text-center mb-5">
			<h1 class="my-5" v-html="title"></h1>
			<ul class="nav d-flex justify-content-center">
				<li class="nav-item" v-for="(item,index) in items" :key="index">
					<a class="nav-link text-black active" href="#">{{ item.name }}</a>
				</li>
			</ul>
		</div>
		<div class="project-content">
			<div class="container row m-auto">
				<div class="col-12 col-sm-6 col-md-3 py-3 ">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
				<div class="col-12 col-sm-6 col-md-3 py-3">
					<div class="box-project w-100 bg-secondary" style="height:270px"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
</style>
