import React from 'react';
// import { Link } from 'react-router'
import {Component} from 'react'
import Item from './Item'

class Electronics extends Component{

  constructor(props) {
    super(props)
    this.state = {
      items: [


        {
          item: "Laptop Cord",
          donatedBy: "Mohammed",
          email: "m.reshid@gmail.com",
          thumbnail: "../assets/cord2.jpg"
        },
        {
          item: "Computer Cord",
          donatedBy: "Mohammed",
          email: "mohfun@gmail.com",
          thumbnail: "../assets/cord.jpg"
        },
        {
          item: "Moderately Used HP",
          donatedBy: "Mohammed",
          email: "mohemal9@gmail.com",
          thumbnail: "../assets/hp2.jpg"
        },
        {
          item: "Ipad",
          donatedBy: "Mohammed",
          email: "sumara@gmail.com",
          thumbnail: "../assets/ipad.jpg"
        },
        {
          item: "Android Phone",
          donatedBy: "Mohammed",
          email: "faris@gmail.com",
          thumbnail: "../assets/phone.jpg"
        },
        {
          item: "HP Laptop",
          donatedBy: "Mohammed",
          email: "anyone@gmail.com",
          thumbnail: "../assets/laptop.jpg"
        },
        {
          item: "Tape Recorder",
          donatedBy: "Mohammed",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/tape.jpg"
        },
        {
          item: "Samsung TV",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/samsung.jpg"
        }
      ]
    }
  }

  render() {
    const {items} = this.state
    return (
      <div className="item-list">
        <h1> Electronics Ready For Donation: Select the Item you would like to get?</h1>

        {items.map((data, i) => <Item key={i} onClick={email => console.log(email)} {...data}/>)}

      </div>


    )
  }

}

export default Electronics
