import React, {useContext} from 'react'
import UrlForm from '../DestinationForms/UrlForm'
import TextForm from '../DestinationForms/TextForm'
import EmailForm from '../DestinationForms/EmailForm'
import QrContext from '../../Context/qrContext'
import CallForm from '../DestinationForms/CallForm'
import SmsForm from '../DestinationForms/SmsForm'

function Index() {

  const {destination} = useContext(QrContext)

  const getRenderForm = () => {
    let formComponent = <UrlForm />
    switch (destination) {
      case "URL":
        formComponent = <UrlForm />
        break;
      case "Text":
        formComponent = <TextForm />
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
      case 5:
        formComponent = "FriformComponent";
        break;
      case 6:
        formComponent = "SaturformComponent";
    }
    return formComponent
  }
  return (
    <>
      {getRenderForm()}
    </> 
  )
}

export default Index