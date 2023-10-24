import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [paragrapgh, setParagrapgh] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count)
    console.log(typeof count);
    if(amount<=0){
      amount = 1;
    }
    if(amount>9){
      amount = 9;
    }
    setParagrapgh(data.slice(0,amount));
  };
  return (
    <div className="text-center text-2xl font-semibold my-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragrapgh</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          className="text-center mx-5 w-24 bg-slate-100 rounded-md"
        />
        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded-md"
        >
          Generate
        </button>
      </form>
      <div>
        {paragrapgh.map((item, index) => {
          return <p className="font-normal" key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default App;
