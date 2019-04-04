<template>
	<div>
		<header>
			<div>
				<router-link to="/search" class="search">
					<img src="../../assets/fdj.png" alt="">
					寻找宝贝店铺
				</router-link>
			</div>
		</header>
		
		<div class="sky"></div>
		
		<mt-swipe :auto="2000">
		  <mt-swipe-item>
			  <img src="../../assets/lb1.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../../assets/lb2.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../../assets/lb3.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../../assets/lb4.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../../assets/lb5.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../../assets/lb6.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../../assets/lb7.jpg">
		  </mt-swipe-item>
		  <mt-swipe-item>
			  <img src="../../assets/lb8.jpg">
		  </mt-swipe-item>
		</mt-swipe>
		
		<article>
			<ul>
				<li v-for="(v,i) in arr">
					<router-link to="/categroy">
						<img :src="v.dz">
					</router-link>
					<p>{{v.con}}</p>
				</li>
			</ul>
			<img src="../../assets/wan.png_.webp" class="wan">
		</article>
		
		<div class="topline">
			<div>
				<img src="../../assets/tbtt.webp">
			</div>
			<div class="lbt">
				<ul>
					<li v-for="(v,i) in arr2">
						<div class="txt">
							<p>
								<span>热门</span>
								{{v.msg}}
							</p>
							<p>
								<span>热门</span>
								{{v.msg2}}
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="sec1">
			<div class="sec1-o">
				<div class="sec1-o-l">
					<div class="sec1-simg">
						<img src="../../assets/tqg1_.webp">
					</div>
				</div>
				<div class="sec1-o-r">
					<div>
						<img src="../../assets/tqg2.webp">
					</div>
				</div>
			</div>
			
			<div class="sec1-t" v-for="(v,i) in arr3">
				<div class="sec1-o-l">
					<div class="sec1-simg">
						<div>
							<p>{{v.con}}</p>
						</div>
						<div>
							<img :src="v.img">
						</div>
					</div>
				</div>
				<div class="sec1-o-r">
					<div>
						<img :src="v.img2">
					</div>
				</div>
			</div>
		</div>
		
		<div class="direct">
			<div>
				<div class="dir-up">
					<div class="dir-up-l">
						<img src="../../assets/zb.png">
						<div class="dir-up-txt">
							<p>“路转粉”每一秒都在发生</p>
							<p>败家主播天天有，边看主播边剁手！</p>
						</div>
						<div class="dir-up-img">
							<img src="../../assets/love.webp">
						</div>
					</div>
					<div class="dir-up-r">
						<p>菱格手拿包</p>
						<p>主播优选</p>
					</div>
				</div>
				
				<div class="dir-down">
					<div v-for="(v,i) in arr4">
						<div class="dir-down-u">
							<div></div>
						</div>
						<div class="dir-down-d">
							<div>
								<p>{{v.con}}</p>
								<p>{{v.con2}}</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class="dir-txt">
					<div class="dir-txt-l">
						<span>主播推荐</span>
						<p>品质好货，不能错过的亲民价</p>
					</div>
					<p>抢福利></p>
				</div>
			</div>
		</div>
		
		<div class="world">
			<div>
				<div class="wor-up">
					<div class="wor-up-l">
						<img src="../../assets/world.png">
						<div class="wor-up-txt">
							<p>吃完必吮指的人气威化评测！</p>
						</div>
					</div>
					<div class="wor-up-r">
						<div class="wor-up-r-txt">
							<p>Tonymoly</p>
							<p style="font-size: 12px;">
								<span><img src="../../assets/hglogo.png"></span>韩国
							</p>
						</div>
						<div class="wor-up-r-img">
							<img src="../../assets/world2.png">
						</div>
					</div>
				</div>
				
				<div class="wor-down">
					<div>
						<div class="wor-down-txt">
							<div>
								<p style="color: #bc81ff;">
									进口优选
									<span class="xlogo">
										<img src="../../assets/gj.webp">
									</span>
								</p>
								<p style="color: #a5a5a5; font-size: 12px;">正品保障15天后售后无忧</p>
							</div>
						</div>
						<div class="wor-down-img">
							<div>
								<img src="../../assets/world3.png">
							</div>
							<div>
								<img src="../../assets/world4.png">
							</div>
						</div>
					</div>
					
					<div v-for="(v,i) in arr5">
						<div class="wor-down-txt">
							<div>
								<p style="color: #515151;">
									{{v.con}}
								</p>
								<p style="color: #a5a5a5; font-size: 12px;">{{v.con2}}</p>
							</div>
						</div>
						<div class="wor-down-img">
							<div>
								<img :src="v.img">
							</div>
							<div>
								<img :src="v.img2">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="world world2">
			<div>
				<div class="wor-up">
					<div class="wor-up-l">
						<img src="../../assets/kw.webp">
						<div class="wor-up-txt">
							<p>每年都离不开小白鞋，清新暖男气质值得拥有</p>
						</div>
					</div>
					<div class="wor-up-r">
						<div>
							#篮球迷
						</div>
					</div>
				</div>
				<div class="wor-down">
					<div v-for="(v,i) in arr6">
						<div class="wor-down-txt">
							<div>
								<p style="color: #515151;">
									{{v.con}}
								</p>
								<p style="color: #a5a5a5; font-size: 12px;">{{v.con2}}</p>
							</div>
						</div>
						<div class="wor-down-img">
							<div>
								<img :src="v.img">
							</div>
							<div>
								<img :src="v.img2">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="cs">
			<div v-for="(v,i) in arr7">
				<div class="cs-txt">
					<p style="font-size: 14px; color: #484848;">{{v.con}}</p>
					<p style="font-size: 12px; color: #b2b2b2;">{{v.con2}}</p>
				</div>
				<div class="cs-img">
					<div>
						<img :src="v.img" width="100%" height="100%">
					</div>
				</div>
			</div>
		</div>
		
		<div class="guess">
			<div class="title">
				<span></span>
				<div class="tit-txt">
					<span>
						<img src="../../assets/youlike.png">
					</span>
					猜你喜欢
				</div>
			</div>
			<div class="con">
				<div v-for="(v,i) in arr8">
					<div class="con-img">
						<img :src="v.img">
					</div>
					<div class="con-txt">
						<p>{{v.con}}</p>
						<div>&yen;{{v.con2}} <span>{{v.con3}}人付款</span></div>
					</div>
				</div>
			</div>
		</div>
		
		<footer>
			<div class="btns">
				<router-link to="/my">登录</router-link>
				<router-link to="/my">注册</router-link>
				<router-link to="/my">手淘App</router-link>
				<router-link to="/my">用户反馈</router-link>
			</div>
			<p>&copy; 2018 浙B2-20080224 服务中心</p>
		</footer>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				arr:[],arr2:[],arr3:[],arr4:[],arr5:[],
				arr6:[],arr7:[],arr8:[]
			}
		},
		mounted(){
			var _this=this;
			this.$http.get('./data/home.json')
			  .then(function (response) {
			    _this.arr=response.data.loca;
				_this.arr2=response.data.xx;
				_this.arr3=response.data.sec;
				_this.arr4=response.data.zb;
				_this.arr5=response.data.world;
				_this.arr6=response.data.kw;
				_this.arr7=response.data.cs;
				_this.arr8=response.data.guess;
				// console.log(response.data.sec);
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });  
			
			var n=0;
			setInterval(function(){
				n++;
				if(n>4){
					n=0;
					$('.lbt ul').css({'top':`${n*-64}px`})
					n=1;
				}
				$('.lbt ul').stop().animate({'top':`${n*-64}px`})
			},2000)
			  
		}
	}
