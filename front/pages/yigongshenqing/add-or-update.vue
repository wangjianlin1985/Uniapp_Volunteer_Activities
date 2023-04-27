<template>
	<view class="content">
		<form class="app-update-pv">
			 
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">活动名称</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(206, 34, 27, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.huodongmingcheng" v-model="ruleForm.huodongmingcheng" placeholder="活动名称"></input>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="huodongtupianTap">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">活动图片</view>
				<view class="right-input" style="padding:0">
					<image :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","borderRadius":"100%","borderWidth":"0","width":"88rpx","borderStyle":"solid","height":"88rpx"}' class="avator" v-if="ruleForm.huodongtupian" :src="baseUrl+ruleForm.huodongtupian" mode="aspectFill"></image>
					<image :style='{"padding":"0","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","borderRadius":"100%","borderWidth":"0","width":"88rpx","borderStyle":"solid","height":"88rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">类型</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(206, 34, 27, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.leixing" v-model="ruleForm.leixing" placeholder="类型"></input>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">活动地址</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(206, 34, 27, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.huodongdizhi" v-model="ruleForm.huodongdizhi" placeholder="活动地址"></input>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">活动日期</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(206, 34, 27, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.huodongriqi" v-model="ruleForm.huodongriqi" placeholder="活动日期"></input>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">人数</view>
				<picker @change="renshuChange" :value="renshuIndex"  :range="renshuOptions">
					<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(206, 34, 27, 1)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","lineHeight":"60rpx","fontSize":"28rpx","borderStyle":"solid"}' class="uni-input">{{ruleForm.renshu?ruleForm.renshu:"请选择人数"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">账号</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(206, 34, 27, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.zhanghao" v-model="ruleForm.zhanghao" placeholder="账号"></input>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">姓名</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(206, 34, 27, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.xingming" v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","margin":"0 0 20rpx 0","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">手机号码</view>
				<input :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(206, 34, 27, 1)","backgroundColor":"rgba(255, 255, 255, 0)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"60rpx"}' :disabled="ro.shoujihaoma" v-model="ruleForm.shoujihaoma" placeholder="手机号码"></input>
			</view>
			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">申请日期</view>
				<picker mode="date" :value="ruleForm.shenqingriqi" @change="shenqingriqiChange">
					<view :style='{"padding":"0 30rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(206, 34, 27, 1)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"16rpx","borderWidth":"2rpx","width":"calc(100% - 160rpx)","lineHeight":"60rpx","fontSize":"28rpx","borderStyle":"solid"}' class="uni-input">{{ruleForm.shenqingriqi?ruleForm.shenqingriqi:"请选择申请日期"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"padding":"0 16rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"308rpx"}' class="cu-form-group">
				<view :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"rgba(161, 161, 161, 1)","textAlign":"center","borderRadius":"0","borderWidth":"0","width":"160rpx","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}' class="title">申请原因</view>
				<textarea :style='{"padding":"20rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(206, 34, 27, 1)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","borderWidth":"2rpx","width":"calc(100% - 160rpx)","fontSize":"28rpx","borderStyle":"solid","height":"280rpx"}' v-model="ruleForm.shenqingyuanyin" placeholder="申请原因"></textarea>
			</view>
			
			
			<view class="btn" >
				<button :style='{"padding":"0","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"0 auto","backgroundColor":"rgba(206, 34, 27, 1)","borderColor":"#409EFF","borderRadius":"60rpx","color":"#fff","borderWidth":"0","width":"60%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				huodongmingcheng: '',
				huodongtupian: '',
				leixing: '',
				huodongdizhi: '',
				huodongriqi: '',
				renshu: '',
				zhanghao: '',
				xingming: '',
				shoujihaoma: '',
				shenqingyuanyin: '',
				shenqingriqi: '',
				crossuserid: '',
				crossrefid: '',
				sfsh: '',
				shhf: '',
				userid: '',
				},
				renshuOptions: [],
				renshuIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   huodongmingcheng : false,
                                   huodongtupian : false,
                                   leixing : false,
                                   huodongdizhi : false,
                                   huodongriqi : false,
                                   renshu : false,
                                   zhanghao : false,
                                   xingming : false,
                                   shoujihaoma : false,
                                   shenqingyuanyin : false,
                                   shenqingriqi : false,
                                   crossuserid : false,
                                   crossrefid : false,
                                   sfsh : false,
                                   shhf : false,
                                   userid : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},



		},
		async onLoad(options) {
    		        this.ruleForm.shenqingriqi = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.zhanghao = this.user.zhanghao
			this.ro.zhanghao = true;
			this.ruleForm.xingming = this.user.xingming
			this.ro.xingming = true;
			this.ruleForm.shoujihaoma = this.user.shoujihaoma
			this.ro.shoujihaoma = true;


			// 自定义下拉框值
			this.renshuOptions = "1".split(',')

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`yigongshenqing`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='huodongmingcheng'){
					this.ruleForm.huodongmingcheng = obj[o];
					this.ro.huodongmingcheng = true;
					continue;
					}
					if(o=='huodongtupian'){
					this.ruleForm.huodongtupian = obj[o];
					this.ro.huodongtupian = true;
					continue;
					}
					if(o=='leixing'){
					this.ruleForm.leixing = obj[o];
					this.ro.leixing = true;
					continue;
					}
					if(o=='huodongdizhi'){
					this.ruleForm.huodongdizhi = obj[o];
					this.ro.huodongdizhi = true;
					continue;
					}
					if(o=='huodongriqi'){
					this.ruleForm.huodongriqi = obj[o];
					this.ro.huodongriqi = true;
					continue;
					}
					if(o=='renshu'){
					this.ruleForm.renshu = obj[o];
					this.ro.renshu = true;
					continue;
					}
					if(o=='zhanghao'){
					this.ruleForm.zhanghao = obj[o];
					this.ro.zhanghao = true;
					continue;
					}
					if(o=='xingming'){
					this.ruleForm.xingming = obj[o];
					this.ro.xingming = true;
					continue;
					}
					if(o=='shoujihaoma'){
					this.ruleForm.shoujihaoma = obj[o];
					this.ro.shoujihaoma = true;
					continue;
					}
					if(o=='shenqingyuanyin'){
					this.ruleForm.shenqingyuanyin = obj[o];
					this.ro.shenqingyuanyin = true;
					continue;
					}
					if(o=='shenqingriqi'){
					this.ruleForm.shenqingriqi = obj[o];
					this.ro.shenqingriqi = true;
					continue;
					}
					if(o=='crossuserid'){
					this.ruleForm.crossuserid = obj[o];
					this.ro.crossuserid = true;
					continue;
					}
					if(o=='crossrefid'){
					this.ruleForm.crossrefid = obj[o];
					this.ro.crossrefid = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
				}
            this.ruleForm.renshu = 0;
            this.ro.renshu = false;
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			shenqingriqiChange(e) {
				this.ruleForm.shenqingriqi = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			renshuChange(e) {
				this.renshuIndex = e.target.value
				this.ruleForm.renshu = this.renshuOptions[this.renshuIndex]
			},

			huodongtupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.huodongtupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {

































//跨表计算判断
				var obj = uni.getStorageSync('crossObj');
				var table = uni.getStorageSync('crossTable');
				obj.renshu = obj.renshu - this.ruleForm.renshu
				if(obj.renshu<0){
					this.$utils.msg("人数数量不足");
					return
				}
				if((!this.ruleForm.renshu)){
					this.$utils.msg(`人数不能为空`);
					return
				}
				if(this.ruleForm.renshu&&(!this.$validate.isIntNumer(this.ruleForm.renshu))){
					this.$utils.msg(`人数应输入整数`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
						var obj = uni.getStorageSync('crossObj');
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`yigongshenqing`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
                        var obj = uni.getStorageSync('crossObj');
                        var table = uni.getStorageSync('crossTable');
                        obj.renshu = parseFloat(obj.renshu) - parseFloat(this.ruleForm.renshu)
                        await this.$api.update(`${table}`, obj);
						if(this.ruleForm.id){
							await this.$api.update(`yigongshenqing`, this.ruleForm);
						}else{
							await this.$api.add(`yigongshenqing`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
                    var obj = uni.getStorageSync('crossObj');
                    var table = uni.getStorageSync('crossTable');
                    obj.renshu = obj.renshu - this.ruleForm.renshu
                    await this.$api.update(`${table}`, obj);
					if(this.ruleForm.id){
						await this.$api.update(`yigongshenqing`, this.ruleForm);
					}else{
						await this.$api.add(`yigongshenqing`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-image: url(http://codegen.caihongy.cn/20220226/4d50c1cb529f4b34a7ecf054f97ae8f1.png);
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 60rpx;
	}
	
	.select .uni-input {
		line-height: 60rpx;
	}
	
	.input .right-input {
		line-height: 60rpx;
	}
</style>
