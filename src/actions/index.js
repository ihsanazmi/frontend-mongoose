import axios from 'axios'

export const sendData = (_email, _password)=>{

    return (dispatch)=>{
        axios.get(
            'https://bdg-mongoose-kumis.herokuapp.com/users/login',
            {
                params:{
                   email: _email,
                   password: _password
                }
            }
        ).then((res)=>{
            if(res.data.length === 0){
                alert('Tidak dapat login')
            }else{
                let {id, username, email} = res.data[0]
                localStorage.setItem('userData', JSON.stringify({id:id, username:username, email:email}))

                dispatch(
                    {
                        type: "LOGIN_SUCCESS",
                        payload: {
                            id: id,
                            username:username,
                            email: email
                        }
                    }
                )
            }
        })
    }
}

export const logOut = (_id, _email, _username)=>{
    return {
        type: "LOGOUT_SUCCESS"
    }
}

export const keepLogin = (userData)=>{
    return{
        type: "LOGIN_SUCCESS",
        payload: {
            id: userData.id,
            username: userData.username,
            email: userData.email
        }
    }
}