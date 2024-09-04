import SingleItem from "./SingleItem";

const DisplayItems = ({ subs }) => {
  return (
    <>
      <h2>Susbcripciones</h2>
      {subs.map((item) => (
        <SingleItem key={item.id} d={item.id} type={item.type} price={item.price} />
      ))}
    </>
  );
};

export default DisplayItems;
