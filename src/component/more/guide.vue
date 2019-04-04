<template>
	<div>
		<h4>特色市场</h4>
		<div class="mo-box">
			<ul>
				<li v-for="(v,i) in arr">
					<p>腔调</p>
					<div>
						<img :src="v.img">
					</div>
				</li>
			</ul>
		</div>
		<h4>主题市场</h4>
		<div class="mo-box">
			<ul>
				<li v-for="(v,i) in arr2">
					<p>腔调</p>
					<div>
						<img :src="v.img">
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
				arr:[],arr2:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/more.json')
			  .then(function (response) {
			    _this.arr=response.data.guideup;
				_this.arr2=response.data.guidedown;
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
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	body{
		background: white;
	}
	h4{
		height: 6vh;
		font-size: 14px;
		color: #71767e;
		font-weight: 200;
		display: flex;
		align-items: flex-end;
		padding: 0px 0px 3px 2px;
	}
	.mo-box{
		width: 100%;
		margin-left: 0.8%;
		border: 1px solid #f0f0f0;
	}
	.mo-box>ul{
		display: flex;
		flex-wrap: wrap;
	}
	.mo-box ul li{
		width: 25%;
		height: 16vh;
		display: flex;
		flex-direction: column-reverse;
		align-items: center;
		
	}
	.mo-box li div{
		width: 54%;
		height: 44%;
	}
	.mo-box li div img{
		width: 100%;
		height: 100%;
	}
	.mo-box li p{
		height: 40%;
		padding-top: 6px;
		font-size: 12px;
		color: #5f646e;
	}
</style>
