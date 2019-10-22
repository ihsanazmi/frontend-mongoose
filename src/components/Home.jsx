import React, { Component } from 'react'
import axios from '../config/axios'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Fade from 'react-reveal/Fade'
import TransitionGroup from 'react-transition-group/TransitionGroup'

class Home extends Component {

    state={
        task: [],
        button: true
    }

    onDoubleClick = (_id)=>{
        axios.delete(`/task/delete/${_id}`)
            .then(res=>{
                alert('berhasil dihapus')
                this.getTask()
            })
    }

    componentDidMount(){
        this.getTask()
    }

    onSubmit = ()=>{
        // get data
        let userid = this.props._id
        let description = this.task.value

        axios.post(`/task/${userid}`,
            {
                description
            }
        ).then(res=>{
           alert('Task Berhasil di tambah')
        }).catch(err=>{
            console.log({err})
        })
    }

    getTask = ()=>{
        let userid = this.props._id

        axios.get(`/task/${userid}`,)
            .then(res=>{
                this.setState({
                    task : res.data
                })
            })
    }

    done = (_id, completed)=>{
        axios.patch(`/task/${_id}`,{
            completed: !completed
        }).then(res=>{
            this.getTask()
        }).catch(err=>{
            console.log(err)
        })
    }

    renderTask = ()=>{
        return this.state.task.map((item)=>{
            if(item.completed){
                return (
                    <div className="card" onDoubleClick={()=>{this.onDoubleClick(item._id)}}>
                        <div className="card-body row">
                            <div className="col-auto mr-auto align-self-center">
                                <p className="my-auto"><del>{item.description}</del></p>
                            </div>
                            <div className="col-auto">
                                
                                <button onClick={()=>{this.done(item._id, item.completed)}} className='btn btn-outline-danger'>Cancel</button>
                            </div>
                        </div>
                    </div>
                )
            }else{
                return (
                    <div className="card" onDoubleClick={()=>{this.onDoubleClick(item._id)}}>
                        <div className="card-body row">
                            <div className="col-auto mr-auto align-self-center">
                                <p className="my-auto">{item.description}</p>
                            </div>
                            <div className="col-auto">
                                
                                <button onClick={()=>{this.done(item._id, item.completed)}} className='btn btn-outline-primary'>Done</button>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    render() {
        return (
            <div className="container">
                <center className="col-12">
                    <h1 className="display-4">List Task</h1>

                    {this.renderTask()}
                    
                    <form className="form-group mt-5">
                        <input ref={(input)=> this.task = input} type="text" className="form-control" placeholder="What do you want to do?"/>
                    </form>
                    <button type="submit" onClick={this.onSubmit} className="btn btn-primary btn-block">Up!</button>
                    
                </center>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        _id: state.auth._id
    }
}

export default connect(mapStateToProps, {})(Home)
