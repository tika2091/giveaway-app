import {PropTypes, Component} from 'react';
import React from 'react';
import FileUploader from 'react-firebase-file-uploader';
import firebase from '../../config/firebase.js';

let _name, _email, email, _phonNumber,phoneNumber, address, _address, itemName, _itemName, _description, descrption, _itemPicture, itemPicture = "";
let _itemCondition, itemCondition= false;

class DonateNow extends Component{
  constructor(){
    super();
    this.submit = this.submit.bind(this);

  }
  submit(e) {
    e.preventDefault()
    const donationsRef = firebase.database().ref('donations');
    const donation = {
      name: _name.value,
      email: _email.value,
      phoneNumber:_phonNumber.value,
      address: _address.value,
      itemName: _itemName.value,
      itemCondition: _itemCondition.checked,
      description: _description.value,
      itemPicture: _itemPicture.value
    }
    donationsRef.push(donation);
    this.setState({
      name: '',
      email: '',
      phoneNumber: '',
      address: '',
      itemName: '',
      itemCondition: '',
      description: '',
      itemPicture: ''
    });
    console.log({
      name: _name.value,
      email: _email.value,
      phoneNumber: _phonNumber.value,
      address: _address.value,
      itemName: _itemName.value,
      itemCondition: _itemCondition.checked,
      description: _description.value,
      itemPicture: _itemPicture.value
    })
  }

  render() {
    return (

       <div className="div-form">
       <div className="donate-heading">
           <h1>To Donate Please Fill Up The Following Form</h1>
         </div>
        <form onSubmit={this.submit} className="donate-now-form">
          <div>
          <label htmlFor="name">Name</label>
          <input id="name"
              type="text"
              required
              defaultValue={name}
              ref={input => _name = input}/>
            </div>
          <div>
          <label htmlFor="email">Email</label>
          <input id="email"
                 type="text"
                 required
                 defaultValue={email}
                 ref={input => _email = input}/>
           </div>
           <div>
           <label htmlFor="phoneNumber">Phone Number</label>
           <input id="phoneNumber"
                   type="number"
                   required
                   defaultValue={phoneNumber}
                   ref={input => _phonNumber = input}/>
          </div>
          <div>
           <label htmlFor="address">Address</label>
           <input id="address"
                   type="text && number"
                   required
                   defaultValue={address}
                   ref={input => _address = input}/>
            </div>
            <div>
           <label htmlFor="itemName">Item Name</label>
            <input id="itemName"
                      type="text"
                      required
                      defaultValue={itemName}
                      ref= {input => _itemName = input}/>
            </div>
            <div>
               <input id="itemCondition"
                           type="checkbox"
                           defaultChecked={itemCondition}
                           ref="itemCondition"
                           ref={input => _itemCondition = input}/>
                <label htmlFor="itemCondition">Item in faire condition</label>
            </div>
            <div>
                 <label htmlFor="description">Item Description</label>
             <input id="description"
                   type="text"
                   required
                   defaultValue={descrption}
                   ref={input => _description =input}/>
            </div>
            <div>
             <label htmlFor="itemPicture">Item Picture</label>
             <input id="itemPicture"
                   type="image"
                   required
                   defaultValue={itemPicture}
                   ref={input => _itemPicture =input}/>
              </div>
              <div>
              <button>Add Donation</button>
            </div>
        </form>
      </div>
    )
  }
}

export default DonateNow;
