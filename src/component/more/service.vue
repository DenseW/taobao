<template>
	<div>
		<h4>本地生活</h4>
		<div class="mo-box">
			<ul>
				<li v-for="(v,i) in arr">
					<p>电影票</p>
					<div>
						<img :src="v.img1">
					</div>
				</li>
			</ul>
		</div>
		<h4>旅游度假</h4>
		<div class="mo-box">
			<ul>
				<li v-for="(v,i) in arr2">
					<p>电影票</p>
					<div>
						<img :src="v.img1">
					</div>
				</li>
			</ul>
		</div>
		<h4>基础服务</h4>
		<div class="mo-box">
			<ul>
				<li v-for="(v,i) in arr3">
					<p>电影票</p>
					<div>
						<img :src="v.img1">
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				arr:[],arr2:[],arr3:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/more.json')
			  .then(function (response) {
			    _this.arr=response.data.serup;
				_this.arr2=response.data.sermid;
				_this.arr3=response.data.serdown;
				// console.log(response.data.sec);
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });
		}
	}
</script>

<style>
</style>
