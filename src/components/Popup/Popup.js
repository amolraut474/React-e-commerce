import React, { useState, useEffect } from 'react';

const Popup = ({ onClose }) => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // This will run when the component mounts
    setShowPopup(true);

    // Close the popup after 5 seconds
    const timeout = setTimeout(() => {
      setShowPopup(false);
      onClose(); // Callback to parent component to handle closing if needed
    }, 5000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [onClose]); // Dependency on onClose prop

  return (
    <div className="popup">
      {showPopup && (
        <div className="popup-content">
          <h2>Welcome to our website!</h2>
          <p>This is a popup displayed when the page loads.</p>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Popup;