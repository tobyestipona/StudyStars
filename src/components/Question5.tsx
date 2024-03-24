import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question5() {
  let items = ["Lyre", "Pan Flute"];
   return (
    <div style={{ background: "purple", textAlign: "center", paddingTop: "50px"  }}>
      <ListGroup
        items={items}
        heading="Would you rather play the lyre or pan flute?"
        onSelectItem={handleSelectedItem}
      />
      <Link to="/Question4">
        <Button color="primary" onClick={() => console.log()}>
          Back
        </Button>
      </Link>
      <Link to="/Question6">
        <Button color="primary" onClick={() => console.log()}>
          Next
        </Button>
      </Link>
    </div>
  );
}

export default Question5;
