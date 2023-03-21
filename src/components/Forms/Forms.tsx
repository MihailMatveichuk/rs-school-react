import React, { Component } from 'react';
import CardsForm from '../CardsForm/CardsForm';
import Photo from '../../assets/Avatar.png';
import './Forms.scss';

class Forms extends Component {
  [x: string]: any;
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      data: [],
      card: {},
    };
  }

  handleSubmit = (event: { [x: string]: any; preventDefault: () => void }) => {
    event.preventDefault();
    console.log(...this.input.current);
  };

  render() {
    return (
      <div className="forms-field">
        <div className="form">
          <form onSubmit={this.handleSubmit} ref={this.input}>
            <h2>Customer information</h2>
            <div className="logo-choose">
              <input style={{ display: 'none' }} type="file" id="file" />
              <label htmlFor="file">
                <img src={Photo} alt="file" id="input_img" />
              </label>
            </div>
            <label htmlFor="name">Your first and second name</label>
            <input id="name" name="name" type="text" placeholder="Alex Popov" />
            <label htmlFor="data">Your birthday</label>
            <input
              id="data"
              name="data"
              type="date"
              defaultValue="2023-03-21"
              min="2018-01-01"
              max="2023-21-21"
            />
            <label htmlFor="select"> Pick your country:</label>
            <select onChange={this.handleChange} id="select" name="select">
              <option value="Belarus">Belarus</option>
              <option value="Russia">Russia</option>
              <option value="Poland">Poland</option>
              <option value="Ukraine">Ukraine</option>
            </select>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <label htmlFor="select" className="checkbox-field">
              I consent to my personal data:
              <input id="checkbox" name="checkbox" type="checkbox" className="custom-checkbox" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <CardsForm />
      </div>
    );
  }
}

// checkbox - "I consent to my personal data" field, list of extra presents (User can choose several items from the list)
// switcher - male/female, "I want to receive notifications about promo, sales, etc." / "I don’t want to receive notifications about promo, sales, etc.

export default Forms;
