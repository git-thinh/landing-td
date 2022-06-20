<template>
	<div class="section-subscribe d-flex align-items-center my-5">
		<div class="container">
			<form action=""
				class="form-subscribe row d-flex justify-content-center align-items-center bg-white p-1 text-center justify-content-lg-between py-5"
				style="height: 50%;">
				<h6>Subscribe to get latest updates. Stay tuned!</h6>
				<div class="form-group col-12 col-md-5 col-lg-4 mb-1">
					<input type="text" placeholder="Name" class="p-1 w-100">
					<span></span>
				</div>
				<div class="form-group col-12 col-md-5 col-lg-4 mb-1">
					<input type="text" placeholder="Email" class="p-1 w-100">
					<span></span>
				</div>
				<div class="form-group col-12 col-md-5 col-lg-2 mb-1">
					<input type="checkbox" id="reCaptcha">
					<label for="reCaptcha">reCaptcha</label>
				</div>
				<div class="form-group col-12 col-md-5 col-lg-2 mb-1">
					<input type="submit" value="SUBSCRIBE" class="bg-black text-white w-100">
					<span></span>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.section-subscribe{
		height: 400px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url('../assets/multistrada-4864742_1280.jpg') no-repeat center/cover;
	}
</style>