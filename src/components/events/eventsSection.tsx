import { useState } from 'react';
import './events.scss';

export default function EventsSection({ isClicked }: { isClicked: boolean }) {
  const [activeItem, setActiveItem] = useState(1);

  const handleAccordionClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <section className="events container">
      <h2 className={`events__title info__title  ${isClicked ? 'animate' : ''}`}>all events</h2>
      <div className="accordion">
        <div className={`accordion__item ${activeItem === 1 ? '' : 'item-hidden'}`}>
          <button
            className="accordion__info"
            type="button"
            onClick={() => handleAccordionClick(1)}
            style={activeItem !== 1 ? { backgroundImage: 'url(../../../public/images/01.jpg)' } : {}}
          >
            <div className="accordion__info-bg" />
            <div className="accordion__info-title">Hawaiian party</div>
            <div className="accordion__info-number">01</div>
          </button>
          <div className="accordion__img" style={{ backgroundImage: 'url(../../../public/images/01.jpg)' }}>
            <div className="accordion__blur">
              <div className="accordion__blur-content">
                <div className="accordion__info-bg" />
                <div className="accordion__blur-title">Hawaiian party</div>
                <div className="accordion__blur-date">13.02.2023</div>
                <a href="https://egorovagency.by" target="blank" className="accordion__blur-btn">
                  More information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`accordion__item ${activeItem === 2 ? '' : 'item-hidden'}`}>
          <button
            className="accordion__info"
            type="button"
            onClick={() => handleAccordionClick(2)}
            style={activeItem !== 2 ? { backgroundImage: 'url(../../../public/images/02.jpg)' } : {}}
          >
            <div className="accordion__info-bg" />
            <div className="accordion__info-title">Mafia party</div>
            <div className="accordion__info-number">02</div>
          </button>
          <div className="accordion__img" style={{ backgroundImage: 'url(../../../public/images/02.jpg)' }}>
            <div className="accordion__blur">
              <div className="accordion__blur-content">
                <div className="accordion__blur-title">Mafia party</div>
                <div className="accordion__blur-date">26.02.2023</div>
                <a href="https://egorovagency.by" target="blank" className="accordion__blur-btn">
                  More information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`accordion__item ${activeItem === 3 ? '' : 'item-hidden'}`}>
          <button
            className="accordion__info"
            type="button"
            onClick={() => handleAccordionClick(3)}
            style={activeItem !== 3 ? { backgroundImage: 'url(../../../public/images/03-08.jpg)' } : {}}
          >
            <div className="accordion__info-bg" />
            <div className="accordion__info-title">Party</div>
            <div className="accordion__info-number">03</div>
          </button>
          <div className="accordion__img" style={{ backgroundImage: 'url(../../../public/images/03-08.jpg)' }}>
            <div className="accordion__blur">
              <div className="accordion__blur-content">
                <div className="accordion__blur-title">Party</div>
                <div className="accordion__blur-date">01.03.2023</div>
                <a href="https://egorovagency.by" target="blank" className="accordion__blur-btn">
                  More information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`accordion__item ${activeItem === 4 ? '' : 'item-hidden'}`}>
          <button
            className="accordion__info"
            type="button"
            onClick={() => handleAccordionClick(4)}
            style={activeItem !== 4 ? { backgroundImage: 'url(../../../public/images/04-05.jpg)' } : {}}
          >
            <div className="accordion__info-bg" />
            <div className="accordion__info-title">Party on the beach</div>
            <div className="accordion__info-number">04</div>
          </button>
          <div className="accordion__img" style={{ backgroundImage: 'url(../../../public/images/04-05.jpg)' }}>
            <div className="accordion__blur">
              <div className="accordion__blur-content">
                <div className="accordion__blur-title">Party on the beach</div>
                <div className="accordion__blur-date">12.05.2023</div>
                <a href="https://egorovagency.by" target="blank" className="accordion__blur-btn">
                  More information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`accordion__item ${activeItem === 5 ? '' : 'item-hidden'}`}>
          <button
            className="accordion__info"
            type="button"
            onClick={() => handleAccordionClick(5)}
            style={activeItem !== 5 ? { backgroundImage: 'url(../../../public/images/04-05.jpg)' } : {}}
          >
            <div className="accordion__info-bg" />
            <div className="accordion__info-title">Hawaiian party</div>
            <div className="accordion__info-number">05</div>
          </button>
          <div className="accordion__img" style={{ backgroundImage: 'url(../../../public/images/04-05.jpg)' }}>
            <div className="accordion__blur">
              <div className="accordion__blur-content">
                <div className="accordion__blur-title">Hawaiian party</div>
                <div className="accordion__blur-date">13.04.2023</div>
                <a href="https://egorovagency.by" target="blank" className="accordion__blur-btn">
                  More information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`accordion__item ${activeItem === 6 ? '' : 'item-hidden'}`}>
          <button
            className="accordion__info"
            type="button"
            onClick={() => handleAccordionClick(6)}
            style={activeItem !== 6 ? { backgroundImage: 'url(../../../public/images/06.jpg)' } : {}}
          >
            <div className="accordion__info-bg" />
            <div className="accordion__info-title">Network Design & Implementation</div>
            <div className="accordion__info-number">06</div>
          </button>
          <div className="accordion__img" style={{ backgroundImage: 'url(../../../public/images/06.jpg)' }}>
            <div className="accordion__blur">
              <div className="accordion__blur-content">
                <div className="accordion__blur-title">Network Design & Implementation</div>
                <div className="accordion__blur-date">02.05.2023</div>
                <a href="https://egorovagency.by" target="blank" className="accordion__blur-btn">
                  More information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`accordion__item ${activeItem === 7 ? '' : 'item-hidden'}`}>
          <button
            className="accordion__info"
            type="button"
            onClick={() => handleAccordionClick(7)}
            style={activeItem !== 7 ? { backgroundImage: 'url(../../../public/images/07.jpg)' } : {}}
          >
            <div className="accordion__info-bg" />
            <div className="accordion__info-title">System Design & Engineering</div>
            <div className="accordion__info-number">07</div>
          </button>
          <div className="accordion__img" style={{ backgroundImage: 'url(../../../public/images/07.jpg)' }}>
            <div className="accordion__blur">
              <div className="accordion__blur-content">
                <div className="accordion__blur-title">System Design & Engineering</div>
                <div className="accordion__blur-date">10.05.2023</div>
                <a href="https://egorovagency.by" target="blank" className="accordion__blur-btn">
                  More information
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`accordion__item ${activeItem === 8 ? '' : 'item-hidden'}`}>
          <button
            className="accordion__info"
            type="button"
            onClick={() => handleAccordionClick(8)}
            style={activeItem !== 8 ? { backgroundImage: 'url(../../../public/images/03-08.jpg)' } : {}}
          >
            <div className="accordion__info-bg" />
            <div className="accordion__info-title">Client Care Plan</div>
            <div className="accordion__info-number">08</div>
          </button>
          <div className="accordion__img" style={{ backgroundImage: 'url(../../../public/images/03-08.jpg)' }}>
            <div className="accordion__blur">
              <div className="accordion__blur-content">
                <div className="accordion__blur-title">Client Care Plan</div>
                <div className="accordion__blur-date">13.05.2023</div>
                <a href="https://egorovagency.by" target="blank" className="accordion__blur-btn">
                  More information
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
