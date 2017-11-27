import axios from 'axios'

import { Toast } from 'mint-ui';

export default {
	login({commit},params){
		//console.log(params)
		axios.get("http://datainfo.duapp.com/shopdata/userinfo.php",{params:params}).then((res)=>{
			//console.log(res)
			if(res.data.userID){
				Toast('登陆成功')
				commit('changeUserInfo',res.data)
				
			}else{
				Toast('登陆失败')
			}
		})
	}
}
