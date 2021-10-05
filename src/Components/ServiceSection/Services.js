import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./services.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 className="text-center my-5">Our Services</h1>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">  
      {services.slice(0, 3).map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
      </div>
      </div>
      
      </div>
    
  );
};

export default Services;
