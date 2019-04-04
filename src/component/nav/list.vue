<template>
	<div>
		<ul class="nav">
			<li v-for="(v,i) in arr" @click="change(i)">
				<div :class="{bs:num==i}">{{v.con}}</div>
			</li>
		</ul>
		<div class="ss">
			<div class="li-inp">
				<span>
					<img src="../../assets/li-fdj.png">
				</span>
				<input type="text" placeholder="搜索全部订单">
			</div>
			<div class="li-btn">
				搜索
			</div>
		</div>
		
		<component :is="msg"></component>
	</div>
</template>

<script>
	import oall from '../list/all.vue'
	import opay from '../list/pay.vue'
	import odeliver from '../list/deliver.vue'
	import oreceiving from '../list/receiving.vue'
	import oevaluate from '../list/evaluate.vue'
	
	export default{
		data(){
			return {
				arr:[
					{
						"con":"全部",
						"msgc":"all"
					},
					{
						"con":"待付款",
						"msgc":"pay"
					},
					{
						"con":"待收货",
						"msgc":"deliver"
					},
					{
						"con":"待发货",
						"msgc":"receiving"
					},
					{
						"con":"待评价",
						"msgc":"evaluate"
					},
				],
				num:0,
				msg:"all"
			}
		},
		methods:{
			change(a){
				this.num=a;
				this.msg=this.arr[a].msgc;
			}
		},
		components:{
			"all":oall,
			"pay":opay,
			"deliver":odeliver,
			"receiving":oreceiving,
			"evaluate":oevaluate
		}
	}
</script>

<style>
	.nav{
		height: 6vh;
		background: white;
		display: flex;
	}
	.nav li{
		width: 20%;
		height: 100%;
		display: flex;
		justify-content: center;
	}
	.nav li div{
		width: auto;
		height: 100%;
		display: flex;
		align-items: center;
		font-size: 14px;
	}
	.bs{
		color: rgb(255, 80, 0);
		border-bottom: 2px solid rgb(255, 80, 0);
	}
	.ss{
		height: 4vh;
		margin-top: 12px;
		padding: 0px 12px;
		display: flex;
		justify-content: space-between;
	}
	.li-inp{
		width: 75%;
		height: 100%;
		background: white;
		border-radius: 15px 15px;
		display: flex;
		align-items: center;
	}
	.li-inp span{
		display: inline-block;
		width: 7%;
		height: 70%;
		margin-left: 10px;
	}
	.li-inp span img{
		width: 100%;
		height: 100%;
	}
	.li-inp input{
		margin-left: 5px;
		outline: none;
		border: none;
	}
	.li-btn{
		width: 21.5%;
		height: 100%;
		background: #FF5000;
		border-radius: 16px 16px;
		color: #FFFFFF;
		font-size: 14px;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
