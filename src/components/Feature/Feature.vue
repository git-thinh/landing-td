<script setup>
    import { Feature } from './Feature.js'
</script>
<script>
    export default { mixins: [Feature] }
</script>

<template>
	<div :vue-com="name__" class="row fs-3 w-100 m-0" style="height: 100px;">
		<div v-for="(item,index) in items" :key="index" :class="item.nameClass">
			<i :class="item.icon"></i>
			<span>{{ item.textSpan }}</span>
		</div>
	</div>
</template>

<style>
</style>
