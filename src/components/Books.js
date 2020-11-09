import React, { Component } from "react";
import Search from "./Search";
import request from "superagent";
import BookList from "./BookList";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
    };
  }

  bookSearch = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        const cleanData = this.cleanData(data);
        this.setState({ books: cleanData });
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = "";
      }
      return book;
    });
    return cleanedData;
  };

  render() {
    return (
      <div className="container">
        <Search bookSearch={this.bookSearch} handleSearch={this.handleSearch} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
