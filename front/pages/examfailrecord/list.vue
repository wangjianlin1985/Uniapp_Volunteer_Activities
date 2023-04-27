<template>
	<mescroll-uni @init="mescrollInit" :up="upOption" :down="downOption" @down="downCallback" @up="upCallback">
		<view class="cu-list menu-avatar" v-for="(item,index) in list" v-bind:key="index">
			<view class="cu-item" style="height: 180rpx;">
				<view class="content" style="left: 20rpx;">
					<view class="text-grey">在线答题：{{item.papername}}</view>
					<view class="text-gray text-sm flex">
						试题：{{item.questionname}}
					</view>
					<view class="text-gray text-sm flex">
						答案：{{item.answer}}
					</view>
					<view class="text-gray text-sm flex">
						我的答案：{{item.myanswer}}
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">分数：{{item.score}}</view>
					<view v-if="item.myscore==0" class="cu-tag round bg-grey sm">得分{{item.myscore}}</view>
					<view v-if="item.myscore>0" class="cu-tag round bg-red sm">得分{{item.myscore}}</view>
				</view>
			</view>
		</view>
	</mescroll-uni>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				mescroll: null, //mescroll实例对象
				downOption: {
					auto: false //是否在初始化后,自动执行下拉回调callback; 默认true
				},
				upOption: {
					noMoreSize: 5, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					textNoMore: '~ 没有更多了 ~',
				},
				hasNext: true,
				searchForm: {},
				CustomBar: '0'
			};
		},
		onShow() {
			this.hasNext = true
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		onLoad(options) {
			this.hasNext = true
			this.userid = options.userid
			// 重新加载数据
			if (this.mescroll) this.mescroll.resetUpScroll()
		},
		methods: {
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll;
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				this.hasNext = true
				// 重置分页参数页数为1
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			async upCallback(mescroll) {
				let res = await this.$api.list(`examrecord`, {
					page: mescroll.num,
					limit: mescroll.size,
					userid: this.userid,
					sort: "id",
					myscore: 0,
				});
				// 如果是第一页数据置空
				if (mescroll.num == 1) this.list = [];
				this.list = this.list.concat(res.data.list);
				if (res.data.list.length == 0) this.hasNext = false;
				mescroll.endSuccess(mescroll.size, this.hasNext);
			}
		}
	};
</script>

<style>

</style>
