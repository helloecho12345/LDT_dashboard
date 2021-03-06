import startlistentries from '../startlistentries.json'
import { useState } from 'react';

const SearchTable = () => {
    const [searchTerm, setsearchTerm] = useState("");
    // const keys = ["organiserId", "eventTitle", "firstName", "lastName"];
  return ( 
    <div className="container">
      <input
      type="text" 
      placeholder="Search" 
      className="form-control" 
      style={{ marginTop: 50, marginBottom: 20, width: "40%" }}
      onChange ={(e) => {
        setsearchTerm(e.target.value);
      }}
      />
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Organiser</th>
            <th>Event</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {startlistentries.filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.organiserId.toString().includes(searchTerm) ||
              val.eventTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.lastName.toLowerCase().includes(searchTerm.toLowerCase())
            ){
              return val;
              
            }
          }).map(entry => (
              <tr key={entry.id}>
                <td>{entry.organiserId}</td>
                <td>{entry.eventTitle}</td>
                <td>{entry.firstName}</td>
                <td>{entry.lastName}</td>
                <td>{entry.ticketPrice.fee}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
   );
}
 
export default SearchTable;