<template>
	<view>
		<view class="header-container">
			<view @tap="leaveTap" class="left-container">
				<image class="icon" src="../../static/center/l5.png" mode=""></image>
				<text>交卷</text>
			</view>
			<view class="center-container">
				倒计时：{{SecondToDate}}
			</view>
			<view class="right-container">
				题目： {{currentItem}}/{{list.length}}
			</view>
		</view>
		<view class="exam-container">
			<view class="title-container">
				<text v-if="item.type==0" class="type">
					单选题
				</text>
				<text v-if="item.type==1" class="type">
					多选题
				</text>
				<text v-if="item.type==2" class="type">
					判断题
				</text>
				<text v-if="item.type==3" class="type">
					填空题
				</text>
				<text class="title">
					{{item.questionname}}
				</text>
			</view>
			<view class="answer-container">
				<view class="tiankong-container" v-if="item.type==3">
					<text>填写答案：</text>
					<input v-model="answer" type="text" class="answer" value="" />
				</view>
				<view v-if="item.type==0 || item.type==2 " class="answer-item" v-for="(option,index) in item.options" v-bind:key="index">
					<checkbox @tap="itemCheckTap(option.checked,index)" :value="item.index" :checked="option.checked" />
					<text class="text">{{option.text}}</text>
				</view>
				<view v-if="item.type==1" class="answer-item" v-for="(option,index) in item.options" v-bind:key="index">
					<checkbox @tap="itemCheckTap(option.checked,index)" :value="item.index" :checked="option.checked" />
					<text class="text">{{option.text}}</text>
				</view>
				<button v-if="!isSubmit" @tap="submitTap" class="btn-submit" type="primary">提交答案</button>
				<button v-if="isSubmit&&currentItem<=list.length" @tap="nextTap" type="warn" class="btn-next">下一题</button>
			</view>
			<view v-if="isSubmit&&currentItem<=list.length" class="tip-container">
				<view class="par">
					答题结果：
					<text v-if="item.answer==answer" class="text-blue">正确</text>
					<text v-if="item.answer!=answer" class="text-red">错误</text>
				</view>
				<view class="par">
					本题答案：{{item.answer}}
				</view>
				<view class="par">
					您的答案是：{{answer}}
				</view>
				<view class="par">
					题目分析：{{item.analysis}}
				</view>
			</view>
			<!-- {{score}} -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 当前题目
				item: {},
				// 在线答题
				paper: {},
				// 是否提交
				isSubmit: false,
				// 填空题答案
				answer: '',
				// 当前题目
				currentItem: 1,
				// 总分
				score: 0,
				// 倒计时定时器
				inter: null,
				// 题目列表
				"list": [],
				// 用户
				user: {},
				// 倒计时
				count: 0
			}
		},
		async onLoad(options) {
			this.score = 0;
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.user = res.data;
			// 获取在线答题
			res = await this.$api.info('exampaper', options.id);
			this.paper = res.data;
			// 获取试题
			res = await this.$api.list(`examquestion`, {
				page: 1,
				limit: 999,
				sort: "sequence",
				paperid: options.id
			});
			this.list = res.data.list;
			// 开启定时 
			this.count = this.paper.time*60;
			if (this.count > 0) {
				var _this = this;
				this.inter = setInterval(function() {
					_this.count = _this.count - 1;
					if (_this.count < 0) {
						clearInterval(_this.inter);
						uni.showModal({
							title: '答题结束',
							content: '本次考试成绩：' + _this.score,
							showCancel: false,
							success: async function(res) {
								if (res.confirm) {
									uni.navigateBack({
										delta: 1
									})
								}
							}
						});
					}
				}, 1000);
			}
			for (let i = 0; i < this.list.length; i++) {
				let options = JSON.parse(this.list[i].options);
				for (let j = 0; j < options.length; j++) {
					options[j].checked = false;
				}
				this.list[i].options = options;
			}
			console.log(this.list);
			this.item = this.list[0]
		},
		destroyed: function() {
			clearInterval(this.inter);
		},
		computed: {
			SecondToDate: function() {
				var time = this.count;
				if (null != time && "" != time) {
					if (time > 60 && time < 60 * 60) {
						time =
							parseInt(time / 60.0) +
							"分钟" +
							parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) +
							"秒";
					} else if (time >= 60 * 60 && time < 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else if (time >= 60 * 60 * 24) {
						time =
							parseInt(time / 3600.0 / 24) +
							"天" +
							parseInt(
								(parseFloat(time / 3600.0 / 24) - parseInt(time / 3600.0 / 24)) *
								24
							) +
							"小时" +
							parseInt(
								(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
							) +
							"分钟" +
							parseInt(
								(parseFloat(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									) -
									parseInt(
										(parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60
									)) *
								60
							) +
							"秒";
					} else {
						time = parseInt(time) + "秒";
					}
				}
				return time;
			}
		},
		methods: {
			leaveTap() {
				let _this = this;
				uni.showModal({
					title: '提示',
					content: '确定离开考试?未答题目按0分计算',
					success: async function(res) {
						if (res.confirm) {
							_this.$utils.msgBack('本次考试成绩：' +
								_this.score);
						}
					}
				});
			},
			itemCheckTap(checked, index) {
				if (this.item.type == 0 || this.item.type == 2) {
					for (let i = 0; i < this.item.options.length; i++) {
						this.item.options[i].checked = false;
					}
				}
				this.item.options[index].checked = !checked;
				if (this.item.type == 1) {
					let answer = []
					for (let i = 0; i < this.item.options.length; i++) {
						if (this.item.options[i].checked) {
							answer.push(this.item.options[i].code)
						}
					}
					this.answer = answer.join(",");
				}
				if (this.item.type != 1) {
					this.answer = this.item.options[index].code;
				}
				console.log(checked, index, this.answer)
			},
			async submitTap() {
				if (this.item.type == 3 && !this.answer) {
					this.$utils.msg("请填写答案");
					return
				}
				let myscore = 0;
				if (this.answer == this.item.answer) {
					this.score =  Number(this.score) + Number(this.item.score);
					myscore = this.item.score;
				}
				// 保存答题记录
				let record = {
					userid: this.user.id,
					username: this.user.xingming,
					paperid: this.paper.id,
					papername: this.paper.name,
					questionid: this.item.id,
					questionname: this.item.questionname,
					options: JSON.stringify(this.item.options),
					score: this.item.score,
					answer: this.item.answer,
					analysis: this.item.analysis,
					myscore: myscore,
					myanswer: this.answer
				};
				await this.$api.add(`examrecord`, record);
				this.isSubmit = true;
				var _this = this;
				if (this.currentItem == this.list.length) {
					uni.showModal({
						title: '答题结束',
						content: '本次考试成绩：' + _this.score,
						showCancel: false,
						success: async function(res) {
							if (res.confirm) {
								uni.navigateBack({
									delta: 1
								})
							}
						}
					});
				}
			},
			nextTap() {
				this.isSubmit = false;
				this.currentItem = this.currentItem + 1
				this.item = this.list[this.currentItem - 1]
				this.answer = ""
			}
		}
	}
</script>

<style lang="scss" scoped>
	.header-container {
		display: flex;
		align-items: center;
		background: #FFFFFF;
		border-bottom: 1rpx solid #EEEEEE;
		border-top: 1rpx solid #EEEEEE;
		padding: 10rpx;

		.left-container {
			display: flex;
			align-items: center;
			margin: 10rpx;

			.icon {
				margin-right: 10rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}

		.center-container {
			flex: 1;
			text-align: center;
		}

		.right-container {
			margin: 10rpx;
		}
	}

	.exam-container {
		background: #FFFFFF;
		margin: 30rpx;
		border-radius: 20rpx;
		padding: 20rpx;

		.title-container {
			padding: 20rpx;

			.type {
				background: #EEEEEE;
				padding: 10rpx;
				border-radius: 10rpx;
			}

			.title {
				margin-left: 20rpx;
			}
		}

		.answer-item {
			margin: 20rpx;

			.text {
				margin-left: 20rpx;
			}
		}

		.tiankong-container {
			display: flex;
			align-items: center;
			margin: 20rpx;

			.answer {
				border: 1rpx solid #EEEEEE;
				height: 60rpx;
				margin: 0 20rpx;
			}
		}

		.btn-submit {
			height: 60rpx;
			font-size: 30rpx;
			line-height: 60rpx;
			margin-top: 60rpx;
			border-radius: 50rpx;
		}

		.btn-next {
			height: 60rpx;
			font-size: 30rpx;
			line-height: 60rpx;
			margin-top: 60rpx;
			border-radius: 50rpx;
		}
	}

	.tip-container {
		margin-top: 50rpx;
		border-top: 1rpx solid #EEEEEE;
		padding: 20rpx;

		.par {
			margin-bottom: 20rpx;
		}
	}
</style>
