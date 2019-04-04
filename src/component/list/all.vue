<template>
	<div>
		<div class="bigbox">
			<div class="sec" v-for="(v,i) in arr">
				<div class="sec-up">
					<div class="sec-up-l">
						<span><img src="../../assets/alllg.png"></span>
						<p>{{v.tit}}</p>
					</div>
					<div class="sec-up-r">
						{{v.tit2}}
					</div>
				</div>
				
				<div class="sec-mid" v-for="(vv,ii) in v.name">
					<div class="sec-mid-l">
						<div>
							<img :src="vv.img">
						</div>
					</div>
					<div class="sec-mid-r">
						<div class="xq">
							<p style="height: 40%;">{{vv.spm}}</p>
							<p style="color: #999; margin-bottom: 3px;">{{vv.splb}}</p>
							<p>
								<span>天猫无忧购</span>
								<span>七天退换</span>
							</p>
						</div>
						<div class="jg">
							<p style="margin-bottom: 5px;">&yen;{{vv.jg}}</p>
							<p style="color: #999;">×{{vv.sl}}</p>
						</div>
					</div>
				</div>
				
				<div class="sec-foot">
					<div class="sec-foot-txt">
						<p style="color: #999; margin-right: 10px;">共2件商品</p>
						<p style="letter-spacing: 1.2px;">合计:&yen;19.81</p>
					</div>
				</div>
				<div class="sec-last">
					<p>更多</p>
					<p>查看物流</p>
					<p>卖了换钱</p>
					<p>追加评价</p>
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
				total:0,
				
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/list.json')
			  .then(function (response) {
			    _this.arr=response.data.sj;
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
	.bigbox{
		padding: 0px 12px;
	}
	.sec{
		margin-top: 10px;
		width: 100%;
		background: white;
		border-radius: 12px;
		overflow: hidden;
	}
	.sec-up{
		height: 7vh;
		background: white;
		display: flex;
		justify-content: space-between;
	}
	.sec-up-l{
		width: auto;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.sec-up-l span{
		width: 15px;
		height: 15px;
		margin-left: 12px;
	}
	.sec-up-l span img{
		display: block;
		width: 100%;
		height: 100%;
	}
	.sec-up-l p{
		width: auto;
		position: relative;
		top: -1px;
		font-size: 12px;
		margin-left: 5px;
	}
	.sec-up-r{
		// width: 69%;
		height: 100%;
		font-size: 12px;
		color: #ff5000;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-right: 10px;
	}
	.sec-mid{
		height: 13vh;
		background: white;
		display: flex;
		justify-content: space-between;
	}
	.sec-mid-l{
		width: 30%;
		height: 100%;
		display: flex;
		justify-content: flex-end;
	}
	.sec-mid-l div{
		width: 90%;
		height: 100%;
		border-radius: 8px;
		overflow: hidden;
	}
	.sec-mid-l div img{
		width: 100%;
		height: 100%;
	}
	.sec-mid-r{
		width: 67.8%;
		height: 100%;
		display: flex;
		justify-content: space-between;
		padding: 2px 0px 4px;
	}
	.xq{
		width: 75%;
		height: 100%;
	}
	.xq p{
		font-size: 12px;
		text-align: left;
		font-weight: 300;
	}
	.xq p:nth-of-type(1){
		text-overflow: ellipsis;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-bottom: 3px;
	}
	.xq p:nth-of-type(3) span{
		background: #FFF1EB;
		border-radius: 4px;
		font-size: 12px;
		color: #FF5000;
	}
	.jg{
		width: 22%;
		height: 100%;
		font-size: 12px;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		padding-right: 10px;
	}
	.sec-foot{
		height: 5vh;
		display: flex;
		justify-content: flex-end;
		padding-right: 10px;
	}
	.sec-foot-txt{
		width: 43%;
		height: 100%;
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-weight: 500;
	}
	.sec-last{
		height: 7vh;
		padding: 0px 8px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 13px;
		color: #666;
	}
	.sec-last p{
		width: auto;
		height: 55%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1px solid #ccc;
		border-radius: 13px;
		padding: 2px 15px;
	}
	.sec-last p:nth-of-type(1){
		border: none;
	}
</style>
