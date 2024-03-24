import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces"
  ];
  const handleSelectedItem = (item: string) => {
    console.log(item);
  }
  
  return (
    <div>
      {/* {alertVisible && <Alert type="secondary" onClose={() => setAlertVisibility(false)}>THERE IS A FIRE</Alert>}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        FIRE ALARM
      </Button> */}
      <ListGroup items={items} heading="What star sign are you?" onSelectItem={handleSelectedItem}/>
    </div>
  );
}

export default App;
