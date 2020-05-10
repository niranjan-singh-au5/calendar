import React, { Component } from 'react'
import Calendar from './Components/Calendar'
import Inputs from './Components/Inputs'
import Cards from './Components/Cards'
import { connect } from 'react-redux'
import {loadCards, unreload} from './Actions/actions'
import { bindActionCreators } from 'redux'


class App extends Component {
  
  componentDidMount = () => {
    this.props.loadCards(this.props.date)
    this.props.unreload()
  }
  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.date != this.props.date){
      this.componentDidMount()
    }

    if(this.props.reload){
      this.componentDidMount()
    }
    if(this.props.error){
      alert("Task has already been assigned in this time slot")
    }
    
  }
  render() {
    return (
      <div className="bg-light" style={{minHeight:"100vh"}}>
      <nav class="navbar navbar-light bg-info">
      <span class="navbar-brand mb-0  text-white ml-3"><i className="fas fa-calendar-check "></i> Calendar</span>
      </nav>
      
      <div className="col">

        <div className="row bg-light">
          <div className="col-3 mt-5 border-0">
            <Calendar />
            <Inputs/>
          </div>
          <div className="col-9  ">
              <h3 className="text-info mt-3 ml-2">{this.props.date}</h3>
            <div className="row mt-4">
                {this.props.cards.map((e,i)=>{
                  return <div key="i" className="card-columns ml-2 ">
                    <Cards elem={e} index={i} />
                  </div>
                })}
              
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}


const getState = (state) => {
  return {
      date: state.date,
      cards: state.cards,
      reload: state.reload,
      error:state.error

  }
}
const changeState = (dispatch) => {
  return bindActionCreators({loadCards, unreload}, dispatch)
}


export default connect(getState, changeState)(App)