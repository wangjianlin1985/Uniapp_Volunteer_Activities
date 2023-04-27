<template>
	<view class="uni-padding-wrap">
		<view class="header">
			<view class="headerb">
        				<swiper :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255,255,255,1)","borderRadius":"20rpx","borderWidth":"0","width":"100%","borderStyle":"solid","height":"300rpx"}' class="swiper" :indicator-dots='".swiper-pagination"==null?false:true' :autoplay='autoplaySwiper' :circular='true' indicator-active-color='rgba(206, 34, 27, 1)' indicator-color='rgba(0, 0, 0, .3)' :duration='1000' :interval='intervalSwiper' :vertical='"horizontal"=="horizontal"?false:true'>
					<swiper-item :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255,255,255,1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"300rpx"}' v-for="(swiper,index) in swiperList" :key="index" @tap="onSwiperTap(swiper)">
						<image :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255,255,255,1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"300rpx"}' mode="aspectFill" :src="baseUrl+swiper.img"></image>
            <view v-if="false" :style='{"padding":"0 8rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(255,255,255,1)","color":"#333","textAlign":"center","isshow":false,"borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"60rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{ swiper.title }}</view>
					</swiper-item>
				</swiper>
                        			</view>
		</view>

		<!-- menu -->
				<view v-if="true" class="menu" style="display: flex;flex-wrap: wrap;" :style='{"padding":"0 8rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(228, 228, 228, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
            <block v-for="item in menuList" v-bind:key="item.roleName">
                <block v-if="role==item.roleName" v-bind:key="index" v-for=" (menu,index) in item.frontMenu">
                    <block v-bind:key="sort" v-for=" (child,sort) in menu.child">
                        <block v-bind:key="sort2" v-for=" (button,sort2) in child.buttons">
                            <view :style='{"padding":"12rpx 0","boxShadow":"0 12rpx 0px #CE221B","margin":"10rpx 1%","borderColor":"rgba(230, 177, 90, 1)","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"40rpx 4rpx","borderWidth":"4rpx","width":"18%","borderStyle":"solid","height":"auto"}' class="menu-list" v-if="button=='查看' && child.tableName!='yifahuodingdan' && child.tableName!='yituikuandingdan' &&child.tableName!='yiquxiaodingdan' && child.tableName!='weizhifudingdan' && child.tableName!='yizhifudingdan' && child.tableName!='yiwanchengdingdan' " @tap="onPageTap2('../'+child.tableName+'/list')">
                                <!-- <image style="display: block;" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0px auto","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(206, 34, 27, 1)","borderRadius":"100%","borderWidth":"0","width":"64rpx","fontSize":"64rpx","borderStyle":"solid","height":"64rpx"}' mode="aspectFill" src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg"></image> -->
                                <view class="iconarr" :class="child.appFrontIcon" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0px auto","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(206, 34, 27, 1)","borderRadius":"100%","borderWidth":"0","width":"64rpx","fontSize":"64rpx","borderStyle":"solid","height":"64rpx"}'></view>
                                <view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"12rpx auto 0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(0, 0, 0, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"100%","lineHeight":"28rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{child.menu.split("列表")[0]}}</view>
                            </view>
                        </block>
                    </block>
                </block>
            </block>
		</view>
				
		<!-- menu -->

		<!-- 商品推荐 -->
				    		    		    		    		    		    		    		    		    		    		        <!-- 商品推荐 -->

    <!-- 新闻资讯 -->
                                                                                            <view class="listBox news">
      <view v-if="true && 1 == 1" class="idea newsIdea" :style='{"padding":"20rpx 10rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"20rpx 0","borderColor":"#ccc","borderRadius":"0","borderWidth":"0","background":"transparent url(http://codegen.caihongy.cn/20220226/07e3f84b66d741c3aa82d55ebb9541cf.png) no-repeat bottom","width":"100%","borderStyle":"solid","height":"auto"}'>
      	<view class="box box1"></view>
      	<view class="box box2"></view>
      	<view class="box box3"></view>
      	<view class="box box4"></view>
      </view>
      <view class="title" :style='{"padding":"0 24rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"-108rpx 0 20rpx 0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(0, 186, 189, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
        <view :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(0, 0, 0, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"50%","fontSize":"32rpx","lineHeight":"80rpx","borderStyle":"solid"}'>党建动态</view>
        <text :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(0,0,0,0)","backgroundColor":"rgba(0,0,0,0)","color":"rgba(0, 0, 0, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"50%","lineHeight":"80rpx","fontSize":"32rpx","borderStyle":"solid"}' @tap="onPageTap('news')">查看更多</text>
      </view>
      <view v-if="true && 1 == 2" class="idea newsIdea" :style='{"padding":"20rpx 10rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"20rpx 0","borderColor":"#ccc","borderRadius":"0","borderWidth":"0","background":"transparent url(http://codegen.caihongy.cn/20220226/07e3f84b66d741c3aa82d55ebb9541cf.png) no-repeat bottom","width":"100%","borderStyle":"solid","height":"auto"}'>
      	<view class="box box1"></view>
      	<view class="box box2"></view>
      	<view class="box box3"></view>
      	<view class="box box4"></view>
      </view>
                  	  <!-- 样式4 -->
	  	  <!-- 样式5 -->
	  	  <!-- 样式6 -->
	  	  <view class="news-box3" :style='{"padding":"20rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"0 0 20rpx","borderColor":"red","backgroundColor":"rgba(228, 228, 228, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
	    <view @tap="onNewsDetailTap(item.id)" v-for="(item,index) in news" :key="index" class="list-item" :style='{"padding":"8rpx 20rpx","boxShadow":"0 10rpx 0px #CE221B","margin":"0 0 20rpx","borderColor":"rgba(230, 177, 90, 1)","backgroundColor":"rgba(255,255,255,1)","borderRadius":"20rpx","borderWidth":"4rpx","width":"100%","borderStyle":"solid","height":"auto"}' style="display: flex;align-items: center;">
	      <view :style='{"padding":"0","boxShadow":"0px 0 0px rgba(153,153,153,1)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(206, 34, 27, 1)","borderRadius":"50%","borderWidth":"0","width":"16rpx","borderStyle":"solid","height":"16rpx"}' class="dian"></view>
	      <view :style='{"padding":"0 20rpx","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"calc(100% - 40rpx)","lineHeight":"72rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title hide1">{{item.title}}</view>
	      <view class="cuIcon-right" :style='{"padding":"0","boxShadow":"0 0 12rpx rgba(255,0,0,0)","margin":"0","borderColor":"red","backgroundColor":"rgba(255,0,0,0)","color":"rgba(161, 161, 161, 1)","borderRadius":"0","borderWidth":"0","width":"32rpx","lineHeight":"72rpx","fontSize":"32rpx","borderStyle":"solid"}'></view>
	    </view>
	  </view>
	  	  <!-- 样式7 -->
	  	  <!-- 样式8 -->
	  	  <!-- 样式9 -->
	        <view v-if="true && 1 == 3" class="idea newsIdea" :style='{"padding":"20rpx 10rpx","boxShadow":"0 0 12rpx rgba(0,0,0,0)","margin":"20rpx 0","borderColor":"#ccc","borderRadius":"0","borderWidth":"0","background":"transparent url(http://codegen.caihongy.cn/20220226/07e3f84b66d741c3aa82d55ebb9541cf.png) no-repeat bottom","width":"100%","borderStyle":"solid","height":"auto"}'>
      	<view class="box box1"></view>
      	<view class="box box2"></view>
      	<view class="box box3"></view>
      	<view class="box box4"></view>
      </view>
    </view>
            <!-- 新闻资讯 -->

	<!-- 商品列表 -->
																								<!-- 商品列表 -->

	</view>
