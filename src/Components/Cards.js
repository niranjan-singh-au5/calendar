import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Cards extends Component {
    render() {
        return (
    
            <div className="card border-info mb-3 border-0 " style={{"minHeight": "18rem","width":"15rem"}}>
            <div className="card-header bg-transparent border-info text-center"><span className="float-left">{this.props.elem.time}</span><strong>{this.props.elem.title}</strong></div>
            <div className="card-body text-info">
            <h5 className="card-title">{this.props.elem.people.map((elem)=>{
                return <span className="badge badge-info ml-1">{elem} </span>
            })}</h5>
            <p className="card-text text-dark">{this.props.elem.info}</p>   
            </div>
            <div className="card-footer bg-transparent border-info">Meeting Link: <a href={this.props.elem.link}  className="card-link text-truncate">{this.props.elem.link}</a></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Cards)
