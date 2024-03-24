import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question1() {
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
    "Pisces",
  ];
  return (
  <div>
    <ListGroup
      items={items}
      heading="What star sign are you?"
      onSelectItem={handleSelectedItem}
    />
    <Link to="/Question2">
        <Button color="primary" onClick={() => console.log()}>Next</Button>
    </Link>
  </div>
  );
}

export default Question1;
