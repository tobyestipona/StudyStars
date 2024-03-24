import ListGroup from "./ListGroup";
import Button from "./Button";
import { Link } from "react-router-dom";

const handleSelectedItem = (item: string) => {
  console.log(item);
};

function Question9() {
  let items = ["Their intelligence", "Keeping you on task", "Chill and patient", "Life of the party", "Has good study music"];
  return (
    <div style={{ background: "purple", textAlign: "center", paddingTop: "50px"  }}>
      <ListGroup
        items={items}
        heading="What do you value most in a study partner?"
        onSelectItem={handleSelectedItem}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/Question8">
          <Button color="primary" onClick={() => console.log()}>
            &lt;&lt; Back
          </Button>
        </Link>
        <Link to="/Question10">
          <Button color="primary" onClick={() => console.log()}>
            Next &gt;&gt;
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Question9;
