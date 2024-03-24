import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question7() {
  let items = ["Praise from others", "Your own ambition", "A reward/prize", "A consequence", "The deadline"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="What motivates you to reach for the stars?"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question6">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
      <Link to="/Question8">
        <Button color="primary" onClick={() => console.log()}>
          Next
        </Button>
      </Link>
    </div>
  );
}

export default Question7;
