import './Contact.scss';
import { useForm } from 'react-hook-form';
import { FcCheckmark } from 'react-icons/fc';

import { send } from '@emailjs/browser';
import { isDisabled } from '@testing-library/user-event/dist/utils';

type FormData = {
  email: string;
  name: string;
  text: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isValidating },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const templateParams = {
      email: data.email,
      from_name: data.name,
      message: data.text,
    };
    send('mayerror', 'template_g8xg1se', templateParams, 'rBoJyDC2jHHo7LWQZ').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      }
    );
    reset();
  };
  const onError = (errorData: any) => {
    console.log(errorData);
  };

  return (
    <main className="main contact">
      <div className="contact__wrapper">
        <h1 className="contact__title">Contact</h1>
        {isSubmitSuccessful && <FcCheckmark size={22} />}
      </div>
      <form className="contact__form" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="contact__wrapper">
          <label className="contact__label" htmlFor="email">
            Email:
          </label>
          {errors.email && errors.email.type === 'required' && (
            <p className="contact__error">Email is required</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className="contact__error">This is not an email</p>
          )}
        </div>
        <input
          className="contact__input contact__single"
          id="email"
          type="email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        <div className="contact__wrapper">
          <label className="contact__label" htmlFor="name">
            Name:
          </label>
          {errors.name && <p className="contact__error">Name is required</p>}
        </div>
        <input
          className="contact__input contact__single"
          id="name"
          type="text"
          {...register('name', {
            required: true,
          })}
        />
        <div className="contact__wrapper">
          <label className="contact__label" htmlFor="text">
            Message:
          </label>
          {errors.text && <p className="contact__error">Message is required</p>}
        </div>
        <textarea
          className="contact__input contact__text"
          id="text"
          {...register('text', {
            required: true,
          })}
        />
        {/* <input className="contact__submit" type="submit" value="Submit" /> */}
        <input
          className="contact__submit"
          disabled={Object.keys(errors).length !== 0}
          type="submit"
          value="Submit"
        />
      </form>
    </main>
  );
}

export default Contact;
