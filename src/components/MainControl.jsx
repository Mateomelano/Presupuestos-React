import Balance from "./Balance";
import DisplayItems from "./DisplayItems";
import FormAddSubs from "./FormAddSubs";
import { useState } from "react";

const MainControl = ({ count }) => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [subs, setSubs] = useState([]);

  return (
    <>
      <div className="main-form">
        <Balance count={count} />
        <FormAddSubs
          setType={setType}
          setPrice={setPrice}
          type={type}
          price={price}
          setSubs={setSubs}
          subs={subs}
        />
      </div>
      <DisplayItems subs={subs} />
    </>
  );
};

export default MainControl;
