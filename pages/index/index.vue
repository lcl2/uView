<template>
	<view>
		<u-swiper :list="slides" name="img_url" height="320rpx"></u-swiper>
		<view>
			<u-tabs :list="sortList" bar-width="100%" :is-scroll="false" :current="currentSort" @change="changeSort"></u-tabs>
		</view>
		<view class="u-skeleton">
			<u-row gutter="16">
				<u-col span="6" v-for="item in goods.length !==0 ? goods : {}">
					<goods-card :item="item"></goods-card>
				</u-col>
			</u-row>
			<u-skeleton :loading="loading" :animation="true" bgColor="#FFF"></u-skeleton>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[
					'https://cdn.uviewui.com/uview/swiper/1.jpg',
					'https://cdn.uviewui.com/uview/swiper/2.jpg',
					'https://cdn.uviewui.com/uview/swiper/3.jpg',
				],
				sortList:[
					{name:'默认'},
					{name:'销量'},
					{name:'推荐'},
					{name:'最新'},
				],
				currentSort: 0 ,
				goods:[],
				slides:[],
				page:1,
				loading: false,
				
			}
		},
		onLoad() {
			this.$u.utils.isLogin()
			
			this.getData()
			
		},
		methods: {
			changeSort(index){
				console.log(index)
				this.currentSort = index
				// console.log(index)
				// //重置商品数据
				this.goods = []
				this.getData()
			},
			//获取数据
			async getData() {
				//显示骨架屏
				this.loading = true
				const params = {
					page: this.page
				}
				if(this.currentSort == 1) params.sales = 1
				if(this.currentSort == 2) params.recommend = 1
				if(this.currentSort == 3) params.new = 1
				const res = await this.$u.api.index(params)
				this.loading = false
				this.goods = [...this.goods, ...res.goods.data]
				this.slides = res.slides
			}
		},
		onReachBottom() {
			this.page = this.page + 1;
			this.getData()
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
