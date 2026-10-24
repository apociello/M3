import '../styles/Status.css';

// kind is 'loading' or 'error'
function Status({ kind, children }) {
  return (
    <p className={`status status-${kind}`} role="status">
      {kind === 'loading' && <span className="spinner" />}
      {children}
    </p>
  );
}

export default Status;
