import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Badge } from "./ui/badge";
import carShop from "../data/carShop.json";

const Carsshop = () => {
  const { id } = useParams();
  const [shop, setShop] = useState(null);

  useEffect(() => {
    const foundCar = carShop.find((c) => c.id.toString() === id);
    setShop(foundCar);
  }, [id]);

  if (!shop) {
    return <div className="text-center mt-10 text-red-500 text-xl">Car not found.</div>;
  }

  return (
<div>hh</div>
  );
};

export default Carsshop;
