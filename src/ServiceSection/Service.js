import React from 'react';

const Service = (props) => {
    const {name,image,description,price,instructor} = props.service;
    return (
        <div>
            <div className="col p-2 mb-5">
              <div className="card h-100">
                <img src={image} className="h-75 card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p>by: {instructor}</p>
                  <h4 className="card-text">${price}</h4>
                  <p className="card-text">
                    {description}
                  </p>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="button">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Service;