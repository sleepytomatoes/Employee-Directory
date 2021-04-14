import React from "react";

/// Take in the results, which is an array of all employees, and create a table for each employee with all of his or her data.
 
function List(props) {
  return ( 

    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>

        {props.results.map(result => (

          <tr>
            <td>{result.id}</td>
            <td>{result.employee_name}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.DOB}</td>
          </tr>

        ))}

      </tbody>
    </table>

  );
}

export default List;
