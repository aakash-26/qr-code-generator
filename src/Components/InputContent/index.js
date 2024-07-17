import React, { useContext } from "react";
import UrlForm from "../DestinationForms/UrlForm";
import TextForm from "../DestinationForms/TextForm";
import EmailForm from "../DestinationForms/EmailForm";
import QrContext from "../../Context/qrContext";
import CallForm from "../DestinationForms/CallForm";
import SmsForm from "../DestinationForms/SmsForm";
import VcardForm from "../DestinationForms/VcardForm";
import EventForm from "../DestinationForms/EventForm";
import WifiForm from "../DestinationForms/WifiForm";
import GeolocationForm from "../DestinationForms/GeolocationForm";
import BitcoinForm from "../DestinationForms/BitcoinForm";

function Index() {
  const { destination } = useContext(QrContext);

  const getRenderForm = () => {
    let formComponent = <UrlForm />;
    switch (destination) {
      case "URL":
        formComponent = <UrlForm />;
        break;
      case "Text":
        formComponent = <TextForm />;
        break;
      case "Email":
        formComponent = <EmailForm />;
        break;
      case "Call":
        formComponent = <CallForm />;
        break;
      case "SMS":
        formComponent = <SmsForm />;
        break;
      case "VCard":
        formComponent = <VcardForm />;
        break;
      case "Event":
        formComponent = <EventForm />;
        break;
      case "WiFi":
        formComponent = <WifiForm />;
        break;
      case "Geolocation":
        formComponent = <GeolocationForm />;
        break;
      case "Bitcoin":
        formComponent = <BitcoinForm />;
        break;
    }
    return formComponent;
  };
  return <>{getRenderForm()}</>;
}

export default Index;
