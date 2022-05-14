<template>
	<div class="body">
		<div class="Login">
			<el-form :rules="rules" ref="formName" :model="loginForm" class="loginContainer">
				<h3 class="loginTitle">登录系统</h3>
				<el-form-item prop="username">
					<el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="输入用户名吧">
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" v-model="loginForm.password" auto-complete="off"
						placeholder="输入password吧"></el-input>
				</el-form-item>
				<div>
					<el-checkbox v-model="checked" class="LoginRememberMe">记住我</el-checkbox>
				</div>
				<el-button type="primary" style="width: 100%;" @click="submitLogin">denglu</el-button>
			</el-form>
		</div>
	</div>
</template>

<script>
	// import {postKeyValueRequest} from '../utils/api'
	export default {
		name: 'Login',
		components: {

		},
		data() {
			return {
				loginForm: {
					username: 'admin',
					password: '123'
				},
				checked: true,
				rules: {
				 username: [{
						required: true,
						message: '请输入用户名',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			submitLogin() {
				this.$refs.formName.validate((valid) => {
					if (valid) {
						this.postKeyValueRequest('/doLogin', this.loginForm).then(resp => {
							if (resp) {
								window.sessionStorage.setItem("user", JSON.stringify(resp.obj));
								this.$router.replace("/Home");
								// alert(JSON.stringify(resp))
							}/* else(){
								
							}else(){
								
							} */
						})
					} else {
						this.$message({
							showClose: true,
							message: '请输入所有字段！',
							type: 'error'
						});
						return false;
					}
				});
			}
		}

	}
</script>

<style>
	.Login {
		background-image: url(../assets/R.jpg);
		/* 		background-size: contain;
		background-repeat: no-repeat;
		background-attachment:fixed;
		background-size: 100% 100%; */
		width: 100%;
		height: 100vh;
		margin: 0 auto;
		background-repeat: no-repeat;
		background-size: cover;
		overflow: auto;

		/* margin: 0px; */
	}

	.loginContainer {
		border-radius: 15px;
		border: 1px solid #ffff00;
		/* 卡片效果 */
		background-clip: padding-box;
		background-color: #cfda01;
		margin: 180px auto 180px 1000px;
		width: 350px;
		padding: 25px 25px 25px 25px;
		box-shadow: 0 0 25px #ffff7f;
	}

	.loginTitle {
		margin: 15px auto 40px auto;
	}

	.LoginRememberMe {
		text-align: left;
		margin: 0px 0px 15px 0px;
	}
</style>
