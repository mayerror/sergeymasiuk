import './Contact.scss';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <main className="main contact">
      <h1 className="contact__title">Contact</h1>
      <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register('email')} />
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}

export default Contact;
