import React, { ChangeEvent, useState, useEffect } from 'react';
import CardsFieldForm from '../CardFieldForm/CardFieldForm';
import { useForm, SubmitHandler } from 'react-hook-form';
import Photo from '../../assets/Avatar.png';
import { ICardData, ICardForm } from 'type';
import './Forms.scss';
import { getBase64 } from './util';

export interface IFormsState {
  data: ICardForm[];
  errorName: boolean;
  errorBirthday: boolean;
}

const Forms = () => {
  const [dataCard, setData] = useState<ICardData[]>([]);
  const [avatar, setAvatar] = useState(Photo);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ICardForm>();

  const onSubmit: SubmitHandler<ICardForm> = (data) => {
    setData((prevState) => {
      const newState = [...prevState, { ...data, avatar }];
      window.localStorage.setItem('cardData', JSON.stringify(newState));
      alert('Data was saved');
      return newState;
    });

    setAvatar(Photo);
    reset();
  };

  const avatarHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const base64Avatar = await getBase64(e.target.files[0], 150);
      setAvatar(base64Avatar);
    }
  };

  useEffect(() => {
    const cardData = window.localStorage.getItem('cardData');

    if (cardData) {
      setData(JSON.parse(cardData) as ICardData[]);
    }
  }, []);

  const regex = new RegExp(
    /^[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}\s[А-ЯЁІЇЄҐ][а-яёіїєґ]{2,}$|^[A-Z][a-z]{2,}\s[A-Z][a-z]{2,}$/gm
  );

  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const formattedDate = year + '-' + month + '-' + day;
  return (
    <div className="forms-field">
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Customer information</h2>
          <div className="logo-choose">
            <input
              style={{ display: 'none' }}
              type="file"
              id="file"
              name="file"
              onChange={avatarHandler}
            />
            <label htmlFor="file">
              <img src={avatar} alt="file" id="input_img" />{' '}
            </label>
          </div>
          <label htmlFor="firstName">Your first and second name</label>
          <input
            {...register('firstName', {
              pattern: regex,
              required: 'This field is required!',
            })}
            id="firstName"
            type="text"
            placeholder="Alex Popov"
          />
          <div className="input-error">
            {errors?.firstName && <p>{errors?.firstName && 'Invalid value!'}</p>}
          </div>
          <label htmlFor="birthday">Your birthday</label>
          <input
            {...register('birthday', { required: 'This field is required', max: formattedDate })}
            id="birthday"
            type="date"
            min="1950-01-01"
          />
          <div className="input-error">{errors?.birthday && `Max value is ${formattedDate}!`}</div>
          <label htmlFor="select"> Pick your country:</label>
          <select {...register('select')} id="select">
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Poland">Poland</option>
            <option value="Ukraine">Ukraine</option>
          </select>
          <label className="switch">
            <input {...register('switcher')} id="switcher" type="checkbox" name="switcher" />
            <span className="slider round"></span>
          </label>
          <label htmlFor="select" className="checkbox-field">
            <div className="checkbox-top-field">
              I consent to my personal data:
              <input
                id="checkbox"
                type="checkbox"
                className="custom-checkbox"
                {...register('checkbox', { required: 'Check this' })}
              />
            </div>
            <div className="input-error">{errors?.checkbox && 'Give rights'}</div>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
      <>
        <CardsFieldForm data={dataCard} />
      </>
    </div>
  );
};

export default Forms;
