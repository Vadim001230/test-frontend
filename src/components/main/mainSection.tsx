import { useState, ChangeEvent, FormEvent } from 'react';
import './main.scss';
import DateCounter from './dateCounter';
import { ReactComponent as Logo } from '../../UI/icons/logo.svg';
import { ReactComponent as ArrowRight } from '../../UI/icons/arrow-right.svg';
import { ReactComponent as ArrowDown } from '../../UI/icons/arrow-down.svg';
import { ReactComponent as HeadLeft } from '../../UI/icons/head-left.svg';
import { ReactComponent as HeadRight } from '../../UI/icons/head-right.svg';
import Preloader from '../../UI/preloader/Preloader';
import Popup from '../popup/popup';

export default function MainSection() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const validateEmail = async (emailCheck: string): Promise<boolean> => {
    const url = `http://htmlweb.ru/json/service/email?email=${emailCheck}&api_key=4a2c2176347076a263e6942946a569f9`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.format_valid;
    } catch (error) {
      return false;
    }
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    const isValid = await validateEmail(email);

    if (isValid) {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setEmail('');
    } else {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <main className="main">
        <HeadLeft />
        <HeadRight />
        <section className="info container">
          <h1 className="logo">
            <a href="/">
              <Logo />
            </a>
          </h1>
          <h2 className="info__title">under construction</h2>
          <p className="info__text text-one">We&apos;re making lots of improvements and will be back soon</p>
          <DateCounter />
          <p className="info__text text-two">Check our event page when you wait:</p>
          <a href="https://egorovagency.by" target="blank" className="info__btn">
            <div>Go to the event</div>
            <ArrowRight />
          </a>
        </section>
        <footer className="bottom">
          <div className="bottom__container container">
            <form className="bottom__form" onSubmit={handleFormSubmit}>
              <input
                type="email"
                placeholder="Enter your Email and get notified"
                className="bottom__email"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit" className="bottom__send-btn">
                <ArrowRight />
              </button>
            </form>
            <button type="button" className="bottom__events-btn">
              <div>Other Events</div>
              <ArrowDown />
            </button>
          </div>
        </footer>
      </main>
      {isSubmitting === true && <Preloader />}
      {submitStatus === 'success' && <Popup type="success" onClose={() => setSubmitStatus(null)} />}
      {submitStatus === 'error' && <Popup type="error" onClose={() => setSubmitStatus(null)} />}
    </>
  );
}
