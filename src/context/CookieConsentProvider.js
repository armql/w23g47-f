// CookieConsentProvider
import React, { createContext, useContext, useState, useEffect } from "react";

const CookieConsentContext = createContext();

export const useCookieConsent = () => useContext(CookieConsentContext);

const CookieConsentProvider = ({ children }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const cookies = localStorage.getItem("cookieData");
    if (cookies) {
      setShowMessage(false);
    }
  }, []);

  const handleAccept = () => {
    setShowMessage(false);
    localStorage.setItem("cookieData", "true");
  };

  const handleCancel = () => {
    setShowMessage(false);
    localStorage.setItem("cookieData", "false");
  };

  const contextValue = {
    showMessage,
    handleAccept,
    handleCancel,
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsentProvider;
