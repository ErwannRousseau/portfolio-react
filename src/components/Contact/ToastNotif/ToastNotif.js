import './ToastNotif.scss';

function ToastNotif({ success, error, toggleToast }) {
  return (
    <div className={`toast ${success ? 'active success' : ''} ${error ? 'active error' : ''} `}>
      <div className="toast-content">
        <i className={`fas fa-solid fa-check check ${success ? 'success' : ''} ${error ? 'error' : ''}`} />
        <span className="text">
          {success} {error}
        </span>
      </div>
      <i onClick={toggleToast} className="fa-solid close">
        X
      </i>
      <div className={`progress ${success ? 'active success' : ''} ${error ? 'active error' : ''}`} />
    </div>
  );
}

export default ToastNotif;
