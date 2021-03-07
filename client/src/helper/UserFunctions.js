import axios from 'axios'
import ApiUrl from '../api/ApiUrl';

export const login = user => {
    return axios
        .post(
            ApiUrl.Login,
            JSON.stringify({
                email: user.email,
                password: user.password
            }),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
        )
        .then(response => {
        	if(response.data.status==='false'){
        		alert(response.data.message)
        	}else{
				localStorage.setItem('userlogin', response.data.userlogin)
				localStorage.setItem('user_id', response.data.user_id)
				return response.data.userlogin
        	}
        	

        })
        .catch(err => {
        	alert('Invalid Email or Password !')
        })
}


export const getProfile = user => {
    return axios
        .post(
            ApiUrl.Profile,
            JSON.stringify({
                user_id: user.user_id,
            }),
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }

        )        
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}