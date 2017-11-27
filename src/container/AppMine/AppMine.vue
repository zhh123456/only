<template>
	<div class="app-mine">
		<div class="mine-header">
			<router-link :to="{name:'main'}" class="goShop"><<< 去购物</router-link>
		</div>
		<div class="mine-pos">
			<img class="only" src="http://m.only.cn/mvc/personalCenter_content/css/myImg/logo.jpg">
			<div class="message">
				<span>我的会员卡>>></span>
				<span>全部订单>>></span>
			</div>
			<ul class="list"> 
				<li>
					<img src="http://m.only.cn/mvc/personalCenter_content/css/myImg/pay.png" alt="">
					待付款
				</li>
				<li>
					<img src="http://m.only.cn/mvc/personalCenter_content/css/myImg/icon1.png" alt="">
					待发货
				</li>
				<li>
					<img src="http://m.only.cn/mvc/personalCenter_content/css/myImg/shipped.png" alt="">
					待收货
				</li>
				<li>
					<img src="http://m.only.cn/mvc/personalCenter_content/css/myImg/customer.png" alt="">
					退货/售后
				</li>
			</ul>
			<div class="other">
				<span>购物清单</span>
				<span>地址管理</span>
			</div>
			<img class="imghh" src="http://m.only.cn/mvc/personalCenter_content/css/myImg/my_coupons_02.jpg" alt="">
			<img class="imghh" src="http://m.only.cn/mvc/personalCenter_content/css/myImg/my_coupons_12.jpg" alt="">
			<img class="imghh" src="http://m.only.cn/mvc/personalCenter_content/css/myImg/my_coupons_04.jpg" alt="">
			<img class="imghh" src="http://m.only.cn/mvc/personalCenter_content/css/myImg/my_coupons_06.jpg" alt="">
			<img class="imghh" src="http://m.only.cn/mvc/personalCenter_content/css/myImg/my_coupons_08.jpg" alt="">
			<img class="imghh" src="http://m.only.cn/mvc/personalCenter_content/css/myImg/my_coupons_10.jpg" alt="">
			<div class="foot">
				<button @click="exit">退出登录</button>
			</div>
		</div>
	</div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
	export default{
		name:'AppMine',
		data(){
			return{
				
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		methods:{
			...mapMutations(['exit'])
		},
		watch:{
			userInfo(val){
				if(val.userID==''){
					this.$router.push('login')
				}
			}
		}
	}
</script>
<style scoped lang="scss">
	.app-mine{
		.mine-header{
			position: relative;
			height: 1.88rem;
			background: url('http://m.only.cn/mvc/personalCenter_content/css/myImg/banner.jpg') no-repeat;
    		background-size: 100% 100%;
			.goShop{
				position: absolute;
				top: 10px;
				left: 10px;
				color: #ffffff;
			}
		}
		.mine-pos{
			color: #fff;
			box-sizing: border-box;
			padding-top:90px;
			background: url('http://m.only.cn/mvc/personalCenter_content/css/myImg/filter_02.jpg') no-repeat;
    		background-size: 100% 100%;
			height: 2.75rem;
			position: relative;
			.only{
				position: absolute;
				display: block;
				border-radius: 50%;
				width: 1.04rem;
				height: 1.04rem;
				border: 1px solid #d2d2d2;
				top: -0.52rem;
				left:36%;
			}
			.message{
			
				font-weight: bold;
				border-top: 1px solid #716d6c;
				border-bottom: 1px solid #716d6c;
				box-sizing: border-box;
				padding: 0 3px;
				span{
					display: inline-block;
					width: 49%;
					text-align: center;
					height: 0.41rem;
					line-height: 0.41rem;
					border-left: 1px solid #716d6c;
				}   
				span:nth-child(1){
					border-left:none;
				}
			}
			.list{
				padding: 0;
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding:5px 10px;
				li{
					height: 0.51rem;

					font-size: 0.14rem;
				
					display: flex;
					justify-content: space-between;
					align-items: center;
					flex-direction: column;
					img{
						display: block;
						width: 0.19rem;
						height: 0.19rem;
					}
				}
			}
			.other{
				margin-top: 20px;
				border-top: 1px solid #716d6c;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 0.42rem;
				span{
					width: 50%;
					text-align: center;
				}
			}
			.imghh{
				width: 100%;
			}
			.foot{
			    padding: 20px 0 10px 2%;
				box-sizing: border-box;
				background: #1c1c20;
				button{
					font-size: 0.16rem;
					width: 98%;
					border: none;
					background: #009fe8;
					height: 0.45rem;
					border-radius: 10px;
					color: white;
				}
			}
		}
		
	}
	
</style>