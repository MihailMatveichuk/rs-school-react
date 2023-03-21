import React, { Component } from 'react';
import Photo from '../../assets/Avatar.png';
import './Forms.scss';

class Forms extends Component {
  [x: string]: any;
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="forms-field">
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <h2>Customer information</h2>
            <div className="logo-choose">
              <input style={{ display: 'none' }} type="file" id="file" ref={this.input} />
              <label htmlFor="file">
                <img src={Photo} alt="file" id="input_img" />
              </label>
            </div>
            <label htmlFor="name">Your first and second name</label>
            <input id="name" name="name" type="text" placeholder="Alex Popov" ref={this.input} />
            <label htmlFor="data">Your first and second name</label>
            <input
              id="data"
              name="data"
              type="date"
              defaultValue="2023-03-21"
              min="2018-01-01"
              max="2023-21-21"
              ref={this.input}
            />
            <label htmlFor="email">Your email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="name@gmail.com"
              ref={this.input}
            />
            <label htmlFor="phone">Your phone</label>
            <input
              id="phone"
              name="phone"
              type="string"
              placeholder="+375*********"
              ref={this.input}
            />
            <label htmlFor="select"> Pick your sex:</label>
            <select onChange={this.handleChange} id="select" name="select">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

// text input - name, surname (or both), zip-code;
// date input - birthday, date of delivery;
// dropdown/select - list of countries, list of states (User can choose only one element from the list)
// checkbox - "I consent to my personal data" field, list of extra presents (User can choose several items from the list)
// switcher - male/female, "I want to receive notifications about promo, sales, etc." / "I don’t want to receive notifications about promo, sales, etc."
// file upload - profile picture

export default Forms;
