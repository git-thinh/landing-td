<template>
	<nav class="navbar navbar-expand-lg navbar-white bg-white fixed-top" id="menuTop">
		<div class="container">
			<img src="https://abcsoft.vn/Content/assets/img/logo.png" class="navbar-brand" alt="">
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
				<ul class="navbar-nav flex-row justify-content-center flex-wrap gap-3 mb-2 mb-lg-0 ">
					<li class="nav-item position-relative pt-3 " v-for="(item,index) in json" :key="index">
						<a class="nav-link px-2" :class="{active: (index === activeKey) }" @click="selectNav(index);"
							aria-current="page" :href="item.link">{{ item.name }}</a>
						<!-- <span  class="position-absolute top-0 start-0 bg-warning w-100" style="height: 5px;"></span> -->
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script>
	import json from "../../data/dataMenu.json"
	export default {
		data() {
			return {
				json,
				isActive: false,
				activeKey: 0
			}
		},
		methods: {
			selectNav: function(id) {
				this.activeKey = id;
			}
		}
	}
</script>

<style>
</style>
