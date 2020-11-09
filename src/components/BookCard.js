import React from "react";

const BookCard = (props) => {
  return (
    <div class="col-lg-6">
      <div class="card-body book-card">
        <div className="card">
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{props.title}</h3>
            <h4>Author: {props.author}</h4>
            <p className="card-text">
              Published Date:{" "}
              {props.publishedDate === "0000"
                ? "Not available"
                : props.publishedDate.substring(0, 4)}
            </p>
            <a href={props.bookLink} class="btn btn-primary">
              See more
            </a>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
