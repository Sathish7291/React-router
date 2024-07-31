
import React from 'react';

function Card({ data }) {
  return (
    <>
      <div className="col">
        <div className="card h-100">
          <img src={data.img} className="card-img-top image-with-box-shadow" height='200' alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
          </div>
          <div className="card-footer">
          <small className="custom-card-footer">By {data.author}</small>
            <small className="custom-card-footer">{data.date}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;