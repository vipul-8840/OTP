import React, { Component } from 'react'

export default class Mount extends Component {
    constructor()
    {
        super();
        this.state = {
            count:0
        }
    }
     increment()
     {
       this.setState({count:this.state.count+1})
     }
     componentDidUpdate()
     {
        console.log("component will be updated ")
     }
     componentWillUnmount()
     {
        console.log("component will be deleted ")
     }
    componentDidMount()
    {
         console.log(`first time render on the screen`);
    }
  render() {
    return (
      <div className='font-medium flex flex-col justify-center  text-3xl items-center min-h-screen'>
            <h3>{this.state.count}</h3>
           {/* <button className='border rounded-md bg-gray-200'
             onClick ={this.increment.bind(this)}
           >
            increment
            </button> */}
            <button className='border rounded-md bg-gray-200'
             onClick ={()=>this.increment(this)}
           >
            increment
            </button>
      </div>
    )
  }
}
