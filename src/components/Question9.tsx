import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question9() {
  let items = ["Their intelligence", "Keeping you on task", "Chill and patient", "Life of the party", "Has good study music"];
  return (
    <div>
      <ListGroup
        items={items}
        heading="What do you value most in a study partner?"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question8">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
      <Link to="/Question10">
        <Button color="primary" onClick={() => console.log()}>
          Next
        </Button>
      </Link>
    </div>
  );
}

export default Question9;
