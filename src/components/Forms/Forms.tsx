import React, { Component } from 'react';
import CardsFieldForm from '../CardFieldForm/CardFieldForm';
import Photo from '../../assets/Avatar.png';
import './Forms.scss';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      data: [],
    };
  }

  handleSubmit = (event: { [x: string]: any; preventDefault: () => void }) => {
    event.preventDefault();
    const card = {};
    for (const key of this.formRef.current.elements) {
      card[key.name] = key.value;
      //   this.setState({
      //     data: [...this.state.data, card],
      //   });}
    }
    this.setState({
      data: [...this.state.data, card],
    });
  };
  render() {
    const { data } = this.state;
    return (
      <div className="forms-field">
        <div className="form">
          <form ref={this.formRef} onSubmit={this.handleSubmit}>
            <h2>Customer information</h2>
            <div className="logo-choose">
              <input style={{ display: 'none' }} type="file" id="file" name="file" />
              <label htmlFor="file">
                <img src={Photo} alt="file" id="input_img" />
              </label>
            </div>
            <label htmlFor="name">Your first and second name</label>
            <input id="name" name="name" type="text" placeholder="Alex Popov" />
            <label htmlFor="birthday">Your birthday</label>
            <input
              id="birthday"
              name="birthday"
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
              <input type="checkbox" name="switcher" />
              <span className="slider round"></span>
            </label>
            <label htmlFor="select" className="checkbox-field">
              I consent to my personal data:
              <input id="checkbox" name="checkbox" type="checkbox" className="custom-checkbox" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <CardsFieldForm data={data} />
      </div>
    );
  }
}

// checkbox - "I consent to my personal data" field, list of extra presents (User can choose several items from the list)
// switcher - male/female, "I want to receive notifications about promo, sales, etc." / "I don’t want to receive notifications about promo, sales, etc.

export default Forms;
