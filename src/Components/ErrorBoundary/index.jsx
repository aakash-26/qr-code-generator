import React, { Component } from 'react'

export class Index extends Component {
    state = {error : false}
    static getDerivedStateFromError(error){
        return {error:true}
        }

    componentDidCatch(error, info){
        console.log("error ", error)
        console.log("info ", info)
    }
  render() {
        if(this.state.error){
            return <h1>Error</h1>
        }
        return this.props.children
  }
}

export default Index