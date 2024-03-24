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
    <div style={{ background: "purple", textAlign: "center", paddingTop: "50px" }}>
      <ListGroup
        items={items}
        heading="What star sign are you?"
        onSelectItem={handleSelectedItem}
      />
      <div style={{ textAlign: "right"}}>
        <Link to="/Question2">
          <Button color="primary" onClick={() => console.log()}>
            Next &gt;&gt;
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Question1;
