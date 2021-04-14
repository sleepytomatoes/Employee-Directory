import React, { Component } from "react";
import employees from "../utils/employees";
import List from "../components/List";



class Employees extends Component {
  state = {
    results: []
  };

  
 
  componentDidMount() {

    this.setState({ results: employees })

  }

  

  render() {
    return (
      <div>
        <h1 className="text-center">All Employees</h1>
        <List results={this.state.results} />
      </div>
    );
  }
}

export default Employees;
