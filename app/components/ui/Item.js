import React from 'react';
import FaHeart from 'react-icons/lib/fa/heart'
import {Component} from 'react'

class Item extends Component {

  render() {

    const {item, donatedBy, thumbnail, email, heart} = this.props
    return (
      <div className="item">
        <h2>{item} {(heart)
            ? <FaHeart/>
            : null}</h2>
            <div className="row">
            <div className="col-md-3" className="item-col">
              <div className="image-case">
                  <img src={thumbnail} alt="item picture"/>
                  <p>
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
      </div>
      </div>
    )
  }
}

export default Item
