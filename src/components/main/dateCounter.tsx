import './main.scss';
import { ReactComponent as DateBg } from '../../UI/icons/date-bg.svg';

export default function DateCounter() {
  return (
    <div className="date">
      <div className="date__item">
        <div className="date__value">92</div>
        <div className="date__mean">
          Days
          <DateBg />
        </div>
      </div>
      <div className="date__separate">:</div>
      <div className="date__item">
        <div className="date__value">11</div>
        <div className="date__mean">
          Hours
          <DateBg />
        </div>
      </div>
      <div className="date__separate">:</div>
      <div className="date__item">
        <div className="date__value">41</div>
        <div className="date__mean">
          Minutes
          <DateBg />
        </div>
      </div>
      <div className="date__separate">:</div>
      <div className="date__item">
        <div className="date__value">48</div>
        <div className="date__mean">
          Seconds
          <DateBg />
        </div>
      </div>
    </div>
  );
}
