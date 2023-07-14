const install = (Vue, vm) => {
	
	
	//验证是否登录
	const isLogin = () =>{
		
		const token = vm.vuex_token
		if(!token){
			//获取当前来源页
			const currentPage = getCurrentPages().pop() 
			//获取当前路径和请求参数
			const {options, route} = currentPage
			const optionsKey = Object.keys(options)
			let parmas = ''
			if(optionsKey.length !== 0){
				parmas = optionsKey.reduce((pre, current) => {
					return `${pre}${current}=${options[current]}&`
				},'?').slice(0, -1)
			}
			
			//缓存当前页
			uni.setStorageSync('back_url', route + parmas)
			//登录之后回跳
			vm.$u.toast('请登录')
			setTimeout(() => {
				vm.$u.route({
					type:'redirect',
					url:'pages/auth/login',
				})
			},1500)
			return false
		}
		return true
	}
	
	vm.$u.utils = {
		isLogin
	}
}

export default {
	install
}