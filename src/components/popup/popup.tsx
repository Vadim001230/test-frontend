import './popup.scss';
import { ReactComponent as Cancel } from '../../UI/icons/cancel.svg';

export default function Popup({ type, onClose }: { type: 'success' | 'error'; onClose: () => void }) {
  const popuText =
    type === 'success' ? 'You have successfully subscribed to the email newsletter' : 'Invalid email. Try again';
  return (
    <div className="popup">
      <div className="popup__content">
        <Cancel className="popup__cancel" type="button" onClick={onClose} />
        <h3 className={type === 'success' ? 'popup__title_success popup__title' : 'popup__title_error popup__title'}>
          {type}!
        </h3>
        <p className="popup__text">{popuText}</p>
        <button type="button" onClick={onClose} className="popup__btn">
          Close
        </button>
      </div>
    </div>
  );
}
