async function start() {
  // const form = document.getElementById("myForm");
  // await fetch will wait for promise in fetch to resolve before continuing
  // const response = await fetch("https://ldt-tech-test.herokuapp.com/api/startlistentries", {dataType: 'jsonp'})
  const response = await fetch("./startlistentries.json")
  const data = await response.json();

  createEventList(data)
  console.log(data)
  const html = data.map(race => {
    return `
    <div class="race">
    <p>Race: ${race.eventTitle}</p>
    <p>Name: ${race.firstName + " " + race.lastName}</p>
    <p>Ticket Price Value: ${race.ticketPrice.value}</p>
    </div>
    `
  }).join('')
  document.querySelector("#app")
  .insertAdjacentHTML("afterbegin", html);
}

start()

function createEventList(eventList) {

}

