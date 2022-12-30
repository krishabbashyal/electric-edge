# ElectricEdge

### A platform that will facilitate connections between electric vehicles and privately owned charging stations. There are many different types of charging stations, including those that are publicly available and those that are privately owned. Public charging stations are typically located in areas that are easily accessible to the public, such as in parking lots or along roadsides. Private charging stations, on the other hand, are typically owned by individuals or businesses and are only available for use by those who have permission to access them. A platform that facilitates connections between EVs and privately owned charging stations could potentially be useful in a number of ways. For example, it could make it easier for EV owners to find and access charging stations when they are away from home. It could also help to increase the availability of charging stations, particularly in areas where public charging options are limited.

- **Charger Owner**: This person will be the one to list their charger on the platform, as well as information about their charger such as: Type of charger, How quickly the charger works, Price per hour of use, Hours of availability, etc. Once they list their charger, Charger Seekers will be able to view and submit requests to come and use the charger that was listed. The Charger Owner will be able to approve or deny requests.

- **Charger Seeker**: This person will be the one to seek out potential chargers that they would like to request to use while on the go, These people will be able to view and select from the chargers that have been listed by the Charger Owners. They will be required to submit requests to come and use the charger that was listed. If the Charger Owner approves the request, the exact location of the charger will be shared.

## Current Technical Stack (Subject to Change):

- **Node.js (v18.12.1)**: Our runtime for JavaScript so we will be able to run it outside of the browser, we are using v18.12.1 but any recent version should be fine.

- **Express.js**: Our backend minimalist framework for the API, everything must be done from scratch meaning that it will provide a good learning experience.

- **Vue.js**: Our frontend portion of the application, we will use functional components to create the application, good marketability for job market.

- **PostgreSQL**: Database that we will use, no reason for this other than having no experince with anything else. Want to dive into relational DBs before looking into MongoDB.

- **Git/GitHub**: Used for version control and online repository, this way we can keep track of our project and have it online if we need it on the go.

## Local Setup Steps:


- **Kanban Software & Project Management Tool**: We will be making use of a Kanban board to keep everyone on the same page in terms of progression and what everyone is currently working on.
	- Our workflow will be separated into different columns on the board, each column will represent a specific stage in the ticket's cycle. 
		- Backlog - These will be things that will need to be done at some point, but as of now they are blocked and are not prioritized
		- To Do - These are issues that are ready to be worked on, and can be picked up by and one of the developers, tickets will be prioritized, so complete the highest priority ticket that you are able to
		- In Progress - Tickets in this column are being worked on by another developer, meaning that if you wish to work on this ticket you must first communicate with the current ticket holder, either ask to have it, or contribute on it together.  
		- Code Review - Once a developer has completed a ticket they will open a pull-request (PR) to add the changes they made into the code base, in order to do this one of the other developers must take a look at the code and ensure that everything looks up to standard and should work well. If all is good, the PR will be approved and the changed will reflect on the sandbox website
		- IT testing - once the PR is merged it will be pushed into our developer sandbox, from there the developer  who worked on the ticket must go and test out the changes to make sure everything is working as expected, ie nothing is broken, no other features or sections of the application are hindered with the new change
		- Ready For UAT - Once a ticket has passed IT testing, the person who completed the IT testing will move to the ticket to this column to notify others that the ticket is ready for UAT 
		-  UAT Testing - is similar to IT testing, but the testing is done by someone other than the developer who worked on the ticket, this allows for a second protection system in the event that there is something that the original developer did not catch.
		- Ready for Production - this is where tickets that are 100% completed will sit, the only thing left to do is push it to the live site. This will be done manually once we have completed major feature sets
		- Completed, ticket is done and no other work is required, if changes need to be made another ticket should be created
    

