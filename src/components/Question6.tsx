import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question6() {
  let items = ["Review the slides", "Do practice problems", "Let someone teach you", "Teach someone else", "Cram the night before", "Pray to the stars"];
  return (
    <div style={{ background: "purple" }}>
      <ListGroup
        items={items}
        heading="How do you prepare for upcoming tests?"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question5">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
      <Link to="/Question7">
        <Button color="primary" onClick={() => console.log()}>
          Next
        </Button>
      </Link>
    </div>
  );
}

export default Question6;
