import React, { Component } from "react";
import SearchPrompt from "./SearchPrompt";
import List from "./List";
import api from "../utils/api";
import employees from "../utils/employees";
import { useState } from "react";



class SearchResults extends Component {
  state = {
    search: "",
    results: [],
    names: [],
    searchedEmployee: []
  };

  
  componentDidMount() { 


    this.setState({ results: employees })

    // Push employee name for each employee into apiNames

    let apiNames = [];

    employees.map(employee => (
      apiNames.push(employee.employee_name)
      
    ))

    // Set state.names to all the emplyee names in apiNames.

    this.setState({ names: apiNames })
      
  }

  // Using the query, ie. the emplyee name submitted by the user, filter through the employees array and get us all the data for any employee whose name matches the query.

  searchEmployee = query => {
    this.setState({ searchedEmployee: employees.filter(employee => employee.employee_name === query )})
  }

  // Will be used with onChange in SearchForm.js to render datalist results in real time

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };


  // When the form is submitted, run searchEmployee with the query = `this.state.search`

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmployee(this.state.search);
  };

  render() { 

    // Send pertinent info to SearchForm and send the data from the user's search to the List component
    
    return (
      <div>
        <SearchPrompt
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          names={this.state.names}
        />
        <List results={this.state.searchedEmployee} />
      </div>
    );
  }
};

export default SearchResults;
