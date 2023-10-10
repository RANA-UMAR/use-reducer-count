/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Tour from "./Tour";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();

      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (tours.length === 0){
    return(
      <>
      <h2 className="text-center font-bold text-3xl mb-3">No Tour Left</h2>
      <div className="text-center">
      <button className=" font-bold text-xl border border-sky-400 px-5 text-sky-600" onClick={fetchTours}>Refresh</button>
      </div>
      </>
    )
  }
  return (
    <>
      <Tour tours={tours} removeTours={removeTours} />
    </>
  );
};

export default App;
