import React from 'react';
import jsonData from './startlistentries.json';

const Dashboard = () => {

  const gettingData = jsonData.map(data => data)
  console.log(gettingData)
  const filter = () => {
    console.log('Hi')
  }
  
  
  return (
    <div>
      <div>
        <input id="searchBar" type="text" placeholder="Enter Event Name" />
        <button id="lookUp" type="submit" onClick={filter}>Search</button>
        {/* <button onClick={filter}>Filter</button> */}
      </div>
      <br></br>
      <div>{gettingData.map(each => 
          <li>Organiser: {each.organiserID} <br></br>   Race: {each.eventTitle}   <br></br>   Name: {each.firstName + " " + each.lastName}   <br></br>   {each.ticketPrice.value}</li>
          )}
      </div>
      {/* <li>{gettingData.map(each =>
          <li>'{each.firstName + " " + each.lastName}'</li>
          )}
      </li> */}
      {/* <li>{gettingData.map(each =>
          <li>{each.ticketPrice.value}</li>
          )}
      </li> */}
    </div>

  );
}

export default Dashboard

// const html = data.map(race => {
  //     return `
  //     <div class="race">
  //     <p>Race: ${race.eventTitle}</p>
  //     <p>Name: ${race.firstName + " " + race.lastName}</p>
  //     <p>Ticket Price Value: ${race.ticketPrice.value}</p>
  //     </div>
  //     `
  //   }).join('')
  //   document.querySelector("#app")
  //   .insertAdjacentHTML("afterbegin", html);
  // }    