</template>

<script>
    import menu from '@/utils/menu'
	import '@/assets/css/global-restaurant.css'
	import uniIcons from "@/components/uni-ui/lib/uni-icons/uni-icons.vue"
	export default {
		components: {
			uniIcons
		},
		data() {
			return {
				rows: 2,
				column: 5,
				iconArr: [
				  'cuIcon-same',
				  'cuIcon-deliver',
				  'cuIcon-evaluate',
				  'cuIcon-shop',
				  'cuIcon-ticket',
				  'cuIcon-cascades',
				  'cuIcon-discover',
				  'cuIcon-question',
				  'cuIcon-pic',
				  'cuIcon-filter',
				  'cuIcon-footprint',
				  'cuIcon-pulldown',
				  'cuIcon-pullup',
				  'cuIcon-moreandroid',
				  'cuIcon-refund',
				  'cuIcon-qrcode',
				  'cuIcon-remind',
				  'cuIcon-profile',
				  'cuIcon-home',
				  'cuIcon-message',
				  'cuIcon-link',
				  'cuIcon-lock',
				  'cuIcon-unlock',
				  'cuIcon-vip',
				  'cuIcon-weibo',
				  'cuIcon-activity',
				  'cuIcon-friendadd',
				  'cuIcon-friendfamous',
				  'cuIcon-friend',
				  'cuIcon-goods',
				  'cuIcon-selection'
				],
                role : '',
                menuList: [],
                swiperMenuList:[],
                user: {},
                tableName:'',

				autoplaySwiper: {"delay":5000,"disableOnInteraction":false} ? true : false,
				intervalSwiper: {"delay":5000,"disableOnInteraction":false} ? 5000 : 5000,
				//轮播
				swiperList: [],
				news: [],
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
        async onLoad(){
            this.role = uni.getStorageSync("role");
            let table = uni.getStorageSync("nowTable");
            let res = await this.$api.session(table);
            this.user = res.data;
            this.tableName = table;
            let menus = menu.list();
            this.menuList = menus;
            this.menuList.forEach((item,key) => {
                if(this.role==item.roleName) {
                    item.frontMenu.forEach((item2,key2) => {
                        if(item2.child[0].buttons.indexOf("查看")>-1) {
                            this.swiperMenuList.push(item2);
                        }
                    })
                }
            })
        },
		async onShow() {
			// 轮播图
			let swiperList = []
			let res = await this.$api.page('config', {
				page: 1,
				limit: 5
			});
			for (let item of res.data.list) {
				if (item.name.indexOf('picture') >= 0 && item.value && item.value!="" && item.value!=null ) {
					swiperList.push({
						img: item.value,
            title: item.name
					});
				}
			}
			if (swiperList) {
				this.swiperList = swiperList;
			}
			// 党建动态
			res = await this.$api.list('news', {
				page: 1,
				limit: 6
			});
			this.news = res.data.list


		},

		methods: {

			//轮播图跳转
			onSwiperTap(e) {

			},
			// 新闻详情
			onNewsDetailTap(id) {
				this.$utils.jump(`../news-detail/news-detail?id=${id}`)
			},
			// 推荐列表点击详情
			onDetailTap(tableName, id) {
				this.$utils.jump(`../${tableName}/detail?id=${id}`)
			},
			onPageTap(tableName){

				uni.navigateTo({
					url: `../${tableName}/list`,
					fail: function(){
						uni.switchTab({
							url: `../${tableName}/list`
						});
					}
				});
				// this.$utils.jump(`../${tableName}/list`)
			},
            onPageTap2(url) {
                uni.setStorageSync("useridTag",0);
                uni.navigateTo({
                    url: url,
                    fail: function() {
                        uni.switchTab({
                            url: url
                        });
                    }
                });
            }
		}
	}
</script>

<style>
	page {
		background: #F8F8F8;
	}

	.uni-padding-wrap:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}
	view {
		// font-family: '\5FAE\8F6F\96C5\9ED1';
		font-size: 30upx;
	}

	.header {
		background: #EEEEEE;
		padding: 0 0 300upx 0;
		margin-bottom: 20upx;
		position: relative;
	}

	.ssbox {
		background: rgba(255, 255, 255, 0.35);
		width: 530upx;
		border-radius: 60rpx;
		padding: 10upx 15upx;
		box-sizing: border-box;
	}

	.ss_input {
		border: none;
		width: 450upx;
		font-size: 30upx;
		color: #fff;
		background: none;
		height: 45upx;
		line-break: 45upx;
	}

	.headerb {
		position: absolute;
		left: 0;
		width: 100%;
		box-sizing: border-box;
	}

	.headerb image {
		width: 100%;
		position: relative;
		z-index: 10;
	}

	.headerb .swiper {
		height: 300upx;
	}

		.swiper /deep/ .uni-swiper-dot {
		width: 16rpx;
		height: 16rpx;
		broder-radius: 50%;
	}
	
	.notice {
		position: relative;
		z-index: 5;
		padding: 0 50upx;
	}

	.noticem {
		background: #fff;
		padding: 55upx 30upx 15upx;
		border-radius: 10upx;
		margin-top: -45upx;
	}

	.noticer {
		width: 480upx;
		height: 50upx;
	}

	.noticer .swiper-item {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		height: 50upx;
		line-height: 50upx;
		font-size: 24upx;
	}

	.list {
		padding: 20upx 20upx 20upx;
	}

	.listm {
		background: #fff;
		border-radius: 15upx;
		box-shadow: 0 0 2upx rgba(0, 0, 0, 0.1);
		margin-bottom: 20upx;
		padding: 30upx;
	}

	.listmpic {
		border-radius: 10upx;
		width: 166upx;
		margin-right: 20upx;
	}

	.listmr {
		// width: 460upx;
		display: inline-block;
		flex: 1;
		display: flex;
		justify-content: space-between;
		flex-direction: column;
	}

	/* #ifdef MP-WEIXIN */
	.noticer .swiper-item {
		margin-top: 5upx;
	}

	/* #endif */
	/* #ifdef MP-BAIDU */
	.noticer .swiper-item {
		margin-top: 3upx;
	}

	/* #endif */
	/* #ifdef MP-ALIPAY */
	.noticer .swiper-item {
		margin-top: 2upx;
	}

	/* #endif */
	/* #ifdef MP-QQ */
	.noticer .swiper-item {
		margin-top: 4upx;
	}

	/* #endif */
	/* #ifdef MP-TOUTIAO */
	.noticer .swiper-item {
		margin-top: 4upx;
	}

	/* #endif */

	.uni-product-list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		flex-direction: row;
		margin-top: 0;
		padding: 0 14upx;
		box-sizing: border-box;
	}

	.uni-product-list.active {
		padding: 0 12upx;
	}

	.uni-product {
		padding: 10upx;
		margin: 10upx;
		width: 341upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
	}

	.uni-product-list.active .uni-product {
		width: 222upx;
	}

	.image-view {
		height: 321upx;
		width: 321upx;
		// margin: 12upx 0;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.uni-product-list.active .image-view {
		height: 202upx;
		width: 202upx;
		overflow: hidden;
	}

	.uni-product-image {
		height: 100%;
		width: 100%;
		margin: 0 auto;
		display: block;
	}

	.uni-product-title {
		width: 100%;
		word-break: break-all;
		display: -webkit-box;
		overflow: hidden;
		line-height: 1.5;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
	}

	.uni-product-price {
		width: 100%;
		margin-top: 10upx;
		font-size: 28upx;
		line-height: 1.5;
		position: relative;
	}

	.uni-product-price-original {
		color: #e80080;
	}

	.uni-product-price-favour {
		color: #888888;
		text-decoration: line-through;
		margin-left: 10upx;
	}

	.uni-product-tip {
		position: absolute;
		right: 10upx;
		background-color: #ff3333;
		color: #ffffff;
		padding: 0 10upx;
		border-radius: 5upx;
	}

	.header-title {
		display: flex;
		align-items: center;
		text-align: center;
		justify-content: space-between;
		padding: 0 40upx;
	}

	.listBox>.title {
		display: flex;
		flex-wrap: wrap;
	}
	.listBox .list-box .box{
		position: relative;
	}
	.listBox .list-box .box .title{
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 1;
	}
	.listBox .style1 {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.listBox .style2 {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.listBox .style3 .list-item {
		display: flex;
	}

	.listBox .style4 .list-item {
		display: flex;
		flex-wrap: wrap;
	}

	.listBox .style6 .list-item {
		display: flex;
		flex-wrap: wrap;
	}

	.listBox .style6 .list-item .list-item-body {
		display: flex;
		flex-wrap: wrap;
	}

	.listBox .style7 .list-item {
		display: flex;
		flex-wrap: wrap;
	}

	.listBox .style8 .list-item {
		display: flex;
		flex-wrap: wrap;
	}

	.listBox .style9 .list-item {
		display: flex;
		flex-wrap: wrap;
	}

  .listBox .idea {
    display: flex;
    flex-wrap: wrap;
  }
  .listBox .idea .box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .listBox .recommendIdea .box1 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .recommendIdea .box2 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .recommendIdea .box3 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .recommendIdea .box4 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }

  .listBox .listIdea .box4 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .listIdea .box1 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .listIdea .box2 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .listIdea .box3 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }

  .listBox .newsIdea .box1 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .newsIdea .box2 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .newsIdea .box3 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .listBox .newsIdea .box4 {
  	margin: 0 2%;
  	padding: 0;
  	width: 0;
  	height: 160rpx;
  	font-size: 28rpx;
  	color: #FFF;
  	border-radius: 0;
  	border-width: 0;
  	border-style: solid;
  	border-color: #ccc;
  	background-color: rgba(0,0,0,.3);
  	  	box-shadow: 0 0 12rpx rgba(0,0,0,0);
  }
  .iconarr {
	  text-align: center;
	  line-height: 64rpx;
  }
  .news-box6 .dian::before {
    content: "";
    display: block;
    width: 8upx;
    height: 8upx;
    background-color: red;
    position: absolute;
    top: -4upx;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 100%;
    z-index: 1;
  }
  .hide1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .hide2 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .hide4 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }
</style>