</script>

<style>
	header{
		width: 100%;
		background-color: #FF852A;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	header div{
		height: 100%;
		padding: 6px 9px 6px 42px;
		background: url(../../assets/logo.png) no-repeat 9px center;
		background-size: 27px 20px;
	}
	.search{
		height: 25px;
		display: block;
		width: 100%;
		background-color: #FF4E22;
		border-radius: 4px;
		text-align: center;
		color: #fff;
		line-height: 25px;
		font-size: 15px;
		font-weight: 600;
		display: inline-block;
		color: #F0E0DC;
	}
	.search img{
		width: 19px;
		position: relative;
		top: 50%;
		transform: translateY(-50%);
	}
	.sky{
		height: 37px;
	}
	.mint-swipe-items-wrap{
		padding-bottom: 31.28888%;
	}
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	article{
		position: relative;
	}
	article img{
		width: 100%;
		position: relative;
	}
	article>ul{
		display: flex;
		flex-wrap: wrap;
		background: white;
		padding-bottom: 20px;
		position: relative;
		z-index: 1;
	}
	article>ul li{
		width: 17%;
		margin: 5px 0px 0px 10px;
	}
	article li p{
		font-size: 11px;
		color: rgb(102, 102, 102)
	}
	.wan{
		position: absolute;
		left: 0;
		top: -9px;
	}
	.topline{
		width: 100%;
		background: #fff;
		display: flex;
		padding-bottom: 5px;
		align-items: center;
	}
	.topline>div:nth-of-type(1){
		width: 10%;
		margin: -10px 10px 0px 13.248px;
	}
	.topline div img{
		width: 100%;
	}
	.lbt{
		height: 50px;
		width: 90%;
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
	}
	.lbt ul{
		width: 100%;
		position: absolute;
		top: 0;
		height: 400%;
		top: 0px;
	}
	.lbt ul li{
		display: flex;
		height: 32%;
		background: url(../../assets/jb.png) no-repeat right,url(../../assets/cup.png) no-repeat right;
		background-size: auto 100%; 
		
	}
	.txt{
		width: 75%;
	}
	.txt p{
		text-align: left;
		font-size: 13px;
		text-overflow:ellipsis;
		white-space:nowrap;
		overflow:hidden;
	}
	.txt p:nth-of-type(1){
		margin-bottom: 2px;
	}
	.txt p span{
		display: inline-block;
		border: 1px solid #e82033;
		border-radius: 4px;
		font-size: 12px;
		padding: 0px 2px 0px 2px;
		height: 13px;
		line-height: 12px;
		color: #e82033;
	}
	.img{
		width: 25%;
		height: 100%;
	}
	.sec1{
		margin-top: 10px;
		width: 100%;
		height: 224px;
		display: flex;
		flex-wrap: wrap;
	}
	.sec1>div{
		width: 50%;
		height: 50%;
		background: url(../../assets/tqg.webp) no-repeat,white;
		background-position: top left;
		background-size: 200px;
		display: flex;
		box-sizing: initial;
	}
	.sec1-o .sec1-simg{
		height: 55%;
	}
	.sec1>div>div{
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: row-reverse;
		align-items: flex-end;
	}
	.sec1-simg{
		width: 90%;
		height: 75%;
	}
	.sec1>div img{
		width: 100%;
		height: 100%;
	}
	.sec1-o-r>div{
		width: 88%;
		height: 85%;
	}
	.sec1 .sec1-t{
		width: 50%;
		height: 50%;
		background: url(../../assets/yhh.webp) no-repeat,white;
		background-size: 210px;
	}
	.sec1-simg>div p{
		color: rgb(153, 153, 153);
		font-size: 13px;
		text-align: left;
		padding-left: 3px;
	}
	.sec1 .sec1-t:nth-of-type(3){
		width: 50%;
		height: 50%;
		background: url(../../assets/wosp.webp) no-repeat,white;
		background-size: 210px;
		padding-bottom: 8px;
	}
	.sec1 .sec1-t:nth-of-type(4){
		width: 50%;
		height: 50%;
		background: url(../../assets/qd.webp) no-repeat,white;
		background-size: 210px;
		padding-bottom: 8px;
	}
	
	.direct{
		width: 100%;
		height: 352.5px;
		margin-top: 20px;
	}
	.direct>div{
		width: 100%;
		height: 100%;
		padding-top: 10px;
	}
	.dir-up{
		width: 100%;
		height: 35%;
		display: flex;
	}
	.dir-up-l{
		width: 67%;
		height: 100%;
		background: url(../../assets/worldb.webp),url(../../assets/zb1.jpg) no-repeat center center;
		background-size: 100% 100%;
		position: relative;
		text-align: left;
		padding: 20px 15px 5px 5px;
		color: white;
		display: flex;
		align-items: flex-end;
	}
	.dir-up-l>img{
		width: 150%;
		position: absolute;
		top: -10px;
		left: 0;
	}
	.dir-up-txt>p:nth-of-type(1){
		font-size: 14px;
	}
	.dir-up-txt>p:nth-of-type(2){
		font-size: 12px;
	}
	.dir-up-img{
		width: 10%;
		height: 22%;
		position: relative;
		left: 15px;
		bottom: 5px;
		text-align: center;
	}
	.dir-up-img img{
		display: block;
		height: 100%;
	}
	.dir-up-r{
		width: 33.33%;
		height: 100%;
		background: url(../../assets/worldb.webp),url(../../assets/zb2.jpg) no-repeat center center;
		background-size: 100% 100%;
		display: flex;
		flex-direction: column-reverse;
		text-align: left;
		padding: 0px 0px 5px 10px;
		color: white;
		font-size: 14px;
	}
	.dir-up-r>p:nth-of-type(1){
		font-size: 12px;
	}
	.dir-down{
		height: 53%;
		display: flex;
		background: white;
	}
	.dir-down>div{
		width: 33.333%;
		height: 100%;
	}
	.dir-down-u{
		height: 68%;
		background: url(../../../imgs/zb3.jpg)no-repeat center center;
		background-size: 100% 100%;
		display: flex;
		align-items: flex-end;
	}
	.dir-down>div:nth-of-type(2) .dir-down-u{
		background: url(../../assets/worldb.webp),url(../../../imgs/zb5.jpg)no-repeat center center;
		background-size: 100% 100%;
	}
	.dir-down>div:nth-of-type(3) .dir-down-u{
		background: url(../../assets/worldb.webp),url(../../../imgs/zb4.jpg)no-repeat center center;
		background-size: 100% 100%;
	}
	.dir-down-u>div{
		width: 25%;
		height: 12%;
		background: url(../../assets/worldb.webp),url(../../assets/live.webp) no-repeat center center;
		background-size: 100% 100%;
	}
	.dir-down-d{
		padding: 10px 0px 5px 5px;
		display: flex;
		text-align: left;
	}
	.dir-down-d p{
		font-size: 14px;
	}
	.dir-down-d p:nth-of-type(2){
		font-size: 12px;
		color: rgb(153, 153, 153);
	}
	.dir-txt{
		height: 12%;
		display: flex;
		padding: 10px 5px 10px 10px;
		justify-content: space-between;
		font-size: 13px;
		background: white;
	}
	.dir-txt-l{
		display: flex;
	}
	.dir-txt-l>span{
		height: 15px;
		display: inline-block;
		border: 1px solid #fd1e57;
		border-radius: 3px;
		color: #fd1e57;
		font-size: 12px;
		line-height: 13px;
		margin-right: 5px;
		position: relative;
		top:1px;
	}
	
	.world{
		width: 100%;
		height: 57vh;
		margin-top: 20px;
		background: white;
	}
	.world>div{
		width: 100%;
		height: 100%;
		padding-top: 10px;
	}
	.wor-up{
		width: 100%;
		height: 35%;
		display: flex;
	}
	.wor-up-l{
		width: 67%;
		height: 100%;
		background: url(../../assets/worldb.webp),url(../../assets/world1.jpg) no-repeat center center;
		background-size: 100% 100%;
		position: relative;
		text-align: left;
		padding: 20px 15px 8px 8px;
		color: white;
		display: flex;
		align-items: flex-end;
	}
	.wor-up-l>img{
		width: 150%;
		position: absolute;
		top: -10px;
		left: 0;
	}
	.wor-up-txt>p:nth-of-type(1){
		font-size: 14px;
	}
	.wor-up-txt>p:nth-of-type(2){
		font-size: 12px;
	}
	.wor-up-img{
		width: 10%;
		height: 22%;
		position: relative;
		left: 15px;
		bottom: 5px;
		text-align: center;
	}
	.wor-up-img img{
		display: block;
		height: 100%;
	}
	.wor-up-r{
		width: 33.33%;
		height: 100%;
		display: flex;
		text-align: left;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: rgb(51, 51, 51);
		font-size: 14px;
	}
	.wor-up-r-txt{
		width: 91%;
		height: 30%;
	}
	.wor-up-r-txt p:nth-of-type(2){
		line-height: 14px;
		font-size: 12px;
		margin-top: 1px;
	}
	.wor-up-r-txt p:nth-of-type(2) span{
		display: inline-block;
		width: 11%;
		height: 2vh;
		vertical-align: bottom;
		margin-right: 5px;
	}
	.wor-up-r-txt p:nth-of-type(2) span img{
		width: 100%;
		height: 100%;
	}
	.wor-up-r-img{
		width: 95%;
		height: 54%;
	}
	.wor-up-r-img img{
		width: 100%;
		height: 100%;
	}
	.wor-down{
		height: 65%;
		background: #fff;
		display: flex;
		flex-wrap: wrap;
	}
	.wor-down>div{
		width: 50%;
		height: 50%;
	}
	.wor-down-txt{
		height: 35%;
		display: flex;
		justify-content: flex-end;
		text-align: left;
		padding-top: 7px;
	}
	.wor-down-txt>div{
		width: 95%;
	}
	.wor-down-txt>div>p{
		width: 100%;
	}
	.xlogo{
		display: inline-block;
		width: 20%;
		height: 2vh;
	}
	.xlogo img{
		width: 100%;
		height: 100%;
	}
	.wor-down-img:nth-of-type(1){
		width: 50%;
		height: 50%;
		background: #26A2FF;
	}
	.wor-down-img{
		width: 85%;
		height: 60%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	.wor-down-img>div{
		width: 40%;
		height: 88%;
		margin-right: 5px;
	}
	.wor-down-img>div img{
		width: 100%;
		height: 100%;
	}
	
	
	.world2 .wor-up-l{
		background: url(../../assets/worldb.webp),url(../../assets/kw.jpg) no-repeat center center;
		background-size: 100% 100%;
	}
	.world2 .wor-up-r{
		display: flex;
		justify-content: flex-end;
		color: white;
		font-size: 13px;
		background: url(../../assets/kw1.jpg)no-repeat center center;
		background-size: 100% 100%;
		padding-bottom: 15px;
		text-align: center;
	}
	.world2 .wor-up-r>div{
		width: 75%;
		height: 17%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(../../assets/ldw.webp) no-repeat center center;
		background-size: 100% 100%;
	}
	
	.cs{
		height: 18vh;
		display: flex;
	}
	.cs>div{
		width: 25%;
		height: 100%;
		background: white;
		display: flex;
		align-items: flex-end;
		flex-direction: column;
		justify-content: center;
	}
	.cs-txt{
		text-align: left;
		display: flex;
		flex-direction: column;
		width: 90%;
	}
	.cs-img{
		width: 100%;
		height: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.cs-img div{
		width: 70%;
		height: 100%;
	}
	.guess{
		margin-top: 10px;
	}
	.title{
		height: 5.2vh;
		background: white;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
	}
	.title>span{
		width: 140px;
		height: 1px;
		background: #ff5000;
		display: block;
		position: absolute;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
	}
	.tit-txt{
		color: #ff5000;
		display: flex;
		background: white;
		position: relative;
		z-index: 2;
		padding: 0 8px;
	}
	.tit-txt::before{
		content: '';
		position: absolute;
		background: #ff5000;
		width: 3px;
		height: 3px;
		border-radius: 100%;
		top: 50%;
		left: 0;
		transform: translate(0,-50%);
	}
	.tit-txt::after{
		content: "";
		position: absolute;
		background: #ff5000;
		width: 3px;
		height: 3px;
		border-radius: 100%;
		top: 50%;
		right: 0;
		transform: translate(0,-50%);
	}
	.tit-txt>span{
		width: 17px;
		height: 17px;
		margin-right: 6px;
		position: relative;
		top: -1px;
	}
	.tit-txt>span img{
		vertical-align: text-bottom;
		width: 100%;
		height: 100%;
	}
	.con{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.con>div{
		width: 49.3%;
		height: 39.7vh;
		background: white;
		margin-bottom: 5px;
	}
	.con-img{
		height: 70%;
	}
	.con-img img{
		width: 100%;
		height: 100%;
	}
	.con-txt{
		height: 30%;
		padding: 0px 8px;
	}
	.con-txt>p{
		width: 100%;
		height: 46%;
		font-size: 13px;
		overflow: hidden;
		max-height: 32px;
		word-break: break-all;
	}
	.con-txt>div{
		width: 98%;
		height: 54%;
		color: #ff5000;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}
	.con-txt>div span{
		font-size: 12px;
		color: #999999;
		margin-bottom: 3px;
	}
	footer{    
		margin-top: 20px;
		padding: 20px 9px 60px;
		background-color: #4e525e;
	}
	.btns{
		height: 5.3vh;
		display: flex;
		justify-content: space-between;
	}
	.btns a{
		display: inline-block;
		display: flex;
		align-items: center;
		height: 100%;
		border: 1px solid #42454d;
		border-radius: 5px;
		color: #c3c6ca;
		background: #555965;
		padding: 0px 17px;
		font-size: 14px;
	}
	footer>p{
		font-size: 12px;
		color: #c3c6ca;
		margin-top: 20px;
	}
</style>
