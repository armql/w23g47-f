import React, { Fragment } from "react";
import { useCookieConsent } from "../../context/CookieConsentProvider";

export default function Cookies() {
  const { showMessage, handleAccept, handleCancel } = useCookieConsent();

  return (
    <Fragment>
      {showMessage && (
        <div className="fixed bottom-4 left-4 flex w-[400px] flex-col gap-4 rounded-lg border border-indigo-400 bg-indigo-100 bg-opacity-90 p-4 shadow-sm backdrop-blur-md">
          <div className="items-top flex flex-row justify-center gap-4">
            <div className="text-lg font-medium">
              By using our site, you agree to eat our cookies.
            </div>
            <button type="button" onClick={handleCancel} className="h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-start gap-4">
            <button
              type="button"
              onClick={handleAccept}
              className="border border-indigo-600 bg-indigo-600 px-4 py-2 text-sm text-white"
            >
              Accept cookies
            </button>
            <button
              type="button"
              className="rounded-sm border border-indigo-600 bg-transparent px-4 py-2 text-sm text-indigo-950"
            >
              Go to settings
            </button>
          </div>
        </div>
      )}
    </Fragment>
  );
}
