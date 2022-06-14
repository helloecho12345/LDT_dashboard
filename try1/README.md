# LDT Tech Test

# The challenge

### Context

Before an event occurs, an event organiser needs to have a list of all the participants who are taking part in their event and which race they are running in . This list is called a ‘race startlist’.

When someone makes a booking through our site, we need to collect all their relevant information and display it to our event organisers in a clear, easy to read format. 

### The data

We have created an API that returns an array of json objects that replicates our booking data. Each object holds key information about the booking, some or all of which may be useful information to include on an organiser’s race startlist

The data can be found [here](https://ldt-tech-test.herokuapp.com/api/startlistentries). To use the data provided in your application, you may either: 

1. Query the endpoint provided (i.e. a simple GET request)
2. Copy and paste the data into a file (within your application)

It does not matter which option you choose.

### Specification

You have been asked to build a dashboard that makes it easy for for organisers to view race startlist entries and ticket sale revenue.

1. It must be possible for organisers to apply a filter so that they can see only their startlist entries.
    * Need to filter by organiserId and/or eventId
      * What is the difference between raceId and eventId?
      * Is there more than one organiser for every event? Can there be multiple organisers for each event?
      * Are there multiple ticketTitles? If so, do they need to be organised differently? e.g. Premium ticket holders have better starting positions, extra perks?
      * Why is there an eventTitle and organiserTitle?


2. It must also be possible for each organiser to see how much they have made in ticket sales.
    * Need to filter by organiserId and eventId and sum the fee for each entry.
      * What is the difference between value and originalValue?
      * Why are the fees all 0?



If you have time, you have also been given the opportunity to build in one other feature you think will be useful for our event organisers. As an engineer at Let’s Do This, you are heavily involved in all parts of a product’s development, so in addition to testing your coding ability, we also want to see how you think about engineering in the context of a broader product. Hence, we’re giving you some space to build something you think might be useful.

Some questions that might be helpful to consider:

- What do other products in this space usually do?
- How much time will your proposed features likely take you to implement? Do you have enough time? If not, is there a simpler way to give a user 80% of the experience?

Again, we would like to emphasise we are aware that you might well have other commitments! Even if you don’t quite get the feature you’re going for done, we’d be interested to hear how you thought about the product, and how you might extend it if you got the chance.


* Other Features: 
    * Check status to make sure all participants are confirmed. Otherwise, follow-up with unconfirmed participants. If there is enough time, the follow-up could be automated, and then by person if no response.
    * Could provide stats based on age - how have past participants done in their age category?
    * Average times at certain points in the race
    * Prizes for reaching certain points in the race - e.g. can receive stamps/stickers for reaching halfway that can be swapped for items/entries for a raffle
  This may involve text/number recognition to record racers passing a certain point with their event card or barcode on wristband that needs to be swiped (although runners may not like this because it slows them down to get it scanned) - could have a barcode on their entry card and a picture of them gets recorded passing various points
    * "Loyalty" card for achieving a certain number of races in a year
    * What are other things that motivate runners?

* Would be good to have a roundtable with event organisers to see what issues they have had in the past that could possibly be addressed.



#### Notes

example json object:
{"id":"624b1c72aceef16d23c04de5",
"bookingDate":"2022-04-04T16:27:30.170Z",
"emailAddress":"stephen.cook@example.com",
"firstName":"stephen",
"lastName":"cook",
"status":"CONFIRMED",
"eventId":18414,
"eventTitle":"The Great North Run",
"organiserTitle":"Great Run",
"organiserId":26391,
"raceId":"jKm3jv",
"raceStartDate":"2022-09-12T09:00:00.000Z",
"raceTitle":"Half Marathon",
"ticketPrice":
  {"originalValue":4300,
  "value":4300,
  "fee":0,
  "currencyCode":"GBP"},
"ticketId":"0434147382",
"ticketTitle":"Standard Entry"},
