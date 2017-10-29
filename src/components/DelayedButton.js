import React from 'react'

export default class DelayedButton  extends React.Component {
  action = (event) => {

    this.props.onDelayedClick
    this.props.delay 
  }
}
