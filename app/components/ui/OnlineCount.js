'use strict';
import React from 'react';
import Count from './Count';

export default class OnlineCount extends Component {
  propTyprs: {
    firebaseHost: React.PropTypes.string.isRequired,
    firebaseResourceId: React.PropTypes.string.isRequired,
    counterText: React.PropTypes.string,
    className: React.PropTypes.string,
  }

  render(){
    return(
      <Count isOnlineCounter={true}
        className={this.props.className}
        counterText={this.props.counterText}
        firebaseHost={this.props.firebaseHost}
        firebaseResourceId={this.props.firebaseResourceId}/>
    )
  }
}
