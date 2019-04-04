<template>
	<div>
		<div class="bigbox">
			
			<div class="real">
				<div class="real-txt">
					<p>个性一族</p>
				</div>
				<div class="real-img">
					<div v-for="(v,i) in arr">
						<div>
							<img :src="v.img">
						</div>
						<p>{{v.con}}</p>
					</div>
				</div>
			</div>
			
			<div class="real">
				<div class="real-txt">
					<p>为您推荐</p>
				</div>
				<div class="real-img">
					<div v-for="(v,i) in arr">
						<div>
							<img :src="v.img">
						</div>
						<p>{{v.con}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				arr:[],
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/categroy.json')
			  .then(function (response) {
			    _this.arr=response.data.gx;
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

<style scoped="">
	.bigbox{
		padding: 12.5px 12px 0px 12px;
		width: 43.7vh;
		text-align: left;
		overflow: hidden;
		overflow: scroll;
		height: 100vh;
	}
	.bigbox::-webkit-scrollbar {
	    display: none;
	}
	.bigbox>p{
		color: #444444;
		padding-bottom: 11.5px;
	}
	.rank{
		display: flex;
		height: 15vh;
		justify-content: space-between;
	}
	.rank>div{
		height: 100%;
		width: 31%;
		color: white;
		font-size: 12px;
		padding: 8px 0px 5px 7px;
	}
	.rank>div:nth-of-type(1){
		background: url(../../assets/recbj3.png) no-repeat center center;
		background-size: 100% 100%;
	}
	.rank>div:nth-of-type(2){
		background: url(../../assets/recbj1.png) no-repeat  center center;
		background-size: 100% 100%;
	}
	.rank>div:nth-of-type(3){
		background: url(../../assets/recbj2.png) no-repeat  center center;
		background-size: 100% 100%;
	}
	.real{
		padding-top: 10px;
	}
	.real>div{
		display: flex;
		justify-content: space-between;
		font-size: 14px;
		letter-spacing: 0.5px;
		margin-bottom: 10px;
	}
	.real-img{
		background: white;
		border-radius: 10px;
		padding: 13.5px 18px;
		display: flex;
		flex-wrap: wrap;
	}
	.real-img>div{
		width: 27%;
		height: 14vh;
		margin: 4.5px 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: 12px;
	}
	.real-img>div>div{
		width: 100%;
		height: 72%;
		background: #222222;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 5px;
	}
	.real-img>div>div img{
		width: 100%;
		height: 100%;
	}
</style>
