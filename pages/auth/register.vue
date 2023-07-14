<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">账号注册</view>
			<input class="u-border-bottom" v-model="name" placeholder="请输入昵称" />
			<input class="u-border-bottom" v-model="email" placeholder="请输入邮箱" />
			<input class="u-border-bottom" type="number" v-model="password" placeholder="请输入密码" />
			<input class="u-border-bottom" type="number" v-model="password_confirmation" placeholder="请确认密码" />
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">注册</button>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			name:'213',
			email: '13@a.com',
			password:'123123',
			password_confirmation:'123123'
		}
	},
	computed: {
		inputStyle() {
			let style = {};
			if(this.$u.test.email(this.email) && this.name && this.password && this.password_confirmation) {
				style.color = "#fff";
				style.backgroundColor = this.$u.color['warning'];
			}
			return style;
		}
	},
	methods: {
		async submit() {
			//1、表单验证
			if(this.password !== this.password_confirmation) {
				this.$u.toast('两次密码输入不一致')
				return
			}
			//22、准备提交参数
			const parmas = {
				name: this.name,
				email:this.email ,
				password:this.password,
				password_confirmation:this.password_confirmation
			}
			this.$u.toast('注册成功')
			//3、请求api，执行注册
			const res = await this.$u.api.register(parmas)
			console.log(res)
			setTimeout(() =>{
				this.$u.route('pages/auth/login')
			},1000)
		}
	}
};
</script>

<style lang="scss" scoped>
	.u-border-bottom{
		margin-top: 60rpx;
	}
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.tips {
			color: $u-type-info;
			margin-bottom: 60rpx;
			margin-top: 8rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			
			&::after {
				border: none;
			}
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
			
			.link {
				color: $u-type-warning;
			}
		}
	}
}
</style>
