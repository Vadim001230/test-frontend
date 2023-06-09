import './main.scss';
import { ReactComponent as Logo } from '../../UI/icons/logo.svg';
import { ReactComponent as ArrowRight } from '../../UI/icons/arrow-right.svg';
import { ReactComponent as ArrowDown } from '../../UI/icons/arrow-down.svg';
import { ReactComponent as HeadLeft } from '../../UI/icons/head-left.svg';
import { ReactComponent as HeadRight } from '../../UI/icons/head-right.svg';
import DateCounter from './dateCounter';

export default function MainSection() {
  return (
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
        <button type="button" className="info__btn">
          <div>Go to the event</div>
          <ArrowRight />
        </button>
      </section>
      <section className="bottom">
        <div className="bottom__container container">
          <form className="bottom__form">
            <input type="email" placeholder="Enter your Email and get notified" className="bottom__email" />
            <button type="button" className="bottom__send-btn">
              <ArrowRight />
            </button>
          </form>
          <button type="button" className="bottom__events-btn">
            <div>Other Events</div>
            <ArrowDown />
          </button>
        </div>
      </section>
    </main>
  );
}
