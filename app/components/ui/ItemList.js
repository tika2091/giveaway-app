import React from 'react';
// import { Link } from 'react-router'
import {Component} from 'react'
import Item from './Item'

class ItemList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        
        {


          item: "Samsung TV",
          donatedBy: "Mohammed",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/Samsung.jpg"
        }, {
          item: "Acer Laptop",
          donatedBy: "Mohammed",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/acer.jpg"
        }, {
          item: "Computer Cord",
          donatedBy: "Mohammed",
          email: "mohfun@gmail.com",
          thumbnail: "../assets/cord.jpg"
        }, {
          item: "Laptop Cord",
          donatedBy: "Mohammed",
          email: "m.reshid@gmail.com",
          thumbnail: "../assets/cord2.jpg"
        }, {
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
        }, {
          item: "Android Phone",
          donatedBy: "Mohammed",
          email: "faris@gmail.com",
          thumbnail: "../assets/phone.jpg"
        }, {
          item: "HP Laptop",
          donatedBy: "Mohammed",
          email: "anyone@gmail.com",
          thumbnail: "../assets/laptop.jpg"
        }, {
          item: "Tape Recorder",
          donatedBy: "Mohammed",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/tape.jpg"
        }, {
          item: "Samsung TV",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/samsung.jpg"
        },
        
        {
          item: "Shoes",
          donatedBy: "Mohammed",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/shose2.jpg"
        }, {
          item: "Shoese",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/shose.jpg"
        }, 
        {

          item: "Sofa",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/sofa.jpg"
        },
        {
          item: "Book",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/book.jpg"
        }

      ]
    }
  }

  render() {
    const {items} = this.state
    return (
      <div className="item-list">
        <h1>Items Ready For Donation: Select the Item you would like to get?</h1>

        {items.map((data, i) => <Item key={i} onClick={email => console.log(email)} {...data}/>)}

      </div>


    )
  }

}

export default ItemList
