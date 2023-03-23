import React, { ChangeEventHandler, Component, FormEvent, RefObject } from 'react';
import CardsFieldForm from '../CardFieldForm/CardFieldForm';
import Photo from '../../assets/Avatar.png';
import './Forms.scss';
import { ICardForm } from 'type';

export interface IFormsState {
  data: ICardForm[];
  errorName: boolean;
  errorBirthday: boolean;
}

class Forms extends Component<IFormsState> {
  private formRef: RefObject<HTMLFormElement> = React.createRef<HTMLFormElement>();
  state = {
    data: [],
    errorName: false,
    errorBirthday: false,
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const card: ICardForm = {
      file: '',
      name: '',
      birthday: '',
      select: '',
      switcher: false,
      checkbox: false,
    };
    if (!this.formRef.current) {
      return null;
    }
    for (const key of Array.from(this.formRef.current.elements)) {
      if (key.id === 'checkbox' || key.id === 'switcher') {
        card[key.id] = (key as HTMLInputElement).checked;
      } else if (key.id === 'name') {
        const regex = new RegExp(
          /^[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}\s[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}$|^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/gm
        );
        if (!regex.test((key as HTMLInputElement).value)) {
          this.setState({
            errorName: true,
          });
          return;
        } else {
          this.setState({
            errorName: false,
          });
          card[key.id] = (key as HTMLInputElement).value;
        }
      } else {
        if (key.id === 'birthday') {
          if ((key as HTMLInputElement).value === '') {
            this.setState({
              errorBirthday: true,
            });
            return;
          } else {
            this.setState({
              errorBirthday: false,
            });
            card[key.id] = (key as HTMLInputElement).value;
          }
        } else if (key.id === 'select') {
          card[key.id] = (key as HTMLInputElement).value;
        }
      }
    }
    this.setState({
      data: [...this.state.data, card],
    });
    this.formRef.current.reset();
    alert('Data was saved');
  };

  handleChange: ChangeEventHandler<HTMLSelectElement> | undefined;

  render() {
    const { data, errorName, errorBirthday } = this.state;
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
            <span style={{ color: 'red' }}>{errorName ? 'Invalid value' : null}</span>
            <label htmlFor="birthday">Your birthday</label>
            <input id="birthday" name="birthday" type="date" min="1950-01-01" max="2023-21-21" />
            <span style={{ color: 'red' }}>{errorBirthday ? 'Tick rights' : null}</span>
            <label htmlFor="select"> Pick your country:</label>
            <select onChange={this.handleChange} id="select" name="select">
              <option value="Belarus">Belarus</option>
              <option value="Russia">Russia</option>
              <option value="Poland">Poland</option>
              <option value="Ukraine">Ukraine</option>
            </select>
            <label className="switch">
              <input id="switcher" type="checkbox" name="switcher" />
              <span className="slider round"></span>
            </label>
            <label htmlFor="select" className="checkbox-field">
              I consent to my personal data:
              <input
                id="checkbox"
                name="checkbox"
                type="checkbox"
                className="custom-checkbox"
                data-testid="consent-checkbox"
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
        <>
          <CardsFieldForm data={data} />
        </>
      </div>
    );
  }
}

export default Forms;
