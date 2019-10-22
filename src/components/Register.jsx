import React, { Component } from 'react'
import axios from '../config/axios'

class Register extends Component {

    onSubmitClick = ()=>{
        let _username = this.username.value
        let _name = this.name.value
        let _age = this.age.value
        let _email = this.email.value
        let _password = this.password.value

        axios.post(
            '/users',
            {
                username: _username,
                name: _name,
                age: _age,
                email: _email,
                password: _password
            }
        ).then((res)=>{
            // alert('registrasi berhasil')
            if(res.data.error){
                return alert(res.data.error)
            }

            alert('register berhasil')

        }).catch(err =>{
            console.log({err})
        })
    }
    render() {
        return (
            <div className='col-6 mx-auto mt-5 card'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1>Register</h1>
                    </div>
                    <form className='form-group' >
                        <div className='card-title'>
                            <h4>Username</h4>
                        </div>
                        <input ref={ (asdf) => {this.username = asdf} } className='form-control' type='text'/>
                        <div className='card-title'>
                            <h4>Nama</h4>
                        </div>
                        <input ref={ (asdf) => {this.name = asdf} } className='form-control' type='text'/>
                        <div className='card-title'>
                            <h4>Umur</h4>
                        </div>
                        <input ref={ (asdf) => {this.age = asdf} } className='form-control' type='text'/>
                        <div className='card-title'>
                            <h4>Email</h4>
                        </div>
                        <input ref={ (input) => {this.email = input} } className='form-control' type='email'/>

                        <div className='card-title'>
                            <h4>Password</h4>
                        </div>
                        <input ref={ (input) => {this.password = input} } className='form-control' type='password'/>
                    </form>
                    <button onClick={this.onSubmitClick} className='btn btn-outline-primary btn-block'>Submit</button>
                </div>
            </div>
        )
    }
}

export default Register
