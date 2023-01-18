import './Contact.scss';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
  name: string;
};

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => console.log(data);
  const onError = (errorData: any) => console.log(errorData);

  return (
    <main className="main contact">
      <h1 className="contact__title">Contact</h1>
      <form className="contact__form" noValidate onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          className="contact__input contact__single"
          type="email"
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
        />
        <input
          className="contact__input contact__single"
          type="text"
          {...register('name', {
            required: true,
          })}
        />
        <textarea className="contact__input contact__text" />
        <input className="contact__submit" type="submit" value="Submit" />
      </form>
    </main>
  );
}

export default Contact;
