<template>
	<div>
		<div class="bigbox">
			<ul class="nav">
				<li v-for="(v,i) in arr" @click="change(i)" :class="{ys:num==i}">
					<div></div>
					{{v.name}}
				</li>
			</ul>
			<component :is="msg"></component>
		</div>
	</div>
</template>

<script>
import orem from './recommend.vue'
import owear from './wear.vue'
import ophone from './phone.vue'
import ogoods from './goods.vue'

	export default {
		data(){
			return{
				arr:[],
				num:0,
				arr2:[
					{
						"dz":"recommend"
					},
					{
						"dz":"wear"
					},
					{
						"dz":"phone"
					},
					{
						"dz":"goods"
					}
				],
				msg:"recommend"
				
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/categroy.json')
			  .then(function (response) {
			    _this.arr=response.data.cate;
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
				this.msg=this.arr2[a].dz
			}
		},
		components:{
			"recommend":orem,
			"wear":owear,
			"phone":ophone,
			"goods":ogoods
		}
	}
</script>

<style scoped="">
	.bigbox{
		display: flex;
	}
	.con{
		width: 78%;
		height: 100vh;
		overflow: hidden;
		overflow: scroll;
	}
	.qq{
		width: 50%;
	}
	ul{
		width: 22%;
		height: 100vh;
		overflow: hidden;
		overflow: scroll;
	}
	.nav::-webkit-scrollbar {
        display: none;
    }
	ul li{
		height: 7.5vh;
		background: white;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #6f6f6f;
	}
	.ys{
		color: #ff5000;
		background: none;
	}
</style>
