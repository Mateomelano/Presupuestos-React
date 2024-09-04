import { useState } from "react";

const FormAddSubs = ({ setType, setPrice, type , price, setSubs, subs }) => {
    const [error , setError] = useState(false);
  const handleSubs = (e) => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    setError(false);
    const data = {
      type: type,
      price: price,
      id: Date.now() 
    }
    setSubs([...subs, data]);
    setType("");
    setPrice("");
    //console.log(subs)
  };

  return (
    <div className="add-subscription">
      <h3>Agregar Subscripciones</h3>
      <form onSubmit={handleSubs}>
        <p>Servicio</p>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">-- Elegir --</option>
          <option value="netflix">Netflix</option>
          <option value="hboMax">HBO Max</option>
          <option value="PrimeVideo">Amazon Prime</option>
          <option value="DisneyPlus">Disney Plus</option>
          <option value="apletv">Apple TV</option>
          <option value="spotify">Spotify</option>
        </select>

        <p>Cantidad</p>
        <input
          type="number"
          placeholder="20$"
          onChange={(e) => setPrice(e.target.value)} value={price}
        />
        <input type="submit" value="Añadir" />
      </form>
      {error && <p className="error">Todos los campos son obligatorios</p>}
    </div>
  );
};

export default FormAddSubs;
