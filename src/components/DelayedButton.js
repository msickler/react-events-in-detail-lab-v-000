import React from 'react'

export default class DelayedButton  extends React.Component {
  action = (event) => {
    event.persist()
    setTimeout(() => {
      
    
    this.props.onDelayedClick
    this.props.delay
    })
  }

  render() {
    return (
      <button onClick={this.action}>Click me</button>
    )
  }
}
