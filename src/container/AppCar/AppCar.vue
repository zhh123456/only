<template>
<div class="car">
	<div class="app-car-header">
		<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
		<img class="car-img" src="http://m.only.cn/css/res/logo-title_03.png" alt="">
		<p @click="back" class="back">返回</p>
	</div>
	<div class="app-car">
		
		<div v-for="good in pureCar" :key="good.goodid" class="car-list">
			<img :src="'http://cdn.bestseller.com.cn'+good.img" alt="">
			<p class="span1">{{good.name}} </p>
			<p class="span2">￥{{good.price}}</p>
			<div class="num">
				<div>
					<p @click="reduceGood(good.goodid)">-</p><p>{{good.num}}</p><p @click="addGood({goodid:good.goodid,name:good.name,price:good.price})">+</p>
				</div>
				<p class="remove" @click="remove(good.goodid)">删除商品</p>
			</div>
			
		</div>
		
	</div>
	<div class="price-num">
		<p>总数：{{all_price_num.num}}</p>
		<p>总价：{{all_price_num.price.toFixed(2)}}</p>
	</div>
</div>
	
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
	export default{
		name:'AppCar',
		methods:{
			back(){
				this.$router.go(-1)
			},
			...mapMutations(['addGood','reduceGood','remove'])
		},
		computed:{
			...mapState(['car']),
			...mapGetters(['pureCar','all_price_num'])
		},
		mouted(){
			console.log(this.$store.car.pureCar)
		}
		
	}
</script>
<style scoped lang="scss">
.car{
	display: flex;
	justify-content: space-between;
	flex-direction:column;
	.app-car-header{
		height: 0.46rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFF;
		box-shadow: 0 0 10px #BABABA;
		padding:0 15px;
		position:fixed;
		top:0;
		left:0;
		width:100%;
		.car-img{
			width: 1rem;
   			height: 0.2rem;
		}
	}
}
	.app-car{
		padding: 0.46rem 0;
		flex: 1;
		overflow: auto;
		height: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		.car-list{
			padding: 5px 0;
			width: 50%;
			text-align: center;
			.span1{
				color: #848484;
				font-size: 0.1rem;
			}
			.span2{
				font-size: 0.1rem;
			}
			img{
				width: 100%;
				height: 3.3rem;
			}
			.num{
				margin-top: 10px;
				display: flex;
				justify-content: space-between;
				height: 0.3rem;
				align-items: center;
				padding: 0 10px;
				div{
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 0.7rem;
					height: 0.3rem;
					border:1px solid #000000;
					p{
						height: 0.3rem;
						line-height: 0.3rem;
						width: 33%;
						text-align: center;
					}
					p:nth-child(2){
						border-left: 1px solid #000000;
						border-right: 1px solid #000000;
					}
				}
				.remove{
					width: 0.7rem;
					height: 0.3rem;
					font-size: 0.1rem;
					line-height: 0.3rem;
					border: 1px solid #000000;
					text-align: center;
				}
			}
		}
	}
	.price-num{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #FFFFFF;
		z-index: 10000;
		height: 0.46rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-top: 1px solid #000000;
		border-bottom: 1px solid #000000;
	}
</style>