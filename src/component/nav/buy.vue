<template>
	<div>
		<header>
			<div>
				<img src="../../assets/buyjt.png" @click="back()">
			</div>
			<div>
				购物车({{this.total}})
			</div>
			<div></div>
		</header>
		
		<div class="buy-sec" v-for="(v,i) in arr">
			<div class="buy-sec-up">
				<div class="sec-up-l">
					<div class="buybtn" @click="change($event)"></div>
					<span class="tm">
						<img src="../../assets/buytm.png">
					</span>
					<p>{{v.tit}}</p>
					<span class="jt">
						<img src="../../assets/buy-jt.png">
					</span>
					<div></div>
				</div>
				<div class="sec-up-r">
					<router-link to="/home">领券</router-link>
					<router-link to="/home">编辑</router-link>
				</div>
			</div>
			
			<div class="buy-sec-down" v-for="(vv,ii) in v.mid">
				<div class="buybtn2">
					<div @click="change2($event)"></div>
				</div>
				<div class="sptp">
					<img :src="vv.img">
				</div>
				<div class="buy-txt">
					<p>{{vv.con}}</p>
					<div class="buy-txt-d">
						<div>
							<span>&yen;</span><span>{{vv.price}}</span>
						</div>
						<div>
							<i @click="reduce($event)" class="inc"></i>
							<span style="color: black; font-size: 16px;" class="inc" >{{vv.hsl}}</span>
							<u @click="increase($event)"></u>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<footer>
			<div class="foot-l" @click="change3($event)">
				<div class="buybtn"></div>
				<p>全选</p>
			</div>
			<div class="foot-r">
				<span>合计 :</span>
				<span>&yen;</span>
				<span>0.00</span>
				<router-link to='/#'>结算()</router-link>
			</div>
		</footer>
		
		<div class="alert" v-if="judge2">
			<div class="ale-txt">
				受不了了，宝贝不能再减少了哦~
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				judge:false,
				num:0,
				num2:0,
				num3:0,
				total:0,
				arr:[],
				inc:0,
				red:0,
				judge2:false
			}
		},
		mounted(){
			var _this=this;
			var aa=[];
			this.$http.get('./data/buy.json')
			  .then(function (response) {
			    _this.arr=response.data.car;
				
				for(var i in response.data.car){
					_this.total+=response.data.car[i].mid.length;
				}
				
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			change(a){
				var pds=this.num2++;
				if(pds%2==0){
					$(a.target).addClass("gg");
					$(a.target).parent().parent().nextAll().children(".buybtn2").children().addClass("gg");
				}else{
					$(a.target).removeClass("gg");
					$(a.target).parent().parent().nextAll().children(".buybtn2").children().removeClass("gg");
				}
			},
			change2(a){
				var pds=this.num++;
				if(pds%2==0){
					$(a.target).addClass("gg");
				}else{
					$(a.target).removeClass("gg");
				}
			},
			change3(a){
				var pds=this.num2++;
				if(pds%2==0){
					$('.buybtn').addClass("gg");
					$('.buybtn2').children().addClass("gg");
				}else{
					$('.buybtn').removeClass("gg");
					$('.buybtn2').children().removeClass("gg");
				}
			},
			
			
			
			increase(a){
				this.inc=parseInt($(a.target).prev().text())+1;
				$(a.target).prev().html(this.inc);
			},
			reduce(a){
				this.red=parseInt($(a.target).next().text())-1;
				$(a.target).next().html(this.red);
				if(this.red<1){
					$(a.target).next().html(1);
					this.judge2=true;
					setTimeout(()=>{
						this.judge2=false;
					},3000)
				}
			},
			
		}
	}
</script>

<style scoped>
	header{
		width: 100%;
		height: 6.4vh;
		background: white;
		display: flex;
		position: static;
	}
	header>div{
		height: 100%;
		display: flex;
		align-items: center;
		flex: 1;
		font-size: 18px;
		letter-spacing: 0.6px;
		padding: 0 !important;
	}
	header>div:nth-of-type(2){
		justify-content: center;
		font-size: ;
	}
	header>div:nth-of-type(1) img{
		transform: scale(0.75);
		margin-left: 6px;
	}
	.buy-sec{
		background: white;
		margin-top: 2vh;
	}
	.buy-sec-up{
		height: 6.2vh;
		display: flex;
		justify-content: space-between;
	}
	.sec-up-l{
		padding-left: 10px;
		display: flex;
		align-items: center;
	}
	.buybtn{
		width: 3.1vh;
		height: 51%;
		border: 2px solid #a6abbb;
		border-radius: 50%;
		margin-right: 2vh;
	}
	.tm{
		width: 2.6vh;
		height: 39%;
		margin-right: 2vh;
	}
	.tm img{
		width: 100%;
		height: 100%;
	}
	.sec-up-l p{
		font-size: 1.2vh;
		margin-right: 2vh;
	}
	.jt{
		width: 1.3vh;
		height: 2.5vh;
	}
	.jt img{
		width: 100%;
		height: 100%;
	}
	.sec-up-r{
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	
	.sec-up-r a:nth-of-type(1){
		position: relative;
	}
	.sec-up-r a:nth-of-type(1)::after{
		content: '';
		color: #f5f5f5;
		border-left: 1px solid #F5F5F5;
		position: absolute;
		right: 0px;
		height: 18px;
	}
	.sec-up-r a{
		display: block;
		font-size: 12px;
		width: 7vh;
		color: black;
	}
	.buy-sec-down{
		height: 18vh;
		display: flex;
	}
	.buybtn2{
		width: 7.5vh;
		height: 100%;
		display: flex;
		align-items: center;
		padding-left: 10px;
	}
	.buybtn2>div{
		width: 3.4vh;
		height: 3.4vh;
		border: 2px solid #a6abbb;
		border-radius: 50%;
	}
	.gg{
		background: url(../../assets/gg.png) no-repeat center center;
		background-size: 100% 100%;
		border: none !important;
	}
	.sptp{
		width: 16vh;
		height: 16vh;
		background: gainsboro;
		margin-top: 1vh;
	}
	.sptp img{
		width: 100%;
		height: 100%;
	}
	.buy-txt{
		width: 32.5vh;
		height: 100%;
		padding: 1.5vh 1.5vh 3vh;
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.buy-txt p{
		font-size: 12px;
	}
	.buy-txt-d{
		color: #f60;
		display: flex;
		justify-content: space-between;
	}
	.buy-txt-d>div span:nth-of-type(1){
		font-size: 12px;
		font-size: 500;
		margin-right: 2px;
	}
	.buy-txt-d>div:nth-of-type(2){
		display: flex;
		align-items: center;
	}
	i{
		width: 1.6vh;
		border-bottom: 1px solid #878787;
	}
	.buy-txt-d>div:nth-of-type(2) span{
		margin: 0px 18px;
	}
	u{
		width: 1.6vh;
		height: 0.6vh;
	}
	u::before{
		content: "";
		display: block;
		width: 1.6vh;
		border-bottom: 1px solid #878787;
		transform: translateY(1px);
	}
	u::after{
		content: "";
		display: block;
		width: 1.6vh;
		border-bottom: 1px solid #878787;
		transform: rotate(90deg);
	}
	footer{
		width: 100%;
		height: 8vh;
		display: flex;
		justify-content: space-between;
		background: white;
		position: fixed;
		bottom: 47px;
	}
	.foot-l{
		padding-left: 10px;
		display: flex;
		align-items: center;
	}
	.buybtn{
		width: 3.1vh;
		height: 3.2vh;
		border: 2px solid #a6abbb;
		border-radius: 50%;
		margin-right: 2vh;
	}
	.foot-l p{
		font-size: 2.5vh;
		margin-right: 2vh;
	}
	.foot-r{
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.foot-r span{
		display: block;
		font-size: 16px;
		color: black;
	}
	.foot-r span:nth-of-type(1){
		margin-right: 1.2vh;
	}
	.foot-r span:nth-of-type(2),.foot-r span:nth-of-type(3){
		letter-spacing: 0.1vh;
		color: #f50;
	}
	.foot-r a{
		width: 15vh;
		height: 100%;
		background: #f50;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 2vh;
		font-size: 15px;
	}
	.alert{
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,.1);
		position: fixed;
		z-index: 500;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 2.2vh;
		color: white;
	}
	.alert>div{
		width: 45vh;
		height: 7.5vh;
		background: rgba(51,51,51,.9);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
