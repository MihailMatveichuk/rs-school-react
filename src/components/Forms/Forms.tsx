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
    errorRights: false,
    errorInput: false,
  };

  uploadImage(file: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      if (this.result && localStorage) {
        localStorage.setItem(file.name, this.result.toString());
      } else {
        alert('oops');
      }
    });
    reader.readAsDataURL(file);
  }

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
    const fileInputElement = this.formRef.current?.elements.namedItem('file') as HTMLInputElement;
    const fileList: FileList | null = fileInputElement.files;
    const fileListAsArray = fileList ? Array.from([...fileList]) : [];
    if (!this.formRef.current) {
      return null;
    }
    for (const key of Array.from(this.formRef.current.elements)) {
      if (key.id === 'checkbox' || key.id === 'switcher') {
        if (key.id === 'checkbox') {
          if ((key as HTMLInputElement).checked === false) {
            this.setState({
              errorRights: true,
            });
            return;
          } else {
            this.setState({
              errorRights: false,
            });
            card[key.id] = (key as HTMLInputElement).checked;
          }
        }
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
        if (key.id === 'birthday' || key.id === 'select') {
          card[key.id] = (key as HTMLInputElement).value;
        }
        if (key.id === 'file') {
          if (fileListAsArray.length > 0 && fileListAsArray[0] instanceof Blob) {
            const objectImg: Blob = fileListAsArray[0];
            const pathImg = URL.createObjectURL(objectImg);
            this.setState({
              errorInput: false,
            });
            card[key.id] = pathImg;
          } else {
            this.setState({
              errorInput: true,
            });
          }
        }
      }
    }
    this.setState({
      data: [...this.state.data, card],
      errorName: false,
      errorBirthday: false,
    });
    this.formRef.current.reset();
    alert('Data was saved');
  };

  handleChange: ChangeEventHandler<HTMLSelectElement> | undefined;

  render() {
    const { data, errorName, errorRights, errorInput } = this.state;
    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const formattedDate = year + '-' + month + '-' + day;
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
            <span style={{ color: 'red' }}>{errorInput ? 'Choose image' : null}</span>
            <label htmlFor="name">Your first and second name</label>
            <input id="name" name="name" type="text" placeholder="Alex Popov" />
            <span style={{ color: 'red' }}>{errorName ? 'Invalid value' : null}</span>
            <label htmlFor="birthday">Your birthday</label>
            <input
              id="birthday"
              name="birthday"
              type="date"
              defaultValue={formattedDate}
              min="1950-01-01"
              max={formattedDate}
            />
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
              <span style={{ color: 'red' }}>{errorRights ? 'Tick rights' : null}</span>
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
