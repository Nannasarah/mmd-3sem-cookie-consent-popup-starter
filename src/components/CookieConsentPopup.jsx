"use client"; //man kan skrive use state for at man kan bruge useState
import { useState } from "react";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { IoIosClose } from "react-icons/io";
import CookieAcceptButtom from "./CookieAcceptButtom";

const CookieConsentPopup = () => {
  const [isAccepted, setIsAccepted] = useState(false); // man kan kalde variablerne lige det man vil. den første er en variabel, og den anden er en funktion der kan ændre variablen.. og vi har sat værdien som en boulian false, da det er udgangspuunktet
  const [isClosed, setIsClosed] = useState(false);
  return (
    // hvis det er false skal det nedenfor vises, det gør det med denne  !isAccepted &&
    !isAccepted &&
    !isClosed && (
      <section className="cookie-consent-popup">
        <header className="cookie-consent-popup-header">
          <LiaCookieBiteSolid size={50} />
          <IoIosClose className="pointer" size={25} onClick={() => setIsClosed(!isClosed)} />
        </header>
        <footer className="cookie-consent-popup-footer">
          <p className="cookie-consent-popup-paragraph">We use cookies to improve your user experience!</p>
          {/* udgråbstegnet gør at knappen altid kan trykkes på og så bliver til den modsatte af isAccepted */}
          <CookieAcceptButtom isAccepted={isAccepted} setIsAccepted={setIsAccepted} />
        </footer>
      </section>
    )
  );
};

export default CookieConsentPopup;
