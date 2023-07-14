<template>
	<navigator url="" class="goods-items">
		<u-image class="u-skeleton-fillet" width="100%" height="300rpx" :src="item.cover_url"></u-image>
		
		<view class="title u-line-1 u-skeleton-rect">{{item.title ? item.goods : '商品名称'}}</view>
		<view class="u-flex u-row-between ">
			<view class="price u-skeleton-rect">金额:{{item.price}}</view>
			<view class="sale u-skeleton-rect">销量:{{item.sales}}</view>
		</view>
	</navigator>
</template>

<script>
	export default {
		name:"goods-card",
		props: {
			item: {
				type: Object,
				default(){
					return{}
					}
				}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.goods-items{
		padding: 40rpx;
		margin-top: 30rpx;
		box-shadow: 0 12rpx 20rpx 0 rgba(0,0,0, .1);
		.title{
			margin: 20rpx 0;
			font-weight: 700;
			font-size: 32rpx;
		}
		.price{
			color: red;
			white-space: nowrap;
		}
		.sale{
			color: #888;
		}
		.u-skeleton-rect{
			width: 40%;
		}
	}

</style>