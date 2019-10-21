import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

class Home extends Component {

    getTask = ()=>{
        let userid = this.props._id
        axios.get('https://bdg-mongoose-kumis.herokuapp.com/task/'+ '5da930850058142dc02bd0f7')
            .then((res)=>{
                console.log(res.data)
            })
    }

    render() {
        return (
            <div className="container">
                <center>
                    <h1 className="display-4">List Task</h1>
                    <ul className="list-group list-group-flush mb-5">
                        <li className="list-group-item d-flex justify-content-between row-hl">
                            <span className="item-hl">Makan</span>
                            <span className="item-hl">
                                <button className="btn btn-outline-primary">Done</button>
                            </span>
                        </li>
                    </ul>
                    {this.getTask()}
                    
                    <form className="form-group mt-5">
                        <input type="text" className="form-control" placeholder="What do you want to do?"/>
                    </form>
                    <button type="submit" className="btn btn-primary btn-block">Up!</button>
                    
                </center>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        _id: state.auth.id
    }
}

export default connect(mapStateToProps, {})(Home)
