<template>
	<div class="bigbox">
		<ul>
			<li v-for="(v,i) in arr" @click="change(i)" :class="{ys:num==i}">{{v.con}}</li>
		</ul>
		<component :is="msg"></component>
	</div>
</template>

<script>
	import oguide from '../more/guide.vue';
	import oservice from '../more/service.vue';
	
	export default {
		data(){
			return{
				num:0,
				num1:0,
				arr:[
					{
						"con":"特色导购",
						"tz":"guide"
					},
					{
						"con":"功能服务",
						"tz":"service"
					}
				],
				msg:"guide"
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/more.json')
			  .then(function (response) {
			    // _this.arr=response.data.nav;
				// console.log(response.data.sec);
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });
		},
		methods:{
			change(a){
				this.num=a;
				this.msg=this.arr[a].tz;
			}
		},
		components:{
			"guide":oguide,
			"service":oservice
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.bigbox{
		padding: 0px 10px 0px 4px;
	}
	.bigbox>ul{
		width: 100%;
		margin: 10px 0px 10px 0px;
		height: 5vh;
		border: 1px solid #afb1b7;
		border-bottom: 1px solid #5f646e;
		border-radius: 8px;
		display: flex;
		font-size: 14px;
	}
	.bigbox>ul li{
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ys{
		background: #5f646e;
		color: white;
	}
</style>
