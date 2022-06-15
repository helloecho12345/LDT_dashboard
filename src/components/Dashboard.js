// import React from 'react';
// import jsonData from './startlistentries.json';

// const Dashboard = () => {

//   const startlistentries = jsonData.map(data => data)
//   console.log(startlistentries)
//   const filter = () => {
//     // if ()
//     console.log('Hi')
//     // e.preventDefault()

//   }
  
//   return (
//     <div>
//       <div>
//         <input id="searchBar" type="text" placeholder="Enter Event Name" />
//         <button id="lookUp" type="submit" onClick={filter}>Search</button>
//         {/* <button onClick={filter}>Filter</button> */}
      
//       </div>
//       <br></br>

//         <div>{startlistentries.map(entry => (
//             // <div key={entry.id}>
//             <li>Organiser: {entry.organiserID} <br></br>   Race: {entry.eventTitle}   <br></br>   Name: {entry.firstName + " " + entry.lastName}   <br></br>   {entry.ticketPrice.value}   <br></br></li>
//             // </div>
//             )
//         </div>
//       <br></br>
//     </div>

//       );
// }
// };

// export default Dashboard

// // const html = data.map(race => {
//   //     return `
//   //     <div class="race">
//   //     <p>Race: ${race.eventTitle}</p>
//   //     <p>Name: ${race.firstName + " " + race.lastName}</p>
//   //     <p>Ticket Price Value: ${race.ticketPrice.value}</p>
//   //     </div>
//   //     `
//   //   }).join('')
//   //   document.querySelector("#app")
//   //   .insertAdjacentHTML("afterbegin", html);
//   // }    