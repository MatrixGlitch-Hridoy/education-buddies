import React from 'react';

const Service = (props) => {
    const {name,image,description,price} = props.service;
    return (
        <div>
            <div className="col p-2">
              <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    {description}
                  </p>
                  <p className="card-text">{price}</p>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="button">Details</button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default Service;