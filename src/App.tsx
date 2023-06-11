import { useRef, useState } from 'react';
import MainSection from './components/main/mainSection';
import EventsSection from './components/events/eventsSection';

export default function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleScroll = () => {
    window.scrollBy(0, window.innerHeight);
  };

  const handleClick = () => {
    setIsClicked(true);
    handleScroll();
  };

  return (
    <>
      <MainSection handleClick={() => handleClick()} />
      <EventsSection isClicked={isClicked} />
    </>
  );
}
