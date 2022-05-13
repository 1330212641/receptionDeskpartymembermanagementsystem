import axios from 'axios'
import {
	Message
} from 'element-ui';


axios.interceptors.response.use(success => {
	if (success.status && success.status == 200 && success.data.status == 500) {
		Message.error({
			message: success.data.msg
		})
		return;
	}
	if (success.data.msg) {
		Message.success({
			message: success.data.msg
		})
	}
	return success.data;
}, error => {
	if (error.response.status == 504 || error.response.status == 404) {
		Message.error({
			message: '服务器坏了了吧',
		})
	} else if (error.response.status == 403) {
		Message.error({
			message: '权限不足  出错'
		})
	} else if (error.response.status == 401) {
		Message.error({
			message: '未登录   出错'
		})
	} else {
		if (error.response.data.msg) {
			Message.error({
				message: error.response.data.msg
			})
		} else {
			Message.error({
				message: '未知出错'
			})
		}
	}
	return;
})

/* 封装请求 */
/* postKeyValueRequest 是我封装的通过 key/value 形式传递参数，postRequest 则是通过 JSON 形式传递参数。 */
let base = '';
export const postKeyValueRequest = (url, params) => {
	return axios({
		method: 'post',
		url: `${base}${url}`,
		data: params, //json形式  需要transformRequest方法转换为keyvalue形式//等同于qs的功能作用是将对象或者数组序列化成URL的格式
		transformRequest: [function(data) {
			let ret = '';
			for (let i in data) {
				ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&' //追加变量即可
			}
			// console.log(ret);
			return ret;
		}],
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
}
/* 传递json的post */
export const postRequest = (url, params) => {
	return axios({
		method: 'post',
		url: `${base}${url}`,
		data: params
	})
}
/* 传递json的put */
export const putRequest = (url, params) => {
	return axios({
		method: 'put',
		url: `${base}${url}`,
		data: params
	})
}
/* 传递json的get */
export const getRequest = (url, params) => {
	return get({
		method: 'put',
		url: `${base}${url}`,
		data: params
	})
}
/* 传递json的delete */
export const deleteRequest = (url, params) => {
	return axios({
		method: 'delete',
		url: `${base}${url}`,
		data: params
	})
}
