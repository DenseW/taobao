<template>
	<div>
		<router-view></router-view>
		<ul>
			<li v-for="(v,i) in qw" @click="change(i)">
				<router-link :to="v.dz">
					<span :class="v.lm"></span>
					<span :class="v.lm1"></span>
					{{v.con}}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				num:0,
				qw:[
					{
						"con":"首页",
						"dz":"/home",
						"lm":"iconfont icon-fangzi1",
						"lm1":"iconfont icon-fangzi"
					},
					{
						"con":"购物车",
						"dz":"/buy",
						"lm":"iconfont icon-gouwuche",
						"lm1":"iconfont icon-gouwuche1"
					},
					{
						"con":"订单列表",
						"dz":"/list",
						"lm":"iconfont icon-biaodan1",
						"lm1":"iconfont icon-biaodan"
					},
					{
						"con":"我的淘宝",
						"dz":"/my",
						"lm":"iconfont icon-denglu",
						"lm1":"iconfont icon-denglu1"
					},
					{
						"con":"更多",
						"dz":"/more",
						"lm":"iconfont icon-gengduo",
						"lm1":"iconfont icon-gengduo"
					}
				]
			}
		},
		methods:{
			change(a){
				this.num=a;
			}
		}
	}
</script>

<style scoped>
	.data-v-f3ef6b12{
		display: flex;
		justify-content: center;
	}
	ul{
		width: 100%;
		/* border: 1px solid #e7e7e7; */
		position: fixed;
		z-index: 100;
		bottom: 0px;
		left: 0px;
		display: flex;
		justify-content: space-between;
		padding: 0 20px;
		padding-top: 2px;
		box-sizing: border-box;
		background: #fff;
	}
	ul li a{
		color: #5d656b;
		font-size: 12px;
		transform: scale(0.83333);
	}
	ul li span{
		display: block;
		font-size: 20px;
	}
	ul li span:nth-of-type(2){
		display: none;
	}
	.router-link-active span:nth-of-type(1){
		display: none;
	}
	.router-link-active span:nth-of-type(2){
		display: block;
	}
</style>