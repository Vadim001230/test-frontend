import './main.scss';
import { useEffect, useState } from 'react';
import { ReactComponent as DateBg } from '../../UI/icons/date-bg.svg';
import formatValue from '../../helpers/formatValue';

export default function DateCounter() {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const countdownDate = new Date('07/24/2023').getTime();
    const updateCounter = () => {
      const now = new Date().getTime();
      const timeLeft = countdownDate - now;

      const daysCount = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hoursCount = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesCount = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const secondsCount = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setDays(formatValue(daysCount));
      setHours(formatValue(hoursCount));
      setMinutes(formatValue(minutesCount));
      setSeconds(formatValue(secondsCount));
    };
    updateCounter();
    const timer = setInterval(updateCounter, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="date">
      <div className="date__item">
        <div className="date__value">{days}</div>
        <div className="date__mean">
          {window.innerWidth >= 800 ? 'Days' : 'DD'}
          <DateBg />
        </div>
      </div>
      <div className="date__separate">:</div>
      <div className="date__item">
        <div className="date__value">{hours}</div>
        <div className="date__mean">
          {window.innerWidth >= 800 ? 'Hours' : 'HH'}
          <DateBg />
        </div>
      </div>
      <div className="date__separate">:</div>
      <div className="date__item">
        <div className="date__value">{minutes}</div>
        <div className="date__mean">
          {window.innerWidth >= 800 ? 'Minutes' : 'MM'}
          <DateBg />
        </div>
      </div>
      <div className="date__separate">:</div>
      <div className="date__item">
        <div className="date__value">{seconds}</div>
        <div className="date__mean">
          {window.innerWidth >= 800 ? 'Seconds' : 'SS'}
          <DateBg />
        </div>
      </div>
    </div>
  );
}
