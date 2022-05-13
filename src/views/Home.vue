<template>
	<div>
		<el-container>
			<el-header class="HomeHeader">
				<!-- <img src="../../dist/favicon.ico" /> -->
				<div class="title">
					<i>
						<img src="../assets/dangbiao.jpg" style="width: 35px;float: left;" />
					</i>
					党员管理系统
				</div>
				<el-dropdown class="userInfo" @command="commadHandler">
					<span class="el-dropdown-link">
						{{user.name}}
						<i>
							<img :src="user.userface" alt="">
						</i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
						<el-dropdown-item command="setting">设置</el-dropdown-item>
						<el-dropdown-item command="logout" divided>注销登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-header>
			<el-container>
				<el-aside width="200px"><!--default-active默认打开第二个菜单项  -->
					<el-menu 
					background-color="#8c240f" 
					text-color="#fff" 
					active-text-color="#ffd04b"
					router
					><!-- 展开/关闭指定的menu 		
					@open="handleOpen" 
					@close="handleClose"
					@select="menuClick"菜单激活回调-->
						<!-- 导航一 -->
						<el-submenu index="1" v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden" :key="index">
							<template slot="title"><!-- 图标 -->
								<i class="el-icon-search"></i>
								<span>{{item.name}}</span>
							</template>
							<el-menu-item-group>
								<!-- <template slot="title">分组一</template> -->
								<el-menu-item :index="child.path" v-for="(child,index) in item.children.slice(0,3)" :key="index">{{child.name}}</el-menu-item>
								<!-- <el-menu-item index="/test2">个人查询</el-menu-item> -->
							</el-menu-item-group>
						</el-submenu>
						
						
						<el-submenu index="2" v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden" :key="index">
							<template slot="title">
								<i class="el-icon-menu"></i>
								<span>发展申请</span>
							</template>
							<el-menu-item-group>
								<el-menu-item :index="child.path" v-for="(child,index) in item.children.slice(3,7)" :key="index">{{child.name}}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-submenu index="3" v-for="(item,index) in this.$router.options.routes" v-if="!item.hidden" :key="index">
							<template slot="title">
								<i class="el-icon-document"></i>
								<span>发展申请</span>
							</template>
							<el-menu-item-group>
								<el-menu-item :index="child.path" v-for="(child,index) in item.children.slice(8,10)" :key="index">{{child.name}}</el-menu-item>
							</el-menu-item-group>
						</el-submenu>
						<el-menu-item index="4">
							<i class="el-icon-more"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-aside>
			
				<el-main>
					 <router-view/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {},
		data() {
			return {
				// user:window.sessionStorage.getItem("user")字符串转换为对象好用
				user: JSON.parse(window.sessionStorage.getItem("user"))
			}
		},
		methods: {
			commadHandler(cmd) {
				if (cmd == "logout") {
					this.$confirm('此操作将注销登录, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						this.getRequest("/logout");
						window.sessionStorage.removeItem("user")
						this.$router.replace("/")
					}).catch(() => {
						this.$message({
							type: 'info',
							message: '已取消操作'
						});
					});
				}
			}
		}

	}
</script>

<style>
	li.el-menu-item{
		width: 199.01px;
	}
	.el-aside{
		overflow: hidden;
	}
	.HomeHeader {
		background-color: #C10001;
		display: flex;
		/* //https://blog.csdn.net/qq_27870421/article/details/111870504?msclkid=d4a79cd5d14911ecbc70f207ceb6deb8
						//display:flex 是一种布局方式。它即可以应用于容器中，也可以应用于行内元素。是W3C提出的一种新的方案，可以简便、完整、响应式地实现各种页面布局。 */
		align-items: center;
		/* 数轴居中 */
		justify-content: space-between;
		/* 均匀排列每个元素，首个元素放置于起点，末尾元素放置于终点。 */
		padding: 0 15px;
		box-sizing: border-box;
		/* 使padding在框的里面 */
	}

	.title {
		font-size: 30px;
		font-family: 华文行楷;
		color: #67C23A;
	}

	.HomeHeader .userInfo {
		cursor: pointer;
	}

	.el-dropdown-link img {
		width: 48px;
		height: 48px;
		border-radius: 24px;
	}

	.el-dropdown-link {
		display: flex;
		align-items: center;
	}
</style>
