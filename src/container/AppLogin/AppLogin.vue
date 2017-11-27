<template>
	<div class="app-login">
		<div class="app-login-header">
			<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
			<span class="login">登录</span>
			<p @click="back" class="back">返回</p>
		</div>
		<div class="app-login-content">
			<form @submit.prevent="login({userID,password,status})">
				<div class="name">
					<div class="img1">
						<img src="http://m.only.cn/mvc/login_content/css/myImg/telephone.png"/>
					</div>
					<input v-model="userID" type="text" placeholder="请输入用户名" />
				</div>
				<div class="pass name">
					<div class="img1">
						<img src="http://m.only.cn/mvc/login_content/css/myImg/pwd.png"/>
					</div>
					<input v-model="password" type="password" placeholder="请输入密码" />
				</div>
				<button type="submit" class="submit" >登录</button>
			</form>
		</div>
	</div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
	export default{
		name:'AppMine',
		data(){
			return{
				status:'login',
				userID:'',
				password:''
			}
		},
		computed:{
			...mapState(['userInfo'])
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			...mapActions(['login'])
		},
		watch:{
			userInfo(){
				//console.log(this.userInfo)
				if(this.userInfo.userID){
					this.$router.replace('mine')
				}
			}
		}
	}
</script>
<style scoped lang="scss">
.app-login{
	background-color: #EEE;
	height: 100vh;
	display: flex;
	flex-direction: column;
	
	.app-login-header{
		height: 0.46rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #FFF;
	    
		box-shadow: 0 0 10px #BABABA;
		padding:0 15px;
		.login{
			font-size: 0.18rem;
			font-weight: bold;
		}
	}
	.app-login-content{
		form{
			padding: 0 10px;
			margin-top: 15%;
			.name{
				margin-bottom: 15px;
				background: #FFFFFF;
				width: 3.56rem;
				height: 0.5rem;
				border: 1px solid #BABABA;
				display: flex;
				justify-content: inherit;
				align-items: center;
				.img1{
					width: 0.29rem;
					height: 0.33rem;
					border-right:1px solid #BABABA;
					display:flex;
					justify-content:center;
					align-items: center;
					margin-right:10px;
					img{
						width: 0.13rem;
						height: 0.16rem;
					}
				}
				input{
					outline: none;
					border: none;
				}
			}
			.submit{
				margin-top: 30px;
				width: 100%;
				height: 0.45rem;
				line-height: 0.45rem;
				background: #000000;
				text-align: center;
				color: #FFFFFF;
				font-size: 0.2rem;
				border: none;
			}
		}
	}
}
	
</style>